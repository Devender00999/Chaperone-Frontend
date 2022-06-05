import React, { useEffect, useState } from "react";
import {
   CommonContainer,
   MainContent,
   PageHeading,
   SearchInput,
} from "../../styledComponents/common/Common/Common.styles";
import { SelectTags } from "../../styledComponents/SelectTag/SelectTag.styles";
import SelectTag from "../../styledComponents/SelectTag/SelectTag";
import EasyBuyCard from "../../styledComponents/EasyBuyCard/EasyBuyCard";
import { useDispatch, useSelector } from "react-redux";
import * as easybuyActions from "../../store/easybuy";
import Loader from "../../components/Loader/Loader";

const EasyBuy = (props) => {
   const [category, setCategory] = useState("");
   const [price, setPrice] = useState("");
   const [apiCalled, setApiCalled] = useState(false);

   const prices = [500, 1000, 2000];
   const priceRange = prices.map((price) => "< ₹" + price);

   const products = useSelector(
      easybuyActions.filteredProducts(category, price)
   );

   const loading = useSelector((state) => state.easybuy.loading);

   const dispatch = useDispatch();
   useEffect(() => {
      if (products.length === 0 && !apiCalled) {
         dispatch(easybuyActions.loadProducts());
         setApiCalled(true);
      }
   }, [dispatch, products, apiCalled]);

   return loading ? (
      <Loader />
   ) : (
      <>
         <MainContent direction="column" flex={3}>
            <PageHeading style={{ marginBotton: "20px" }}>Easy Buy</PageHeading>
            <SelectTags>
               <SearchInput
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  type="search"
                  disabled={price}
                  className="form-control"
                  placeholder="Search product"
               />
               or
               <SelectTag
                  disabled={category}
                  defaultValue="All Prices"
                  onChange={(e) => setPrice(e.target.value)}
                  options={priceRange}
                  selected={false}
               />
            </SelectTags>

            <CommonContainer justify="flex-start">
               {products.map((item, id) => (
                  <EasyBuyCard small key={id} data={item} />
               ))}
            </CommonContainer>
         </MainContent>
      </>
   );
};

export default EasyBuy;
