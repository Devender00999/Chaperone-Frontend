import React from "react";
import { Route } from "react-router-dom";

const DefaultRoutes = (
  <React.Fragment>
    <Route path="/unauthorised" element={<>You are unauthorised</>} />
    <Route path="*" element={<>404 Not Found!</>} />
  </React.Fragment>
);

export default DefaultRoutes;
