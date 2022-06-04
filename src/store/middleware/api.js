import * as actions from "../api";
import config from "../../config";
import http from "../../services/httpService";

const api =
   ({ dispatch }) =>
   (next) =>
   async (action) => {
      if (action.type !== actions.apiCallBegan.type) return next(action);
      const { url, method, data, onError, onSuccess, onStart } = action.payload;
      if (onStart) dispatch({ type: onStart });
      next(action);
      try {
         const response = await http.request({
            baseURL: config.apiUrl,
            url,
            data,
            method,
         });
         dispatch(actions.apiCallSuccess(response.data));

         // if sucess is defined
         if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
         return response;
      } catch (error) {
         dispatch(actions.apiCallFailed(error.message));
         if (onError)
            dispatch({
               type: onError,
               payload: {
                  message: error.response.data,
                  statusMessage: error.message,
               },
            });
         return error.response;
      }
   };

export default api;
