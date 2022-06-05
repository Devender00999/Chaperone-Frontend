import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "../../../styledComponents/common/Table/DataTable";
import {
   PageHeading,
   HeadingContainer,
   HeadingContent,
   MainContent,
   PrimaryButton,
} from "../../../styledComponents/common/Common/Common.styles";
import * as easybuyActions from "../../../store/easybuy";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const EasyProducts = () => {
   const [query, setQuery] = useState("");
   const [isApiCalled, setIsApiCalled] = useState(false);
   const navigator = useNavigate();

   const dispatch = useDispatch();
   const products = useSelector(easybuyActions.filteredProducts(query));
   const error = useSelector((state) => state.easybuy.error);
   const loading = useSelector((state) => state.easybuy.loading);

   useEffect(() => {
      if (products.length === 0 && !isApiCalled) {
         dispatch(easybuyActions.loadProducts());
         setIsApiCalled(true);
      }
   }, [dispatch, isApiCalled, products]);

   // show error
   useEffect(() => {
      if (error && !loading) {
         toast.error(error.message || error);
      }
   }, [error, loading]);

   const handleEdit = (id) => {
      dispatch(easybuyActions.selectProduct(id));
      navigator(`${id}`);
   };

   const handleDelete = async (id) => {
      const result = await dispatch(easybuyActions.removeProduct(id + "dsf"));
      if (result.status !== 200) {
         toast.error(error.message || error);
      }
   };

   return (
      <>
         <MainContent direction={"column"} flex={"auto"}>
            <HeadingContainer style={{ marginBottom: "1rem" }}>
               <PageHeading>Edit Your Listed products</PageHeading>
               <HeadingContent>
                  <Form.Control
                     style={{
                        width: "200px",
                        outline: "none",
                     }}
                     type="search"
                     placeholder="Search"
                     value={query}
                     onChange={(e) => setQuery(e.target.value)}
                  />
                  <Link
                     className="primaryButton"
                     style={{ textDecoration: "none", color: "White" }}
                     to="/admin/easy-buy/new"
                  >
                     <PrimaryButton className="primaryButton">
                        Add New
                     </PrimaryButton>
                  </Link>
               </HeadingContent>
            </HeadingContainer>
            <DataTable
               data={products}
               page="EasyBuy"
               onEdit={handleEdit}
               onDelete={handleDelete}
            />
         </MainContent>
      </>
   );
};

export default EasyProducts;
