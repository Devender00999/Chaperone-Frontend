import React, { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
   MainContent,
   PageHeading,
   PrimaryButton,
} from "../../../styledComponents/common/Common/Common.styles";
import RightSideBar from "../../../styledComponents/SidePanel/RightSideBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import * as easybuyActions from "../../../store/easybuy";
import { Alert } from "@mui/material";
const NewEasyProduct = () => {
   const [formData, setFormData] = useState({
      price: 0,
      name: "",
      images: [],
      ownerName: "",
      ownerNumber: "",
      amenities: [],
   });
   const [errorMessage, setErrorMessage] = useState(null);
   const selectedProduct = useSelector(
      (state) => state.easybuy.selectedProduct
   );
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const error = useSelector((state) => state.easybuy.error);
   const loading = useSelector((state) => state.easybuy.loading);

   const { id } = useParams();

   useEffect(() => {
      if (id !== "new") {
         if (!selectedProduct) {
            dispatch(easybuyActions.selectProduct(id));
         }
         if (selectedProduct) {
            setFormData({ ...selectedProduct });
         }
      }
   }, [selectedProduct, id, dispatch]);

   // show error
   useEffect(() => {
      if (error && !loading) {
         setErrorMessage(error);
      }
   }, [error, loading]);

   const handleChange = ({ target }) => {
      let { type, value, name } = target;

      setFormData((prev) => {
         if (type === "file") {
            value = target.files;
         }
         if (name === "amenities") {
            value = target.value.split(", ");
         }
         return { ...prev, [name]: value };
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const product = new FormData();
      product.append("name", formData.name);
      product.append("price", formData.price);
      for (var image of formData.images) {
         product.append("images", image);
      }
      product.append("ownerName", formData.ownerName);
      product.append("ownerNumber", formData.ownerNumber);
      product.append("amenities", formData.amenities);
      let result;
      if (id === "new") {
         result = await dispatch(easybuyActions.addProduct(product));
      } else {
         result = await dispatch(easybuyActions.editProduct(id, product));
      }
      if (result.status === 200) {
         return navigate("/admin/easy-buy");
      }
      setErrorMessage(result.data);
   };

   const convertToString = (list) => {
      if (list && typeof list !== "string") return list.join(", ");
      return list;
   };
   return (
      <>
         <MainContent
            direction={"column"}
            flex={4}
            style={{ paddingBottom: "10px" }}
         >
            <PageHeading style={{ marginBottom: "10px" }}>Easy Buy</PageHeading>
            <Form>
               <Row
                  style={{
                     marginRight: 0,
                     padding: 0,
                     flexDirection: "column",
                     columnGap: "20px",
                  }}
                  className="removeGutter"
               >
                  {errorMessage && (
                     <Alert severity="error">
                        {errorMessage.message || errorMessage}
                     </Alert>
                  )}
                  <Col md style={{ paddingRight: 0 }}>
                     <Form.Group>
                        <Form.Label> Name of Product</Form.Label>
                        <br />

                        <Form.Control
                           className="mb-2 d-flex pe-0"
                           name="name"
                           type="text"
                           value={formData.name}
                           placeholder="Enter product's name"
                           onChange={handleChange}
                        ></Form.Control>
                     </Form.Group>
                  </Col>
                  <Col md style={{ paddingRight: 0 }}>
                     <Form.Group className="mb-2" style={{ columnGap: "20px" }}>
                        <Form.Label>Price Range</Form.Label>
                        <Form.Control
                           name="price"
                           type="number"
                           onChange={handleChange}
                           required
                           value={formData.price}
                           placeholder="Initial price"
                        />
                     </Form.Group>
                  </Col>
                  <Col md style={{ paddingRight: 0 }}>
                     <Form.Group className="mb-3">
                        <Form.Label>Upload Product Images</Form.Label>
                        <Form.Control
                           name="images"
                           type="file"
                           multiple="multiple"
                           onChange={handleChange}
                           accept="image/x-png,image/gif,image/jpeg"
                           required
                           placeholder="Initial price"
                        />
                     </Form.Group>
                  </Col>
                  <Col md style={{ paddingRight: 0 }}>
                     <Form.Group
                        className="mb-2 d-flex"
                        style={{ columnGap: "20px" }}
                     >
                        <div style={{ flex: 1 }}>
                           <Form.Label>Owner's Name </Form.Label>

                           <Form.Control
                              name="ownerName"
                              type="name"
                              placeholder="Enter owner's name"
                              onChange={handleChange}
                              value={formData.ownerName}
                              required
                           />
                        </div>

                        <div style={{ flex: 1 }}>
                           <Form.Label>Owner’s Contact Number</Form.Label>
                           <br />
                           <Form.Control
                              name="ownerNumber"
                              type="number"
                              placeholder="Enter owner's number"
                              onChange={handleChange}
                              value={formData.ownerNumber}
                              maxLength={10}
                              minLength={10}
                              required
                           />
                        </div>
                     </Form.Group>
                  </Col>

                  <Col md style={{ paddingRight: 0 }}>
                     <Form.Group className="mb-2 pe-0">
                        <Form.Label>Amenities</Form.Label>
                        <br />
                        <Form.Control
                           as={"textarea"}
                           rows={4}
                           value={convertToString(formData.amenities)}
                           name="amenities"
                           type="text"
                           placeholder="Text"
                           onChange={handleChange}
                        ></Form.Control>
                     </Form.Group>
                  </Col>
               </Row>

               <PrimaryButton
                  onClick={handleSubmit}
                  className="btn"
                  type="submit"
               >
                  Upload Note
               </PrimaryButton>
            </Form>
            {/* <div dangerouslySetInnerHTML={{ __html: markup }} /> */}
         </MainContent>
         <RightSideBar/>
      </>
   );
};

export default NewEasyProduct;
