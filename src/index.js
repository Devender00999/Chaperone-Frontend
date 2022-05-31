// eslint-disable-next-line
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/configureStore";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// function App() {
//   const articles = useSelector(admissionActions.filteredArticles(""));
//   const loading = useSelector((state) => state.admissions.loading);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(admissionActions.loadArticles());
//   }, [dispatch]);
//   return loading === false ? (
//     <div>{JSON.stringify(articles)}</div>
//   ) : (
//     "Loading..."
//   );
// }
