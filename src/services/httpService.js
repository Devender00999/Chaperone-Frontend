import axios from "axios";

axios.interceptors.response.use(null, (err) => {
   const expectedError =
      err.response && err.response.status >= 400 && err.response.status < 500;
   if (!expectedError) {
      console.log(err);
      console.log(err.message);
   }
   return Promise.reject(err);
});

export function setJwt(jwt) {
   // const jwtToken =
   //    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk0ODA5OGY5ZDY2ZDEzMTk1M2JhNWYiLCJuYW1lIjoiRGVlcGFrIEt1bWFyIiwiZW1haWwiOiJka2FyeWFAZ21haWwuY29tIiwicHJvZmlsZVBpYyI6Ii9wcm9maWxlUGljcy9wcm9maWxlUGljLTE2NTM4OTk0MTY5NDItNTgyNDczNjA5LmpwZWciLCJyb2xlIjoyLCJpYXQiOjE2NTQxOTg5NDh9.AmgbwLRyBIhpPE6ATzgTvnTqlUwb_g5SKvOCPGktvfw";
   axios.defaults.headers.common["x-auth-token"] = jwt;
}
setJwt();
const http = {
   get: axios.get,
   post: axios.post,
   put: axios.put,
   patch: axios.patch,
   delete: axios.delete,
   request: axios.request,
   setJwt,
};

export default http;
