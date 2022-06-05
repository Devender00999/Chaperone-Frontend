import { createSelector, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { apiCallBegan } from "./api";

const slice = createSlice({
   name: "easybuy",
   initialState: {
      products: [],
      selectedProduct: null,
      loading: false,
      error: null,
   },
   reducers: {
      errorCleaned: (state, action) => {
         state.error = null;
      },
      productRequested: (state, action) => {
         state.loading = true;
         state.error = null;
      },
      productRequestFailed: (state, action) => {
         state.loading = false;
         state.error = action.payload.message;
      },
      productsReceived: (state, action) => {
         state.products = action.payload;
         state.loading = false;
         state.error = null;
      },
      productAdded: (state, action) => {
         state.products.push(action.payload);
         state.loading = false;
         state.error = null;
         toast.success("Product category added successfully.");
      },
      productRemoved: (state, action) => {
         state.loading = false;
         state.error = null;
         state.products = state.products.filter(
            (product) => product._id !== action.payload._id
         );
         toast.success("Product category deleted successfully.");
      },
      productUpdated: (state, action) => {
         const index = state.products.findIndex(
            (product) => product._id === action.payload._id
         );
         state.selectedProduct = action.payload;
         state.products[index] = action.payload;
         state.loading = false;
         state.error = null;
         toast.success("Product category updated successfully.");
      },
      productSelected: (state, action) => {
         state.selectedProduct = action.payload;
         state.loading = false;
         state.error = null;
      },
   },
});

const {
   productsReceived,
   productRequestFailed,
   productRequested,
   errorCleaned,

   productAdded,
   productRemoved,
   productUpdated,
   productSelected,
} = slice.actions;

export default slice.reducer;

// url
const url = "/easybuy";

// action creator for getting all products
export const loadProducts = () =>
   apiCallBegan({
      url,
      onStart: productRequested.type,
      onError: productRequestFailed.type,
      onSuccess: productsReceived.type,
   });

// action creator for adding a product
export const addProduct = (product) =>
   apiCallBegan({
      url,
      method: "post",
      data: product,
      onStart: productRequested.type,
      onError: productRequestFailed.type,
      onSuccess: productAdded.type,
   });

// action creator for adding a product
export const removeProduct = (id) =>
   apiCallBegan({
      url: url + "/" + id,
      method: "delete",
      onStart: productRequested.type,
      onError: productRequestFailed.type,
      onSuccess: productRemoved.type,
   });

// action creator to edit product
export const editProduct = (id, data) =>
   apiCallBegan({
      url: url + "/" + id,
      data,
      onSuccess: productUpdated.type,
      method: "patch",
      onStart: productRequested.type,
      onError: productRequestFailed.type,
   });

// action creator for selecting product
export const selectProduct = (id) => (dispatch, getState) => {
   if (!id) return dispatch(productSelected(null));
   const { products } = getState().easybuy;
   const product = products.find((product) => product._id === id);
   if (product) return dispatch(productSelected(product));

   return dispatch(
      apiCallBegan({
         url: url + "/" + id,
         onStart: productRequested.type,
         onError: productRequestFailed.type,
         onSuccess: productSelected.type,
      })
   );
};

export const filteredProducts = (query = "", price = "") => {
   if (price) price = price.substring(3);
   return createSelector(
      (state) => state.easybuy.products,
      (products) =>
         products.filter((product) => {
            if (!price)
               return product.name.toLowerCase().includes(query.toLowerCase());
            return parseInt(product.price) < parseInt(price);
         })
   );
};
export const cleanError = () => errorCleaned({});
