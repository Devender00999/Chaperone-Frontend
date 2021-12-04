import React from "react";
import Service from "../styledComponents/ServiceCard/Service";
import {
  ServicesContainer,
  ServicesHeading,
} from "../styledComponents/ServiceCard/Service.styles";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesHeading className="gradient-border">
        Our Services
      </ServicesHeading>
      <Service></Service>
    </ServicesContainer>
  );
};

export default Services;
