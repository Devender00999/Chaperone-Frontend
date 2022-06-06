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
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
const forWhom = ["Girls", "Boys"];
const prices = ["5000", 10000, "15000", 18000, 19000, 25000];
const priceRange = prices.map((price) => "< " + price);

const FindPG = (props) => {
   const dispatch = useDispatch();

   const [query, setQuery] = useState("");
   const [price, setPrice] = useState("");
   const [apiCalled, setApiCalled] = useState();

   const allPGDetails = useSelector(
      findPGActions.filterPGDetails(query, price)
   );
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
               <SelectTag
                  selected
                  disabled={price}
                  options={forWhom}
                  defaultValue="For Whom"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
               />
               or
               <SelectTag
                  selected
                  disabled={query}
                  defaultValue="Select Price Range"
                  options={priceRange}
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
               />
            </SelectTags>

            <CommonContainer justify="flex-start">
               {allPGDetails.length > 0 ? (
                  allPGDetails.map((pg, id) => (
                     <PGCard small key={id} pgDetails={pg} />
                  ))
               ) : (
                  <ErrorMessage
                     severity="warning"
                     error="No PG details Found"
                     style={{ width: "100%" }}
                  />
               )}
            </CommonContainer>
         </MainContent>
      </>
   );
};

export default FindPG;
