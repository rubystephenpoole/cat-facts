import React from "react";
import styled, { StyledFunction } from "styled-components";
import { IconButton, StyledIconButton } from "./IconButton";

interface InputProps {
  label: string;
  isValid: boolean;
  value: string;
  onChange: Function;
  icon: typeof IconButton;
}

const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;

  ${StyledIconButton} {
    display: flex;
    align-items: flex-end;
  }
`;

const StyledInputLabel = styled.p`
  margin-bottom: 2px;
`;

const StyledInput = styled.input`
  border: ${({ isValid }: InputProps) =>
    isValid ? "0.1429rem solid transparent" : "0.1429rem solid #e31717"};
  border-radius: 0.2143rem;
  &:focus {
    outline: none;
  }
`;

const Input = ({
  label,
  isValid = true,
  value,
  onChange,
  icon: Icon
}: InputProps) => (
  <StyledInputWrapper>
    <div>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledInput
        isValid={isValid}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </div>
    <div>{Icon && <Icon />}</div>
  </StyledInputWrapper>
);

export { Input, InputProps };
