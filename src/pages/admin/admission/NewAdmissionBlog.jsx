import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import { EditorState } from "draft-js";
import { Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
	MainContent,
	PageHeading,
	PrimaryButton,
} from "../../../styledComponents/common/Common/Common.styles";
import StyledEditor from "../../../styledComponents/common/Common/StyledEditor";
import RightSideBar from "../../../styledComponents/SidePanel/RightSideBar";
import { useNavigate, useParams } from "react-router-dom";
import { admissionData as data } from "../../../data/admissionData";
import htmlToDraft from "html-to-draftjs";
import Request from "../../../requests/request"
import port from "../../../port.js"

const NewAdmissionBlog = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [admissionData, setAdmissionData] = useState(data);

	const [formData, setFormData] = useState({
		heading: "",
		image: "",
		content: "",
	});
	const [editorState, setEditorState] = useState();
	const { id } = params;

	useEffect(() => {
		document
			.querySelector('input[type="file"]')
			.setAttribute("accept", "image/x-png,image/jpeg");
		document.querySelector('input[type="file"]').classList.add("form-control");
	});

	const convertHTMLToDraft = (content) => {
		const blocksFromHtml = htmlToDraft(content);
		const contentState = ContentState.createFromBlockArray(
			blocksFromHtml.contentBlocks
		);
		return EditorState.createWithContent(contentState);
	};

	//Setting editor state if blog is being edited
	useEffect(() => {
		let blog;
		if (id) {
			blog = admissionData.find((blog) => blog.id === parseInt(id));
			console.log("called");
			if (blog) {
				setFormData(blog);
				const newEditor = convertHTMLToDraft(formData.content);
				setEditorState(newEditor);
			} else if (id === "new") {
				let initialState = {
					heading: "",
					image: "",
					content: "",
				};

				setFormData(initialState);
			} else {
				navigate("/not-found");
			}
		}
	}, [params, navigate, formData.content, admissionData, id]);

	// Handle Submit
	const handleSubmit = async (e) => {
		e.preventDefault();
		let reqRoute = "edit";
		let req = Request.put;
		if (id === "new") {
			reqRoute = "new";
			req = Request.post;
			console.log(formData);
		} else {
			const content = draftToHtml(
				convertToRaw(editorState.getCurrentContent())
			);
			setFormData((prev) => ({ ...prev, content: content }));
			const index = admissionData.findIndex((blog) => blog.id === formData.id);
			const newAdmissionData = [...admissionData];
			newAdmissionData[index] = { ...formData, content: content };

			const res = await req("http://localhost:" + port + "/api/admission/" + reqRoute, newAdmissionData[index])
			console.log(res);
			setAdmissionData(newAdmissionData);
			navigate("/admin/admissions");
		}
	};

	const handleChange = (e) => {
		let { type, value, name } = e.target;

		if (type === "file") {
			value = URL.createObjectURL(e.target.files[0]);
			console.log(e);
		}

		setFormData((prev) => ({ ...prev, [name]: value }));
	};
	const handleFileChange = (e) => {
		const file = e.base64;
		setFormData((prev) => ({ ...prev, image: file }));
	};
	const onEditorStateChange = (editorState) => {
		setEditorState(editorState);
	};

	return (
		<>
			<MainContent direction={"column"} flex={4}>
				<PageHeading style={{ marginBottom: "10px" }}>
					Admission Blogs
				</PageHeading>
				<Form onSubmit={handleSubmit}>
					<Row
						style={{
							marginRight: 0,
							padding: 0,
							flexDirection: "column",
							columnGap: "20px",
						}}
						className="removeGutter"
					>
						<Col md style={{ paddingRight: 0 }}>
							<Form.Group className="mb-2">
								<Form.Label>Heading</Form.Label>
								<br />
								<Form.Control
									name="heading"
									value={formData.heading}
									type="text"
									placeholder="Enter Heading"
									onChange={handleChange}
								/>
							</Form.Group>
						</Col>
						<Col md style={{ paddingRight: 0 }}>
							<Form.Group className="mb-3">
								<Form.Label>Upload Header Image</Form.Label>
								<FileBase64
									className="form-control"
									type="file"
									name="image"
									accept="image/x-png,image/gif,image/jpeg"
									onDone={handleFileChange}
									placeholder="Enter Title"
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<img
								className="mb-3 mt-3"
								src={formData.image}
								alt=""
								style={{
									width: "100%",
									height: "300px",
									display: formData.image ? "block" : "none",
								}}
							/>
						</Col>
					</Row>
					<Form.Label>Body</Form.Label>

					<div
						style={{
							border: "1px solid #D2D2D2",
							marginBottom: "20px",
							borderRadius: "5px",
						}}
					>
						<StyledEditor
							editorState={editorState}
							onEditorStateChange={onEditorStateChange}
						/>
					</div>
					<PrimaryButton onClick={handleSubmit} className="btn" type="submit">
						{id !== "new" ? "Save" : "Submit"}
					</PrimaryButton>
				</Form>
				{/* <div dangerouslySetInnerHTML={{ __html: markup }} /> */}
			</MainContent>
			<RightSideBar heading="" content={[]} />
		</>
	);
};

export default NewAdmissionBlog;
