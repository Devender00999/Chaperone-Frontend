import { Route, Navigate } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdmissionBlogs from "../pages/admin/admission/AdmissionBlogs";
import React from "react";
import NewAdmissionBlog from "../pages/admin/admission/NewAdmissionBlog";
import RoadmapBlogs from "../pages/admin/roadmap/RoadmapBlogs";
import NewRoadmapBlog from "../pages/admin/roadmap/NewRoadmap";
import ProjectBlogs from "../pages/admin/project/Projects";
import NewProject from "../pages/admin/project/NewProject";
import AcademicItems from "../pages/admin/academics/AcademicItems";
import NewAcademicsItem from "../pages/admin/academics/NewAcademicsItem";
import CareerAware from "../pages/admin/careeraware/CareerAware";
import NewCareer from "../pages/admin/careeraware/NewCareer";
import getUserDetails from "../requests/decode/decodeToken";
import NewPG from "../pages/admin/findpg/NewPG";
import Pgs from "../pages/admin/findpg/PGPage";
import EasyProducts from "../pages/admin/easybuy/Easybuy";
import NewEasyProduct from "../pages/admin/easybuy/NewEasyProduct";

const user = getUserDetails();

const AdminRoutes = user && (
   <React.Fragment>
      <Route
         path="/admin"
         exact
         element={true ? <AdminDashboard /> : <Navigate to="/unauthorised" />}
      />

      {/* Admin Admission Routes */}
      <Route path="/admin/admissions" exact element={<AdmissionBlogs />} />
      <Route
         path="/admin/admissions/:id"
         exact
         element={<NewAdmissionBlog />}
      />
      {/* Admin Roadmap Routes */}
      <Route path="/admin/roadmaps" exact element={<RoadmapBlogs />} />
      <Route path="/admin/roadmaps/:new" exact element={<NewRoadmapBlog />} />
      <Route
         path="/admin/roadmaps/:roadmapId/:id"
         exact
         element={<NewRoadmapBlog />}
      />

      {/* Admin Project Routes */}
      <Route path="/admin/projects" exact element={<ProjectBlogs />} />
      <Route
         path="/admin/projects/:newProject"
         exact
         element={<NewProject />}
      />
      <Route
         path="/admin/projects/:roadmapId/:projectId"
         exact
         element={<NewProject />}
      />

      {/* Admin Academics Routes  */}
      <Route path="/admin/academics" exact element={<AcademicItems />} />
      <Route path="/admin/academics/:id" exact element={<NewAcademicsItem />} />

      {/* Admin Academics Routes  */}
      <Route path="/admin/career-aware" exact element={<CareerAware />} />
      <Route path="/admin/career-aware/:id" exact element={<NewCareer />} />

      {/* Admin Academics Routes  */}
      <Route path="/admin/find-pg" exact element={<Pgs />} />
      <Route path="/admin/find-pg/:id" exact element={<NewPG />} />

      {/* Admin Academics Routes  */}
      <Route path="/admin/easy-buy" exact element={<EasyProducts />} />
      <Route path="/admin/easy-buy/:id" exact element={<NewEasyProduct />} />
   </React.Fragment>
);

export default AdminRoutes;
