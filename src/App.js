import React, { useState } from "react";
import "./index.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import HomeScreen from "./pages/HomeScreen";
import Admission from "./pages/Admission";
import Academics from "./pages/Academics";
import Roadmaps from "./pages/Roadmaps";
import CareerAware from "./pages/CareerAware";
import FindPG from "./pages/FindPG";
import EasyBuy from "./pages/EasyBuy";
import DoubtDesk from "./pages/DoubtDesk";
import Blogs from "./pages/Blogs";
import RoadmapPage from "./styledComponents/styledPages/RoadmapPage/RoadmapPage";
import CareerPage from "./styledComponents/styledPages/CareerPage/CareerPage";
import DoubtDeskPage from "./styledComponents/styledPages/DoubtDeskPage/DoubtDeskPage";
import PGPage from "./styledComponents/styledPages/PGPage/PGPage";
import DoubtDeskAnswers from "./styledComponents/styledPages/DoubtDeskPage/DoubtDeskAnswers";
import {
  Content,
  StyledContainer,
  StyledMain,
} from "./styledComponents/common/Common/Common.styles";
import Navbar from "./styledComponents/Navbar/Navbar";
import SideBar from "./styledComponents/SidePanel/SideBar";
import AdminDashboard from "./pages/admin/AdminDashboard";
import NewBlog from "./pages/admin/NewBlog";
import AdminBlogs from "./pages/admin/AdminBlogs";
import AdminAdmission from "./pages/admin/AdminAdmission";
import AdminCareerAware from "./pages/admin/AdminCareerAware";
import AdminRoadmaps from "./pages/admin/AdminRoadmaps";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminFindPG from "./pages/admin/AdminFindPG";
import AdminEasyBuy from "./pages/admin/AdminEasyBuy";

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
          <Routes>
            {/* <Route path="/" exact element={} /> */}

            <Route path="/" exact element={<HomeScreen />} />

            <Route path="/admission" exact element={<Admission />} />

            <Route path="/roadmaps" exact element={<Roadmaps />} />

            <Route path="/roadmap-page" exact element={<RoadmapPage />} />

            <Route path="/academics" exact element={<Academics />} />

            <Route path="/career-aware" exact element={<CareerAware />} />

            <Route path="/career-aware/:data" exact element={<CareerPage />} />

            <Route path="/find-pg" exact element={<FindPG />} />

            <Route path="/find-pg/:id" element={<PGPage />} />

            <Route path="/easy-buy" exact element={<EasyBuy />} />

            <Route path="/doubt-desk" exact element={<DoubtDesk />} />

            <Route
              path="/doubt-desk/ask-question"
              exact
              element={<DoubtDeskPage />}
            />

            <Route
              path="/doubt-desk/:id"
              exact
              element={<DoubtDeskAnswers />}
            />

            <Route path="/blogs" exact element={<Blogs />} />
            <Route path="/not-found" element={<>Page Not Found</>} />
            <Route path="/unauthorised" element={<>You are unauthorised</>} />
          </Routes>
          {isAdmin ? (
            <Routes>
              <Route
                path="/admin"
                exact
                element={
                  isAdmin ? <AdminDashboard /> : <Navigate to="/unauthorised" />
                }
              />

              <Route
                path="/admin/admissions"
                exact
                element={<AdminAdmission />}
              />

              <Route path="/admin/blogs" exact element={<AdminBlogs />} />
              <Route path="/admin/blogs/new" exact element={<NewBlog />} />
              <Route path="/admin/roadmaps" exact element={<AdminRoadmaps />} />
              <Route path="/admin/projects" exact element={<AdminProjects />} />
              <Route
                path="/admin/career-aware"
                exact
                element={<AdminCareerAware />}
              />
              <Route path="/admin/find-pg" exact element={<AdminFindPG />} />
              <Route path="/admin/easy-buy" exact element={<AdminEasyBuy />} />
              <Route path="/*" element={<Navigate to="/not-found" />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/admin*" element={<Navigate to="/unauthorised" />} />
            </Routes>
          )}
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default App;
