import React, { useState, useEffect } from "react";
import { Reset } from "styled-reset";
import styled from "styled-components";
import { Input, Fact, IconButton } from ".";
import { useFact, useSendMessage } from "../hooks";
import { IconButtonType } from "./IconButton";

const StyledApp = styled.div`
  display: flex;
  box-sizing: border-box;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    135deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 46, 55, 1) 100%
  );
  color: #fff;
  font-family: "Raleway", sans-serif;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  ${IconButton} {
    margin: 0 auto;
  }
`;

const StyledContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const App = () => {
  const [phoneNumber, setPhoneNumber] = useState("16475503272");
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(true);
  const [factIsValid, setFactIsValid] = useState(false);
  const [fact, isFetchingFact, fetchFact] = useFact();
  const [sid, isFetchingMessage, fetchSendMessage] = useSendMessage(
    fact,
    phoneNumber
  );

  useEffect(() => {
    fetchFact();
  }, []);

  useEffect(() => {
    setFactIsValid(fact && fact.length > 0 && fact.length < 256);
  }, [fact]);

  useEffect(() => {
    fetchFact();
  }, [sid]);

  const onPhoneNumberChange = value => {
    setPhoneNumberIsValid(value.length === 11);
    setPhoneNumber(value);
  };

  const onRefreshClick = () => {
    if (isFetchingMessage || isFetchingFact) {
      return;
    }
    fetchFact();
  };

  const onSendClick = () => {
    fetchSendMessage();
  };

  const isSendEnabled =
    !isFetchingMessage && !isFetchingFact && phoneNumberIsValid && factIsValid;
  const isRefreshEnabled = !isFetchingMessage && !isFetchingFact;

  return (
    <StyledApp>
      <Reset />
      <StyledContent>
        <Fact>{fact}</Fact>
        <IconButton
          onClick={onRefreshClick}
          type={IconButtonType.Redo}
          enabled={isRefreshEnabled}
        />
        <Input
          label="Recipient"
          onChange={onPhoneNumberChange}
          value={phoneNumber}
          isValid={phoneNumberIsValid}
          icon={() => (
            <IconButton
              onClick={onSendClick}
              type={IconButtonType.PaperPlane}
              enabled={isSendEnabled}
            />
          )}
        />
      </StyledContent>
    </StyledApp>
  );
};
