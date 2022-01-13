import React from "react";
import {
  MainContent,
  PageHeading,
} from "../../styledComponents/common/Common/Common.styles";

import CareerCard from "../../styledComponents/CareerCard/CareerCard";
import SelectTag from "../../styledComponents/SelectTag/SelectTag";
import { SelectTags } from "../../styledComponents/SelectTag/SelectTag.styles";
import RightSideBar from "../../styledComponents/SidePanel/RightSideBar";
import { careerData } from "../../data/career";

const CareerAware = (props) => {
  const profileTypes = ["Internship", "Job"];
  const profiles = [
    "Web Developer",
    "Android Developer",
    "Java Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  return (
    <>
      <MainContent direction="column" flex={3}>
        <PageHeading>Career Aware</PageHeading>

        <SelectTags>
          <SelectTag
            selected={true}
            defaultValue="Select Profile Type"
            options={profileTypes}
          />

          <SelectTag
            selected={false}
            defaultValue="Select Profile"
            options={profiles}
          />
        </SelectTags>

        {careerData.map((data, id) => (
          <CareerCard key={id} data={data} />
        ))}
      </MainContent>
      <RightSideBar heading="" content={[]} />
    </>
  );
};

export default CareerAware;
