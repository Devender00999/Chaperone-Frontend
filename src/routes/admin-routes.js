import { Route, Navigate } from "react-router-dom";
import AdminBlogs from "../pages/admin/AdminBlogs";
import AdminCareerAware from "../pages/admin/AdminCareerAware";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminEasyBuy from "../pages/admin/AdminEasyBuy";
import AdminFindPG from "../pages/admin/AdminFindPG";
import AdminProjects from "../pages/admin/AdminProjects";
import AdminRoadmaps from "../pages/admin/AdminRoadmaps";
import AdmissionBlogs from "../pages/admin/admission/AdmissionBlogs";
import NewBlog from "../pages/admin/NewBlog";
import React from "react";

const user = JSON.parse(localStorage.getItem("user"));
console.log(user + "  dsafasdfasdfsdf");
const AdminRoutes = user && (
  <React.Fragment>
    <Route
      path="/admin"
      exact
      element={
        user.isAdmin ? <AdminDashboard /> : <Navigate to="/unauthorised" />
      }
    />

    <Route path="/admin/admissions" exact element={<AdmissionBlogs />} />

    <Route path="/admin/blogs" exact element={<AdminBlogs />} />
    <Route path="/admin/blogs/new" exact element={<NewBlog />} />
    <Route path="/admin/roadmaps" exact element={<AdminRoadmaps />} />
    <Route path="/admin/projects" exact element={<AdminProjects />} />
    <Route path="/admin/career-aware" exact element={<AdminCareerAware />} />
    <Route path="/admin/find-pg" exact element={<AdminFindPG />} />
    <Route path="/admin/easy-buy" exact element={<AdminEasyBuy />} />
  </React.Fragment>
);

export default AdminRoutes;
