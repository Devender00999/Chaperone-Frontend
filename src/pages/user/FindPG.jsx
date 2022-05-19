import React from "react";
import {
  CommonContainer,
  MainContent,
  PageHeading,
} from "../../styledComponents/common/Common/Common.styles";
import PGCard from "../../styledComponents/PGCard/PGCard";
import { SelectTags } from "../../styledComponents/SelectTag/SelectTag.styles";
import SelectTag from "../../styledComponents/SelectTag/SelectTag";
import { pgData } from "../../data/pgFinder";

const FindPG = (props) => {
  const forWhom = ["Girls", "Boys"];
  const prices = ["15000", 18000, 19000, 25000];
  const priceRange = prices.map((price) => "< " + price);
  // console.log(pgData);
  return (
    <>
      <MainContent direction="column" flex={3}>
        <PageHeading>Find PG</PageHeading>

        <SelectTags>
          <SelectTag selected options={forWhom} defaultValue="For Whom" />
          <SelectTag
            selected
            options={priceRange}
            defaultValue="Select Price Range"
          />
        </SelectTags>

        <CommonContainer>
          {pgData.map((pg, id) => (
            <PGCard small key={id} data={pg} />
          ))}
        </CommonContainer>
      </MainContent>
    </>
  );
};

export default FindPG;
