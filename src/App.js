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

const sideDataForUser = [
  {
    title: "Home",
    link: "/",
    icon: "/images/sidebar/home.svg",
    selected: true,
  },
  {
    title: "Admission",
    link: "/admission",
    icon: "/images/sidebar/admission.svg",
    selected: false,
  },
  {
    title: "Roadmaps",
    link: "/roadmaps",
    icon: "/images/sidebar/roadmap.svg",
    selected: false,
  },
  {
    title: "Academics",
    link: "/academics",
    icon: "/images/sidebar/academics.svg",
    selected: false,
  },
  {
    title: "Career Aware",
    link: "/career-aware",
    icon: "/images/sidebar/careeraware.svg",
    selected: false,
  },
  {
    title: "Find PG",
    link: "/find-pg",
    icon: "/images/sidebar/findpg.svg",
    selected: false,
  },
  {
    title: "Easy Buy",
    link: "/easy-buy",
    icon: "/images/sidebar/easybuy.svg",
    selected: false,
  },
  {
    title: "Doubt Desk",
    link: "/doubt-desk",
    icon: "/images/sidebar/doubtdesk.svg",
    selected: false,
  },
  {
    title: "Write a blog",
    link: "/blogs",
    icon: "/images/sidebar/blogs.svg",
    selected: false,
  },
];

const sideDataForAdmin = [
  {
    title: "Dashboard",
    link: "/admin",
    icon: "/images/sidebar/home.svg",
    selected: true,
  },
  {
    title: "Admissions",
    link: "/admin/admissions",
    icon: "/images/sidebar/admission.svg",
    selected: false,
  },
  {
    title: "Roadmaps",
    link: "/admin/roadmaps",
    icon: "/images/sidebar/roadmap.svg",
    selected: false,
  },
  {
    title: "Projects",
    link: "/admin/projects",
    icon: "/images/sidebar/academics.svg",
    selected: false,
  },
  {
    title: "Career Aware",
    link: "/admin/career-aware",
    icon: "/images/sidebar/careeraware.svg",
    selected: false,
  },
  {
    title: "Find PG",
    link: "/admin/find-pg",
    icon: "/images/sidebar/findpg.svg",
    selected: false,
  },
  {
    title: "Easy Buy",
    link: "/admin/easy-buy",
    icon: "/images/sidebar/easybuy.svg",
    selected: false,
  },
  {
    title: "Blogs",
    link: "/admin/blogs",
    icon: "/images/sidebar/blogs.svg",
    selected: false,
  },
];

const App = () => {
  const location = useLocation();

  let [user, setUser] = useState({
    user: localStorage.getItem("user"),
    isAdmin: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isAdmin = user.isAdmin && location.pathname.includes("admin");
  const [selectSideBar, setSelectSideBar] = useState(
    isAdmin ? "Dashboard" : "Home"
  );

  return !user ? (
    <Home setUser={setUser} />
  ) : (
    <StyledContainer>
      <Navbar />
      <StyledMain className="main">
        <SideBar
          sideData={isAdmin ? sideDataForAdmin : sideDataForUser}
          title={selectSideBar}
          setTitle={setSelectSideBar}
        ></SideBar>

        <Content>
          <UserRoutes />

          {isAdmin ? (
            <AdminRoutes isAdmin={isAdmin} />
          ) : (
            <Routes>
              <Route
                path="/admin/*"
                element={<Navigate to="/unauthorised" />}
              />
            </Routes>
          )}
          <DefaultRoutes />
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default App;
