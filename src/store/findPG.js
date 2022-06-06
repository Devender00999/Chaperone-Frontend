import { createSelector, createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
   name: "findPG",
   initialState: {
      allPGDetails: [],
      selectedPGDetails: null,
      loading: false,
      error: null,
   },

   reducers: {
      pgDetailsRequested: (state, action) => {
         state.loading = true;
         state.error = null;
      },
      pgDetailsRequestFailed: (state, action) => {
         state.loading = false;
         state.error = action.payload;
         console.log(action.payload);
      },
      allPGDetailsReceived: (state, action) => {
         state.allPGDetails = action.payload;
         state.loading = false;
         state.success = true;
         state.error = null;
      },

      pgDetailsReceived: (state, action) => {
         state.selectedPGDetails = action.payload;
         state.loading = false;
         state.error = null;
      },
      pgDetailsAdded: (state, action) => {
         state.allPGDetails.push(action.payload);
         state.loading = false;
         state.error = null;
      },

      pgDetailsRemoved: (state, action) => {
         state.allPGDetails = state.allPGDetails.filter(
            (pgDetails) => pgDetails._id !== action.payload._id
         );

         state.loading = false;
         state.error = null;
      },

      pgDetailsUpdated: (state, action) => {
         state.allPGDetails = state.allPGDetails.map((pgDetails) => {
            if (action.payload._id === pgDetails._id) return action.payload;
            return pgDetails;
         });

         state.loading = false;
         state.error = null;
      },
   },
});

const {
   pgDetailsAdded,
   pgDetailsRequested,
   pgDetailsRequestFailed,
   pgDetailsReceived,
   allPGDetailsReceived,
   pgDetailsRemoved,
   pgDetailsUpdated,
} = slice.actions;

// url
const fingPG = "/findpg";

// action creator for adding a pgDetails
export const addPGDetails = (pgDetails) =>
   apiCallBegan({
      url: fingPG,
      method: "post",
      data: pgDetails,
      onStart: pgDetailsRequested.type,
      onSuccess: pgDetailsAdded.type,
      onError: pgDetailsRequestFailed.type,
   });

// action creator to get filtered allPGDetails
export const filterPGDetails = (query = "", price = "") => {
   if (price) price = price.substring(2);
   console.log(price);

   return createSelector(
      (state) => state.findPG.allPGDetails,
      (allPGDetails) =>
         allPGDetails.filter((pgDetails) => {
            if (!price)
               return (
                  pgDetails.gender
                     .toLowerCase()
                     .includes(query.toLowerCase()) ||
                  pgDetails.location.toLowerCase().includes(query.toLowerCase())
               );
            return parseInt(pgDetails.ratePerMonth) < parseInt(price);
         })
   );
};
// action creator to load a allPGDetails
export const loadPGDetails = (id) => (dispatch, getState) => {
   const { allPGDetails } = getState().findPG;

   const pgDetails = allPGDetails.find(
      (pgDetails) => pgDetails._id.toString() === id
   );

   if (pgDetails) return dispatch(pgDetailsReceived(pgDetails));

   return dispatch(
      apiCallBegan({
         url: fingPG + "/" + id,
         onStart: pgDetailsRequested.type,
         onSuccess: pgDetailsReceived.type,
         onError: pgDetailsRequestFailed.type,
      })
   );
};

// action creator to load all allPGDetails
export const loadAllPGDetails = () =>
   apiCallBegan({
      url: fingPG,
      onStart: pgDetailsRequested.type,
      onSuccess: allPGDetailsReceived.type,
      onError: pgDetailsRequestFailed.type,
   });

// action create to delete a pgDetails
export const removePGDetails = (id) =>
   apiCallBegan({
      url: fingPG + "/" + id,
      method: "delete",
      onStart: pgDetailsRequested.type,
      onSuccess: pgDetailsRemoved.type,
      onError: pgDetailsRequestFailed.type,
   });

// action creator for adding a pgDetails
export const updatePGDetails = (id, pgDetails) =>
   apiCallBegan({
      url: fingPG + "/" + id,
      method: "patch",
      data: pgDetails,
      onStart: pgDetailsRequested.type,
      onSuccess: pgDetailsUpdated.type,
      onError: pgDetailsRequestFailed.type,
   });

export default slice.reducer;
