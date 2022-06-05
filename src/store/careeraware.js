import { createSelector, createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
   name: "careerAware",
   initialState: {
      allArticles: [],
      selectedArticle: null,
      loading: false,
      error: null,
   },

   reducers: {
      articleRequested: (state, action) => {
         state.loading = true;
         state.error = null;
      },
      articleRequestFailed: (state, action) => {
         state.loading = false;
         state.error = action.payload;
         console.log(action.payload);
      },
      articlesReceived: (state, action) => {
         state.allArticles = action.payload;
         state.loading = false;
         state.success = true;
         state.error = null;
      },

      articleReceived: (state, action) => {
         state.selectedArticle = action.payload;
         state.loading = false;
         state.success = true;
         state.error = null;
      },
      articleAdded: (state, action) => {
         state.allArticles.push(action.payload);
         state.loading = false;
         state.error = null;
      },

      articleRemoved: (state, action) => {
         console.log(action.payload);
         state.allArticles = state.allArticles.filter(
            (article) => article._id !== action.payload._id
         );

         state.loading = false;
         state.error = null;
         state.success = true;
      },

      articleUpdated: (state, action) => {
         console.log(action.payload);
         state.allArticles = state.allArticles.map((article) => {
            if (action.payload._id === article._id) return action.payload;
            return article;
         });

         state.loading = false;
         state.error = null;
      },
   },
});

const {
   articleAdded,
   articleRequested,
   articleRequestFailed,
   articleReceived,
   articlesReceived,
   articleRemoved,
   articleUpdated,
} = slice.actions;

// url
const careerAware = "/careeraware";

// action creator for adding a article
export const addArticle = (article) =>
   apiCallBegan({
      url: careerAware,
      method: "post",
      data: article,
      onStart: articleRequested.type,
      onSuccess: articleAdded.type,
      onError: articleRequestFailed.type,
   });

// action creator to get filtered articles
export const filterArticles = (query="") =>
   createSelector(
      (state) => state.careerAware.allArticles,
      (allArticles) =>
         allArticles.filter((article) => {
            return (
               article.position.toLowerCase().includes(query.toLowerCase()) ||
               article.companyName
                  .toLowerCase()
                  .includes(query.toLowerCase()) ||
               article.jobType.toLowerCase().includes(query.toLowerCase())
            );
         })
   );

// action creator to load a article
export const loadArticle = (id) => (dispatch, getState) => {
   const { allArticles } = getState().careerAware;

   const article = allArticles.find((article) => article._id.toString() === id);

   if (article) return dispatch(articleReceived(article));

   return dispatch(
      apiCallBegan({
         url: careerAware + "/" + id,
         onStart: articleRequested.type,
         onSuccess: articleReceived.type,
         onError: articleRequestFailed.type,
      })
   );
};

// action creator to load all articles
export const loadAllArticles = () =>
   apiCallBegan({
      url: careerAware,
      onStart: articleRequested.type,
      onSuccess: articlesReceived.type,
      onError: articleRequestFailed.type,
   });

// action create to delete a article
export const removeArticle = (id) =>
   apiCallBegan({
      url: careerAware + "/" + id,
      method: "delete",
      onStart: articleRequested.type,
      onSuccess: articleRemoved.type,
      onError: articleRequestFailed.type,
   });

// action creator for adding a article
export const updateArticle = (id, article) =>
   apiCallBegan({
      url: careerAware + "/" + id,
      method: "patch",
      data: article,
      onStart: articleRequested.type,
      onSuccess: articleUpdated.type,
      onError: articleRequestFailed.type,
   });

export default slice.reducer;
