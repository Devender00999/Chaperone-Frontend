import { createSelector, createSlice } from "@reduxjs/toolkit";
import { loadArticles } from "./admissions";
import { loadRoadmapArticles, loadRoadmapProjects } from "./roadmaps";
import { loadProducts } from "./easybuy";
import { loadAllArticles } from "./careeraware";
import { loadAllPGDetails } from "./findPG";
const slice = createSlice({
   name: "homescreen",
   initialState: {
      allData: [],
      loading: false,
      error: null,
      query: "",
   },

   reducers: {
      dataRequested: (state, action) => {
         state.loading = true;
         state.error = null;
      },
      dataRequestFailed: (state, action) => {
         state.loading = false;
         state.error = action.payload;
      },
      queryAdded: (state, action) => {
         state.query = action.payload;
         state.loading = false;
         state.error = action.payload;
      },
      allDataReceived: (state, action) => {
         state.allData = action.payload;
         state.loading = false;
         state.error = null;
      },
   },
});

const { dataRequested, allDataReceived, queryAdded } = slice.actions;

// action creator to load a allPGDetails
export const loadAllData = () => async (dispatch, getState) => {
   dispatch(dataRequested({}));
   await dispatch(loadArticles());
   await dispatch(loadRoadmapArticles());
   await dispatch(loadRoadmapProjects());
   await dispatch(loadProducts());
   await dispatch(loadAllArticles());
   await dispatch(loadAllPGDetails());
   const { articles } = getState().admissions;
   const { allRoadmapArticles: roadmaps } = getState().roadmaps;
   const { products } = getState().easybuy;
   const { allRoadmapProjects: projects } = getState().roadmaps;
   const { allArticles: careers } = getState().careerAware;
   const { allPGDetails } = getState().findPG;
   return dispatch(
      allDataReceived([
         ...articles.map((article) => ({
            type: "admission",
            data: article,
            createdAt: article.createdAt,
         })),
         ...roadmaps.map((roadmap) => ({
            type: "roadmaps",
            data: roadmap,
            createdAt: roadmap.createdAt,
         })),
         ...products.map((product) => ({
            type: "products",
            data: product,
            createdAt: product.createdAt,
         })),
         ...projects.map((project) => ({
            type: "projects",
            data: project,
            createdAt: project.createdAt,
         })),
         ...careers.map((careerArticle) => ({
            type: "careers",
            data: careerArticle,
            createdAt: careerArticle.createdAt,
         })),
         ...allPGDetails.map((pgDetails) => ({
            type: "findpg",
            data: pgDetails,
            createdAt: pgDetails.createdAt,
         })),
      ])
   );
};

export const addQuery = (query) => queryAdded(query);

export const filteredData = () =>
   createSelector(
      (state) => state.homescreen.allData,
      (state) => state.homescreen.query,
      (allData, query) => {
         if (query.length === 0) {
            let arr = [...allData];
            return arr.sort((data1, data2) => {
               const time2 = new Date(data2.createdAt);
               const time1 = new Date(data1.createdAt);
               return time2 - time1;
            });
         } else {
            return allData.filter((data) => {
               return JSON.stringify(Object.values(data.data))
                  .toLowerCase()
                  .includes(query.toLowerCase());
            });
         }
      }
   );
export default slice.reducer;
