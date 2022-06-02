import React, { useEffect } from "react";
import { MainContent } from "../../styledComponents/common/Common/Common.styles";
import RightSideBar from "../../styledComponents/SidePanel/RightSideBar";
import BlogsCard from "../../styledComponents/BlogsCard/BlogsCard";
import { useDispatch, useSelector } from "react-redux";
import * as admissionActions from "../../store/admissions";
const Admission = (props) => {
  const dispatch = useDispatch();

  const rightSideBarData = {
    heading: "Quick Links",
    content: [
      "Choice filling Round 1 for B Tech...",
      "Final Datesheet for Reappear exam",
      "Datesheet Mid Term exams",
      "Scholarship Program",
    ],
  };
  const admissionArticles = useSelector((state) => state.admissions.articles);
  const loading = useSelector((state) => state.admissions.loading);

  useEffect(() => {
    if (admissionArticles.length === 0)
      dispatch(admissionActions.loadArticles());
  },[admissionArticles, dispatch]);

  return (
    <>
      <MainContent direction="column" flex={3}>
        {loading === false
          ? admissionArticles.map((blog, id) => (
              <BlogsCard type="admission" key={id} {...blog} />
            ))
          : "Loading"}
      </MainContent>
      <RightSideBar {...rightSideBarData} />
    </>
  );
};

export default Admission;
