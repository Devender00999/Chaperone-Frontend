import { Route } from "react-router-dom";
import Academics from "../pages/user/Academics";
import Admission from "../pages/user/Admission";
import CareerAware from "../pages/user/CareerAware";
import HomeScreen from "../pages/user/HomeScreen";
import Roadmaps from "../pages/user/Roadmaps";
import Roadmap from "../styledComponents/styledPages/Roadmap/Roadmap";
import CareerPage from "../styledComponents/styledPages/CareerPage/CareerPage";
import FindPG from "../pages/user/FindPG";
import PGPage from "../styledComponents/styledPages/PGPage/PGPage";
import EasyBuy from "../pages/user/EasyBuy";
import DoubtDesk from "../pages/user/DoubtDesk";
import DoubtDeskPage from "../styledComponents/styledPages/DoubtDeskPage/DoubtDeskPage";
import DoubtDeskAnswers from "../styledComponents/styledPages/DoubtDeskPage/DoubtDeskAnswers";
import Blogs from "../pages/user/Blogs";
import React from "react";
import Blog from "../styledComponents/styledPages/Blog/Blog";

const UserRoutes = (
  <React.Fragment>
    <Route index exact element={<HomeScreen />} />
    <Route path="admission" exact element={<Admission />} />

    <Route path="roadmaps" element={<Roadmaps />}></Route>
    <Route path="roadmaps/:id" element={<Roadmap />} />
    <Route path="roadmaps/:id/:articleId" element={<Blog />} />

    <Route path="academics" exact element={<Academics />} />

    <Route path="career-aware" exact element={<CareerAware />} />
    <Route path="career-aware/:data" exact element={<CareerPage />} />

    <Route path="find-pg" exact element={<FindPG />} />
    <Route path="find-pg/:id" element={<PGPage />} />

    <Route path="easy-buy" exact element={<EasyBuy />} />

    <Route path="doubt-desk" exact element={<DoubtDesk />} />

    <Route path="doubt-desk/ask-question" exact element={<DoubtDeskPage />} />

    <Route path="doubt-desk/:id" exact element={<DoubtDeskAnswers />} />

    <Route path="blogs" exact element={<Blogs />} />
  </React.Fragment>
);

export default UserRoutes;
