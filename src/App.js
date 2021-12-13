import React from "react";
import { Route, Routes } from "react-router";
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
const sideData = [
  {
    title: "Home",
    link: "/home",
    icon: "/images/common/home.svg",
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
const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/home" exact element={<HomeScreen sideData={sideData} />} />
      <Route
        path="/admission"
        exact
        element={<Admission sideData={sideData} />}
      />
      <Route
        path="/roadmaps"
        exact
        element={<Roadmaps sideData={sideData} />}
      />
      <Route
        path="/academics"
        exact
        element={<Academics sideData={sideData} />}
      />
      <Route
        path="/career-aware"
        exact
        element={<CareerAware sideData={sideData} />}
      />
      <Route path="/find-pg" exact element={<FindPG sideData={sideData} />} />
      <Route path="/easy-buy" exact element={<EasyBuy sideData={sideData} />} />
      <Route
        path="/doubt-desk"
        exact
        element={<DoubtDesk sideData={sideData} />}
      />
      <Route path="/blogs" exact element={<Blogs sideData={sideData} />} />
    </Routes>
  );
};

export default App;
