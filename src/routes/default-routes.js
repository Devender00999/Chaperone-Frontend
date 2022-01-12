import React from "react";
import { Navigate, Route } from "react-router-dom";

const DefaultRoutes = (
  <React.Fragment>
    <Route path="/unauthorised" element={<>You are unauthorised</>} />
    <Route path="/not-found" element={<>Not Found</>} />
    <Route path="*" element={<Navigate to="/not-found" />} />
  </React.Fragment>
);

export default DefaultRoutes;
