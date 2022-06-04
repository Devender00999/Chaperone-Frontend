// eslint-disable-next-line
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/configureStore";
// import { useSelector, useDispatch } from "react-redux";
// import * as roadmapActions from "./store/roadmaps";

ReactDOM.render(
   <BrowserRouter>
      <Provider store={store}>{<App />}</Provider>
   </BrowserRouter>,
   document.getElementById("root")
);

// function App() {
// 	const articles = useSelector((state) => state.roadmaps.allRoadmaps);
// 	const loading = useSelector((state) => state.admissions.loading);

// 	const dispatch = useDispatch();
// 	useEffect(() => {
// 		dispatch(roadmapActions.loadRoadmaps());
// 	}, [dispatch]);
// 	return loading === false ? (
// 		<div>{articles.map((article) => JSON.stringify(article))}</div>
// 	) : (
// 		"Loading..."
// 	);
// }
