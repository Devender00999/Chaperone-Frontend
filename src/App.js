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

const sideDataForUser = [
  {
    title: "Home",
    link: "/dashboard",
    icon: "/images/sidebar/home.svg",
  },
  {
    title: "Admission",
    link: "/dashboard/admission",
    icon: "/images/sidebar/admission.svg",
  },
  {
    title: "Roadmaps",
    link: "/dashboard/roadmaps",
    icon: "/images/sidebar/roadmap.svg",
  },
  {
    title: "Academics",
    link: "/dashboard/academics",
    icon: "/images/sidebar/academics.svg",
  },
  {
    title: "Career Aware",
    link: "/dashboard/career-aware",
    icon: "/images/sidebar/careeraware.svg",
  },
  {
    title: "Find PG",
    link: "/dashboard/find-pg",
    icon: "/images/sidebar/findpg.svg",
  },
  {
    title: "Easy Buy",
    link: "/dashboard/easy-buy",
    icon: "/images/sidebar/easybuy.svg",
  },
  {
    title: "Doubt Desk",
    link: "/dashboard/doubt-desk",
    icon: "/images/sidebar/doubtdesk.svg",
  },
  // {
  //   title: "Write a blog",
  //   link: "/dashboard/blogs",
  //   icon: "/images/sidebar/blogs.svg",
  //   selected: false,
  // },
];

const sideDataForAdmin = [
  {
    title: "Dashboard",
    link: "/admin",
    icon: "/images/sidebar/dashboard.svg",
  },
  {
    title: "Admissions",
    link: "/admin/admissions",
    icon: "/images/sidebar/admission.svg",
  },
  {
    title: "Roadmaps",
    link: "/admin/roadmaps",
    icon: "/images/sidebar/roadmap.svg",
  },
  {
    title: "Projects",
    link: "/admin/projects",
    icon: "/images/sidebar/project.svg",
  },
  {
    title: "Academics",
    link: "/admin/academics",
    icon: "/images/sidebar/academics.svg",
  },
  {
    title: "Career Aware",
    link: "/admin/career-aware",
    icon: "/images/sidebar/careeraware.svg",
  },
  {
    title: "Find PG",
    link: "/admin/find-pg",
    icon: "/images/sidebar/findpg.svg",
  },
  {
    title: "Easy Buy",
    link: "/admin/easy-buy",
    icon: "/images/sidebar/easybuy.svg",
  },
];

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
    const isAdmin = user.isAdmin && location.pathname.includes("admin");
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
