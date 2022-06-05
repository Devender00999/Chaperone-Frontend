import { createSelector, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { apiCallBegan } from "./api";

const slice = createSlice({
   name: "admissions",
   initialState: {
      articles: [],
      selectedArticle: null,
      loading: false,
      error: null,
   },
   reducers: {
      articleRequested: (state, action) => {
         state.loading = true;
      },
      articleRequestFailed: (state, action) => {
         state.loading = false;
         state.error = action.payload.message;
      },
      articlesReceived: (state, action) => {
         state.articles = action.payload;
         state.loading = false;
         state.error = null;
      },
      articleSelected: (state, action) => {
         state.selectedArticle = action.payload;
         state.loading = false;
         state.error = null;
      },
      articleAdded: (state, action) => {
         state.articles.push(action.payload);
         state.loading = false;
         state.error = null;
         toast.success("Admission article added successfully.");
      },
      articleRemoved: (state, action) => {
         state.loading = false;
         state.error = null;
         state.articles = state.articles.filter(
            (article) => article._id !== action.payload.article._id
         );
         toast.success("Admission article removed successfully.");
      },
      articleUpdated: (state, action) => {
         const index = state.articles.findIndex(
            (article) => article._id === action.payload._id
         );
         state.selectedArticle = action.payload;
         state.articles[index] = action.payload;
         state.loading = false;
         state.error = null;
         toast.success("Admission article updated successfully.");
      },
   },
});

const {
   articleAdded,
   articleRemoved,
   articleUpdated,
   articlesReceived,
   articleSelected,
   articleRequestFailed,
   articleRequested,
} = slice.actions;
export { articleUpdated };
export default slice.reducer;

const admissions = "/admissions";

// action creator to load all articles
export const loadArticles = () =>
   apiCallBegan({
      url: admissions,
      onSuccess: articlesReceived.type,
      onStart: articleRequested.type,
      onError: articleRequestFailed.type,
   });

// action creator to get filtered articles
export const filteredArticles = (query) =>
   createSelector(
      (state) => state.admissions.articles,
      (articles) =>
         articles.filter((article) =>
            article.heading.toLowerCase().includes(query.toLowerCase())
         )
   );

// action creator to get an article
export const selectArticle = (id) => (dispatch, getState) => {
   const { articles } = getState().admissions;
   const article = articles.find((article) => article._id === id);
   if (article) return dispatch(articleSelected(article));
   return dispatch(
      apiCallBegan({
         url: admissions + "/" + id,
         onSuccess: articleSelected.type,
         onStart: articleRequested.type,
         onError: articleRequestFailed.type,
      })
   );
};

// action creator to add a article
export const addArticle = (article) =>
   apiCallBegan({
      url: admissions,
      onSuccess: articleAdded.type,
      method: "post",
      data: article,
      onStart: articleRequested.type,
      onError: articleRequestFailed.type,
   });

// action creator to remove a article
export const removeArticle = (id) =>
   apiCallBegan({
      url: admissions + "/" + id,
      onSuccess: articleRemoved.type,
      method: "delete",
      onStart: articleRequested.type,
      onError: articleRequestFailed.type,
   });

// action creator to edit article
export const editArticle = (id, data) => (dispatch) => {
   dispatch(
      apiCallBegan({
         url: admissions + "/" + id,
         data,
         onSuccess: articleUpdated.type,
         method: "patch",
         onStart: articleRequested.type,
         onError: articleRequestFailed.type,
      })
   );
};
