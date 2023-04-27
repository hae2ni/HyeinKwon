import React, { useState } from "react";
import styled from "styled-components";
import ChooseLevel from "./ChooseLevel";

import Card from "./Cards";
import EasyModeWrapper from "./EasyModeWrapper";
import NormalModeWrapper from "./NormalModeWrapper";
import HardModeWrapper from "./HardModeWrapper";

export default function Main() {
  const [score, setScore] = useState("5");
  const [checkScore, setCheckScore] = useState("0");
  const [showCard, setShowCard] = useState(0);

  const EasyMode = () => {
    setScore("5");
    setShowCard(0);
  };

  const NormalMode = () => {
    setScore("7");
    setShowCard(1);
  };

  const HardMode = () => {
    setScore("9");
    setShowCard(2);
  };
  return (
    <>
      <Header>
        💖작고 소즁한 솜뭉찍을 찾아라!💖
        <Score>
          {checkScore} : {score}
        </Score>
      </Header>
      <Container>
        <ChooseLevel onClickBtn={EasyMode} level={"Easy"}></ChooseLevel>
        <ChooseLevel onClickBtn={NormalMode} level={"Normal"}></ChooseLevel>
        <ChooseLevel onClickBtn={HardMode} level={"Hard"}></ChooseLevel>
      </Container>
      {showCard === 0 && <EasyModeWrapper />}
      {showCard === 1 && <NormalModeWrapper />}
      {showCard === 2 && <HardModeWrapper />}
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: auto;
  border-radius: 3%;

  background-color: ${({ theme }) => theme.colors.yellow};
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 150px;
  padding: 20px;

  border-top-left-radius: 3%;
  border-top-right-radius: 3%;

  background-color: ${({ theme }) => theme.colors.pink};

  font-size: 40px;
`;

const Score = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 15px;

  font-size: 35px;
  text-shadow: 2px 2px 2px ${({ theme }) => theme.colors.lightpink};
`;
