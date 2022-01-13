import React from "react";
import {
  ServiceContainer,
  ServiceDesc,
  ServiceIcon,
  ServiceLink,
  ServiceTitle,
} from "./Service.styles";

const Service = ({ service }) => {
  return (
    <ServiceContainer>
      <ServiceIcon className="gradient-border" src={service.icon} />
      <ServiceTitle>{service.title}</ServiceTitle>
      <ServiceDesc>{service.desc}</ServiceDesc>
      <ServiceLink to={service.link}>
        <img src="/images/common/arrow.png" alt="Arrow" />
      </ServiceLink>
    </ServiceContainer>
  );
};

export default Service;
