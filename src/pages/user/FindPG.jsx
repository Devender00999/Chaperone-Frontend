import React, { useEffect, useState } from "react";
import {
   CommonContainer,
   MainContent,
   PageHeading,
} from "../../styledComponents/common/Common/Common.styles";
import PGCard from "../../styledComponents/PGCard/PGCard";
import { SelectTags } from "../../styledComponents/SelectTag/SelectTag.styles";
import SelectTag from "../../styledComponents/SelectTag/SelectTag";
import { useDispatch, useSelector } from "react-redux";
import * as findPGActions from "../../store/findPG";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
const forWhom = ["Girls", "Boys"];
const prices = ["15000", 18000, 19000, 25000];
const priceRange = prices.map((price) => "< " + price);

const FindPG = (props) => {
   const dispatch = useDispatch();

   const [query, setQuery] = useState("");
   const [apiCalled, setApiCalled] = useState();

   const allPGDetails = useSelector(findPGActions.filterPGDetails(query));
   const loading = useSelector((state) => state.findPG.loading);
   const error = useSelector((state) => state.findPG.error);

   useEffect(() => {
      if (!apiCalled && allPGDetails.length === 0) {
         dispatch(findPGActions.loadAllPGDetails());
         setApiCalled(true);
      }
   }, [apiCalled, allPGDetails, dispatch]);

   // Error handling
   useEffect(() => {
      if (error && loading === false) {
         if (error.message.message) toast.error(error.message.message);
         else toast.error(error.statusMessage);
      }
   }, [error, loading]);

   console.log(allPGDetails);
   return loading ? (
      <Loader />
   ) : (
      <>
         <MainContent direction="column" flex={3}>
            <PageHeading>Find PG</PageHeading>

            <SelectTags>
               <SelectTag selected options={forWhom} defaultValue="For Whom" />
               <SelectTag
                  selected
                  options={priceRange}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  defaultValue="Select Price Range"
               />
            </SelectTags>

            <CommonContainer justify="flex-start">
               {allPGDetails.map((pg, id) => (
                  <PGCard small key={id} pgDetails={pg} />
               ))}
            </CommonContainer>
         </MainContent>
      </>
   );
};

export default FindPG;
