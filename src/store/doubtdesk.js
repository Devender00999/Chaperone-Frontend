import { createSelector, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { apiCallBegan } from "./api";

const slice = createSlice({
   name: "doubtdesk",
   initialState: {
      allDoubts: [],
      selectedDoubt: null,
      loading: false,
      error: null,
   },
   reducers: {
      doubtRequested: (state, action) => {
         state.loading = true;
         state.error = null;
      },
      doubtRequestFailed: (state, action) => {
         state.loading = false;
         state.error = action.payload.message;
      },
      doubtsReceived: (state, action) => {
         state.allDoubts = action.payload;
         state.loading = false;
         state.error = null;
      },
      doubtAdded: (state, action) => {
         state.allDoubts.push(action.payload);
         state.loading = false;
         state.error = null;
         toast.success("doubt category added successfully.");
      },
      doubtRemoved: (state, action) => {
         state.loading = false;
         state.error = null;
         state.allDoubts = state.allDoubts.filter(
            (doubt) => doubt._id !== action.payload._id
         );
         toast.success("doubt category deleted successfully.");
      },
      doubtUpdated: (state, action) => {
         const index = state.allDoubts.findIndex(
            (doubt) => doubt._id === action.payload._id
         );
         state.selectedDoubt = action.payload;
         state.allDoubts[index] = action.payload;
         state.loading = false;
         state.error = null;
         toast.success("doubt category updated successfully.");
      },
      doubtSelected: (state, action) => {
         state.selectedDoubt = action.payload;
         state.loading = false;
         state.error = null;
      },
   },
});

const {
   doubtsReceived,
   doubtRequestFailed,
   doubtRequested,

   doubtAdded,
   doubtRemoved,
   doubtUpdated,
   doubtSelected,
} = slice.actions;

export default slice.reducer;

// url
const url = "/doubtdesk";

// action creator for getting all doubts
export const loadAllQuestions = () =>
   apiCallBegan({
      url,
      onStart: doubtRequested.type,
      onError: doubtRequestFailed.type,
      onSuccess: doubtsReceived.type,
   });

// action creator for adding a doubt
export const addDoubt = (doubt) =>
   apiCallBegan({
      url,
      method: "post",
      data: doubt,
      onStart: doubtRequested.type,
      onError: doubtRequestFailed.type,
      onSuccess: doubtAdded.type,
   });

// action creator for adding a doubt
export const removeDoubt = (id) =>
   apiCallBegan({
      url: url + "/" + id,
      method: "delete",
      onStart: doubtRequested.type,
      onError: doubtRequestFailed.type,
      onSuccess: doubtRemoved.type,
   });

// action creator to edit doubt
export const editDoubt = (id, data) =>
   apiCallBegan({
      url: url + "/" + id,
      data,
      onSuccess: doubtUpdated.type,
      method: "patch",
      onStart: doubtRequested.type,
      onError: doubtRequestFailed.type,
   });

export const addAnswer = (id, data) =>
   apiCallBegan({
      url: url + "/" + id + "/answers",
      data,
      onSuccess: doubtUpdated.type,
      method: "post",
      onStart: doubtRequested.type,
      onError: doubtRequestFailed.type,
   });

export const removeAnswer = (id, answerId) =>
   apiCallBegan({
      url: url + "/" + id + "/answers/" + answerId,
      onSuccess: doubtUpdated.type,
      method: "delete",
      onStart: doubtRequested.type,
      onError: doubtRequestFailed.type,
   });
// action creator for selecting doubt
export const selectDoubt = (id) => (dispatch, getState) => {
   if (!id) return dispatch(doubtSelected(null));
   const { allDoubts } = getState().doubtdesk;
   const doubt = allDoubts.find((doubt) => doubt._id === id);
   if (doubt) return dispatch(doubtSelected(doubt));

   return dispatch(
      apiCallBegan({
         url: url + "/" + id,
         onStart: doubtRequested.type,
         onError: doubtRequestFailed.type,
         onSuccess: doubtSelected.type,
      })
   );
};

export const filteredDoubts = (query = "", price = "") => {
   if (price) price = price.substring(3);
   return createSelector(
      (state) => state.doubtdesk.allDoubts,
      (allDoubts) =>
         allDoubts.filter((doubt) => {
            if (!price)
               return doubt.name.toLowerCase().includes(query.toLowerCase());
            return parseInt(doubt.price) < parseInt(price);
         })
   );
};
