import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledFact = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  text-align: center;
`;

const Fact = ({ children }) => <StyledFact>{children}</StyledFact>;

Fact.propTypes = {
  children: PropTypes.node
};

export { Fact };
