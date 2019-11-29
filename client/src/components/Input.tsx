import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { IconButton } from "./";

const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;

  ${IconButton} {
    display: flex;
    align-items: flex-end;
  }
`;

const StyledInputLabel = styled.p`
  margin-bottom: 2px;
`;

const StyledInput = styled.input`
  border: ${({ isValid }) =>
    isValid ? "0.1429rem solid transparent" : "0.1429rem solid #e31717"};
  border-radius: 0.2143rem;
  &:focus {
    outline: none;
  }
`;

const Input = ({ label, isValid = true, value, onChange, icon: Icon }) => (
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

Input.propTypes = {
  label: PropTypes.string,
  isValid: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.func
};

export { Input };
