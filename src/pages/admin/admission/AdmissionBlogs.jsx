import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "../../../styledComponents/common/Table/DataTable";
import { useDispatch, useSelector } from "react-redux";
import {
    PageHeading,
    HeadingContainer,
    HeadingContent,
    MainContent,
    PrimaryButton,
} from "../../../styledComponents/common/Common/Common.styles";
import { toast } from "react-toastify";

// import Actions from "../../../redux/actions/Action";
import * as admissionActions from "../../../store/admissions";
// import { useDispatch } from "react-redux";

const AdmissionBlogs = () => {
    const [query, setQuery] = useState("");
    const [apiCalled, setApiCalled] = useState(false);
    const admissions = useSelector(admissionActions.filteredArticles(query));
    const dispatch = useDispatch();
    const navigator = useNavigate();

    const handleEdit = (id) => {
        const article = admissions.find((article) => article._id === id);
        console.log(article._id);
        dispatch(admissionActions.selectArticle(article._id));
        navigator(id);
    };

    useEffect(() => {
        if (!apiCalled && admissions.length === 0) {
            dispatch(admissionActions.loadArticles());
            setApiCalled(true);
        }
    }, [dispatch, admissions, apiCalled]);

    const handleDelete = async (id) => {
        try {
            dispatch(admissionActions.removeArticle(id));
            toast.success("Admission article deleted.");
        } catch (ex) {
            toast.error(ex.response.message);
        }
    };
    return (
        <>
            <MainContent direction={"column"} flex={"auto"}>
                <HeadingContainer>
                    <PageHeading>Edit Your Admission Blogs</PageHeading>
                    <HeadingContent>
                        <Form.Control
                            style={{ width: "200px", outline: "none" }}
                            type="search"
                            placeholder="Search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <Link
                            style={{ textDecoration: "none", color: "White" }}
                            to="/admin/admissions/new"
                        >
                            <PrimaryButton className="primaryButton">
                                Add New
                            </PrimaryButton>
                        </Link>
                    </HeadingContent>
                </HeadingContainer>
                <DataTable
                    data={admissions}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    page="Admission"
                />
            </MainContent>
        </>
    );
};

export default AdmissionBlogs;
