import React, { useState } from "react";
import styled from "styled-components";

import Reset from "./Reset";
import ChooseLevel from "./ChooseLevel";

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
          <Reset />
        </Score>
      </Header>
      <Container>
        <LevelContainer>
          <ChooseLevel onClickBtn={EasyMode} level={"Easy"}></ChooseLevel>
          <ChooseLevel onClickBtn={NormalMode} level={"Normal"}></ChooseLevel>
          <ChooseLevel onClickBtn={HardMode} level={"Hard"}></ChooseLevel>
        </LevelContainer>
        {showCard === 0 && <EasyModeWrapper />}
        {showCard === 1 && <NormalModeWrapper />}
        {showCard === 2 && <HardModeWrapper />}
      </Container>
    </>
  );
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 45px 50px;

  border-top-left-radius: 3%;
  border-top-right-radius: 3%;

  background-color: ${({ theme }) => theme.colors.pink};

  font-size: 40px;
`;

const Score = styled.div`
  display: flex;
  justify-content: space-around;

  width: 50%;
  margin-top: 30px;

  text-shadow: 2px 2px 2px ${({ theme }) => theme.colors.lightpink};
  font-size: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;

  background-color: ${({ theme }) => theme.colors.yellow};
`;

const LevelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
