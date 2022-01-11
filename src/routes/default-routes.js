import { Navigate, Route, Routes } from "react-router-dom";

const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path="/not-found" element={<>Page Not Found</>} />
      <Route path="/unauthorised" element={<>You are unauthorised</>} />
      <Route element={<Navigate to="/not-found" />} />
    </Routes>
  );
};

export default DefaultRoutes;
