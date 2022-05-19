import React, { useEffect } from "react";
import { MainContent } from "../../styledComponents/common/Common/Common.styles";
import RightSideBar from "../../styledComponents/SidePanel/RightSideBar";
import BlogsCard from "../../styledComponents/BlogsCard/BlogsCard";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../../redux/actions/Action";
import http from "../../services/httpService";
import config from "../../config";
import { addAdmisArticle } from "../../redux/actions/admissionActions";

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
  const allAdArticles = useSelector((state) => state.allAdArticles);

  useEffect(() => {
    async function AdArticleSetup() {
      // if (addAdmisArticle.length === 0) {
      const { data } = await http.get(config.apiUrl + "/admissions/");
      dispatch(Actions.setAllAdArticles(data));
      // }
    }
    AdArticleSetup();
  }, [dispatch]);
  return (
    <>
      <MainContent direction="column" flex={3}>
        {allAdArticles.length > 0
          ? allAdArticles.map((blog, id) => (
              <BlogsCard type="admission" key={id} {...blog} />
            ))
          : "Loading"}
      </MainContent>
      <RightSideBar {...rightSideBarData} />
    </>
  );
};

export default Admission;
