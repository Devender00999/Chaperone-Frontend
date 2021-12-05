import React from "react";
import Service from "../styledComponents/ServiceCard/Service";
import {
  ServicesCards,
  ServicesContainer,
  ServicesHeading,
} from "../styledComponents/ServiceCard/Service.styles";

const Services = () => {
  const services = [
    {
      icon: "/images/services/write-blog.png",
      title: "Write Blog",
      desc: "Users can write blogs on technical topics of their choice or can write on suggested topics and contribute to the community by sharing their knowledge and experience.",
      link: "/",
    },

    {
      icon: "/images/services/notes-pdf.png",
      title: "Download Notes & PYQs",
      desc: "Students can download Notes, Book’s PDFs & PYQs of their resp. branch from the Academics Section. Teachers can also upload Notes to help students in exam preparation.",
      link: "/",
    },

    {
      icon: "/images/services/roadmaps.png",
      title: "Roadmaps",
      desc: "Roadmaps on Chaperone are developed by seniors & alumni which ensures that these technologies can be learned along college curriculum and will help in college projects as well.",
      link: "/",
    },

    {
      icon: "/images/services/career-aware.png",
      title: "Career Aware",
      desc: "Students can view & add Internship & Job opportunities on the portal. If a user follows this section then latest blogs on senior’s interview experience & opportunities postings will be shown in their feed.",
      link: "/",
    },

    {
      icon: "/images/services/doubt-desk.png",
      title: "Doubt Desk",
      desc: "The DoubtDesk section serves as a platform for users to ask & answer questions related to College curriculum, programming & various technologies. ",
      link: "/",
    },

    {
      icon: "/images/services/find-pg.png",
      title: "Find PG",
      desc: "If a user follows this section then all the new added PGs and related information will be shown in their feed.",
      link: "/",
    },
  ];
  return (
    <ServicesContainer>
      <ServicesHeading className="gradient-border">
        Our Services
      </ServicesHeading>
      <ServicesCards>
        {services.map((service) => (
          <Service service={service} />
        ))}
      </ServicesCards>
    </ServicesContainer>
  );
};

export default Services;
