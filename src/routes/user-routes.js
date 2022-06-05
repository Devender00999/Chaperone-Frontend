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
import AdmissionBlog from "../styledComponents/styledPages/Blog/AdmissionBlog";

const UserRoutes = (
   <React.Fragment>
      <Route path="/dashboard" element={<HomeScreen />} />
      <Route path="/dashboard/admission" exact element={<Admission />} />
      <Route path="/dashboard/admission/:id" element={<AdmissionBlog />} />

      <Route path="/dashboard/roadmaps" element={<Roadmaps />}></Route>
      <Route path="/dashboard/roadmaps/:id" element={<Roadmap />} />
      <Route path="/dashboard/roadmaps/:id/:articleId" element={<Blog />} />

      <Route path="/dashboard/academics" exact element={<Academics />} />
      <Route path="/dashboard/career-aware" exact element={<CareerAware />} />
      <Route
         path="/dashboard/career-aware/:id"
         exact
         element={<CareerPage />}
      />
      <Route path="/dashboard/find-pg" exact element={<FindPG />} />
      <Route path="/dashboard/find-pg/:pgId" element={<PGPage />} />
      <Route path="/dashboard/easy-buy" exact element={<EasyBuy />} />
      <Route path="/dashboard/doubt-desk" exact element={<DoubtDesk />} />
      <Route
         path="/dashboard/doubt-desk/ask-question"
         exact
         element={<DoubtDeskPage />}
      />
      <Route
         path="/dashboard/doubt-desk/:id"
         exact
         element={<DoubtDeskAnswers />}
      />
      <Route path="/dashboard/blogs" exact element={<Blogs />} />
   </React.Fragment>
);

export default UserRoutes;
