import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "../../../styledComponents/common/Table/DataTable";
import {
  PageHeading,
  HeadingContainer,
  HeadingContent,
  MainContent,
  PrimaryButton,
  Heading,
} from "../../../styledComponents/common/Common/Common.styles";

import { roadmapsData } from "../../../data/roadmapsData";

const RoadmapBlogs = () => {
  const [roadmaps, setRoadmaps] = useState(roadmapsData);

  const navigator = useNavigate();
  const handleEdit = (id, roadmapId) => {
    navigator(`${roadmapId}/${id}`);
  };

  const handleDelete = (id, roadmapId) => {
    //finding roadmap from which articles are being deleted
    const index = roadmaps.findIndex((roadmap) => roadmap._id === roadmapId);

    //deteting the article with id
    const articles = roadmaps[index].articles.filter(
      (article) => article._id !== id
    );

    const newRoadmaps = [...roadmaps];
    newRoadmaps[index].articles = [...articles];

    setRoadmaps(newRoadmaps);
  };

  return (
    <>
      <MainContent direction={"column"} flex={"auto"}>
        <HeadingContainer>
          <PageHeading>Edit Your Roadmap Blogs</PageHeading>
          <HeadingContent>
            <Form.Control
              style={{
                width: "200px",
                outline: "none",
              }}
              type="search"
              placeholder="Search"
            />
            <PrimaryButton className="primaryButton">
              <Link
                style={{ textDecoration: "none", color: "White" }}
                to="/admin/roadmaps/new"
              >
                Add New
              </Link>
            </PrimaryButton>
          </HeadingContent>
        </HeadingContainer>
        {roadmaps.map((roadmap) => (
          <div key={roadmap._id}>
            <Heading
              style={{
                padding: "1rem 1rem",
                fontWeight: "bold",
                fontSize: "1.25rem",
                margin: "1rem 0 0",
                boxShadow: "0 0 5px rgb(0 0 0 / 10%)",
              }}
            >
              {roadmap.title}
            </Heading>
            <DataTable
              key={roadmap._id}
              id={roadmap._id}
              data={roadmap.articles}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </MainContent>
    </>
  );
};

export default RoadmapBlogs;
