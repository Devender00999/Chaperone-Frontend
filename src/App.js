import React, { useState, useEffect } from "react";
import "./index.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/user/Home";
import {
   Content,
   StyledContainer,
   StyledMain,
} from "./styledComponents/common/Common/Common.styles";
import Navbar from "./styledComponents/Navbar/Navbar";
import SideBar from "./styledComponents/SidePanel/SideBar";

import AdminRoutes from "./routes/admin-routes";
import UserRoutes from "./routes/user-routes";
import DefaultRoutes from "./routes/default-routes";
import getUserDetails from "./requests/decode/decodeToken";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { sideDataForAdmin, sideDataForUser } from "./routes/routes";

const App = () => {
   const location = useLocation();
   const userDetails = getUserDetails();

   let [user, setUser] = useState(userDetails);
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location]);

   const [selectSideBar, setSelectSideBar] = useState("Home");
   if (!user) {
      return <Home setUser={setUser} />;
   } else {
      const isAdmin = user.role === 2 && location.pathname.includes("admin");
      return (
         <StyledContainer>
            <Navbar />
            <StyledMain className="main">
               <SideBar
                  sideData={isAdmin ? sideDataForAdmin : sideDataForUser}
                  title={selectSideBar}
                  setTitle={setSelectSideBar}
               ></SideBar>

               <Content>
                  <Routes>
                     <Route path="/" element={<Navigate to="/dashboard" />} />
                     {UserRoutes}
                     {isAdmin ? (
                        AdminRoutes
                     ) : (
                        <Route
                           path="/admin/*"
                           element={<Navigate to="/unauthorised" />}
                        />
                     )}
                     {DefaultRoutes}
                  </Routes>
                  <ToastContainer />
               </Content>
            </StyledMain>
         </StyledContainer>
      );
   }
};

export default App;
