import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconButtonType = {
  Redo: "redo",
  PaperPlane: "paper-plane"
};

const StyledIconButton = styled.button`
  background: none;
  border: none;
  cursor: ${({ enabled }) => (enabled ? "pointer" : "default")};
  opacity: ${({ enabled }) => (enabled ? "1" : "0.3")};
  transition: 0.1s opacity ease-in;

  &:focus {
    outline: none;
  }
`;

const IconButton = ({ enabled = true, children = null, onClick, type }) => (
  <StyledIconButton
    enabled={enabled}
    onClick={() => {
      enabled && onClick();
    }}
  >
    {type && <FontAwesomeIcon icon={type} size="lg" color="white" />}
    {children}
  </StyledIconButton>
);

IconButton.propTypes = {
  children: PropTypes.node,
  enabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(Object.values(IconButtonType))
};

export { IconButton };
