import React from "react";

import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <a href={data.website} target="_blank" rel="noreferrer">
          <img
            className="bg-white mb-3 logo"
            src={data.companylogo}
            alt=""
            width="200px"
          />
        </a>
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;
