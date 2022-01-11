import { Route, Routes } from "react-router-dom";

const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path="/unauthorised" element={<>You are unauthorised</>} />
      <Route element={<>Page Not Found</>} />
    </Routes>
  );
};

export default DefaultRoutes;
