import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
   name: "user",
   initialState: {
      details: null,
      loading: false,
      error: null,
   },

   reducers: {
      userDetailsRequested: (state, action) => {
         state.loading = true;
      },

      userDetailsRequestFailed: (state, action) => {
         state.loading = false;
         state.error = action.payload.message;
         console.log(action.payload);
      },

      addedUserDetails: (state, action) => {
         state.details = action.payload;
         state.loading = false;
         state.error = null;
      },

      userDetailsRemoved: (state, action) => {
         state.loading = false;
         state.error = null;
         state.details = null;
      },
      userDetailsUpdated: (state, action) => {
         state.details = action.payload;
         state.loading = false;
         state.error = null;
      },
   },
});

const {
   userDetailsRemoved,
   addedUserDetails,
   userDetailsUpdated,
   userDetailsRequestFailed,
   userDetailsRequested,
} = slice.actions;
export { userDetailsUpdated as articleUpdated };
export default slice.reducer;

const users = "/users";

// action creator for setting user in store
export const setUserDetails = (userDetails) => (dispatch) =>
   dispatch(addedUserDetails(userDetails));

// action creator for setting user in store
export const removeUserDetails = () => (dispatch) =>
   dispatch(userDetailsRemoved);

// action creator to update a user
export const updateUserDetails = (email, userDetails) =>
   apiCallBegan({
      url: users + "/" + email,
      method: "patch",
      data: userDetails,
      onSuccess: addedUserDetails.type,
      onStart: userDetailsRequested.type,
      onError: userDetailsRequestFailed.type,
   });
