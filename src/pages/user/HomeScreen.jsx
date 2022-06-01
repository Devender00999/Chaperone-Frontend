import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import BlogsCard from "../../styledComponents/BlogsCard/BlogsCard";
import { MainContent } from "../../styledComponents/common/Common/Common.styles";
// import Tags from "../../styledComponents/Tags/Tags";
import RightSideBar from "../../styledComponents/SidePanel/RightSideBar";
import CareerCard from "../../styledComponents/CareerCard/CareerCard";
import ProjectCard from "../../styledComponents/ProjectCard/ProjectCard";
import PGCard from "../../styledComponents/PGCard/PGCard";
import EasyBuyCard from "../../styledComponents/EasyBuyCard/EasyBuyCard";
// import { admissionData } from "../../data/admissionData";
import { careerData } from "../../data/career";
import { pgData } from "../../data/pgFinder";
import * as admissionActions from "../../store/admissions";

const HomeScreen = (props) => {
    const dispatch = useDispatch();

    // const tags = [
    //   { value: "All", selected: true },
    //   { value: "Interest", selected: false },
    //   { value: "Interest", selected: false },
    //   { value: "Interest", selected: false },
    //   { value: "Interest", selected: false },
    // ];

    const easyBuyData = [
        {
            name: "Engg. Drawing Board",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit felis ac elit lacinia semper. Vestibulum vulputate lorem elementum vulputate consectetur.",
            images: ["/images/easy-buy/img.svg"],
            price: "250",
        },
    ];
    const rightSideBarData = {
        heading: "Your Recents",
        content: [
            "Choice filling Round 1 for B Tech...",
            "Final Datesheet for Reappear exam",
            "Data Structures Notes",
            "Roadmap to UX Designing",
        ],
    };

    const allAdArticles = useSelector(admissionActions.filteredArticles(""));
    const admissionLoading = useSelector((state) => state.admissions.loading);

    useEffect(() => {
        if (allAdArticles && allAdArticles.length < 1)
            dispatch(admissionActions.loadArticles());
    }, [allAdArticles, dispatch]);

    return (
        <>
            <MainContent direction="column" flex={3}>
                {/* <Tags tags={tags} /> */}
                {admissionLoading
                    ? "Loading..."
                    : allAdArticles.map((blog, id) => (
                          <BlogsCard type="admission" key={id} {...blog} />
                      ))}
                {careerData.map((data, id) => (
                    <CareerCard key={id} data={data} />
                ))}
                <ProjectCard
                    image="/images/projects/Image.svg"
                    heading="OurApp - a social media web app in NodeJS"
                    desc="Build this full stack application where you will get to learn about building modern, fast and scalable server-side web applications with NodeJS, databases like MongoDB and more."
                    link="/"
                    githubLink="/"
                />
                {pgData.map((pg, id) => (
                    <PGCard key={id} data={pg} />
                ))}

                {easyBuyData.map((item, id) => (
                    <EasyBuyCard key={id} data={item} />
                ))}

                {/* <EasyBuyCard /> */}
            </MainContent>
            <RightSideBar {...rightSideBarData} />
        </>
    );
};

export default HomeScreen;
