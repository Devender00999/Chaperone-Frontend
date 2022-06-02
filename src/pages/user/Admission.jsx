import React, { useEffect, useState } from "react";
import { MainContent } from "../../styledComponents/common/Common/Common.styles";
import RightSideBar from "../../styledComponents/SidePanel/RightSideBar";
import BlogsCard from "../../styledComponents/BlogsCard/BlogsCard";
import { useDispatch, useSelector } from "react-redux";
import * as admissionActions from "../../store/admissions";

const rightSideBarData = {
    heading: "Quick Links",
    content: [
        "Choice filling Round 1 for B Tech...",
        "Final Datesheet for Reappear exam",
        "Datesheet Mid Term exams",
        "Scholarship Program",
    ],
};

const Admission = () => {
    const dispatch = useDispatch();
    const [apiCalled, setApiCalled] = useState(false);

    const admissionArticles = useSelector((state) => state.admissions.articles);
    const loading = useSelector((state) => state.admissions.loading);

    useEffect(() => {
        if (admissionArticles.length === 0 && !apiCalled) {
            dispatch(admissionActions.loadArticles());
            setApiCalled(true);
        }
    }, [admissionArticles, apiCalled, dispatch]);

    return (
        <>
            <MainContent direction="column" flex={3}>
                {loading === false
                    ? admissionArticles.length > 0
                        ? admissionArticles.map((blog, id) => (
                              <BlogsCard type="admission" key={id} {...blog} />
                          ))
                        : "No data found"
                    : "Loading"}
            </MainContent>
            <RightSideBar {...rightSideBarData} />
        </>
    );
};

export default Admission;
