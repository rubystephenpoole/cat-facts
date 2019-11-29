import React from "react";
import styled, { StyledComponent } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

enum IconButtonType {
  Redo = "redo",
  PaperPlane = "paper-plane"
}

interface IconButtonProps {
  enabled?: boolean;
  children?: React.ReactElement<unknown>;
  onClick?: Function;
  type?: IconButtonType;
}

const StyledIconButton = styled.button`
  background: none;
  border: none;
  cursor: ${({ enabled }: IconButtonProps) =>
    enabled ? "pointer" : "default"};
  opacity: ${({ enabled }: IconButtonProps) => (enabled ? "1" : "0.3")};
  transition: 0.1s opacity ease-in;

  &:focus {
    outline: none;
  }
`;

const IconButton = ({
  enabled = true,
  children = null,
  onClick,
  type
}: IconButtonProps) => (
  <StyledIconButton
    enabled={enabled}
    onClick={() => {
      enabled && onClick();
    }}
  >
    <>
      {type && <FontAwesomeIcon icon={type} size="lg" color="white" />}
      {children}
    </>
  </StyledIconButton>
);

export { IconButton, StyledIconButton, IconButtonProps, IconButtonType };
