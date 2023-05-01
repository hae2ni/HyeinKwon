import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Reset from "./Reset";
import ChooseLevel from "./ChooseLevel";

import Card from "./Cards";
import { EasyRandomList, NormalRandomList, HardRandomList } from "./ImgData";

export default function Main() {
  const [score, setScore] = useState(5);
  const [checkScore, setCheckScore] = useState(0);
  const [randomList, setRandomList] = useState(EasyRandomList);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choicetwo, setChoiceTwo] = useState(null);

  //각 모드 선택 시, 카드 정렬(개수에 맞게) + 난이도 설정
  const EasyMode = () => {
    setScore("5");
    setCheckScore(0);
    setRandomList(EasyRandomList);
  };

  const NormalMode = () => {
    setScore("7");
    setCheckScore(0);
    setRandomList(NormalRandomList);
  };

  const HardMode = () => {
    setScore("9");
    setCheckScore(0);
    setRandomList(HardRandomList);
  };

  const handleChoice = (image) => {
    choiceOne ? setChoiceTwo(image) : setChoiceOne(image);
    console.log(image);
  };

  //두개 카드 비교하기
  useEffect(() => {
    if (choiceOne && choicetwo) {
      if (choiceOne.card === choicetwo.card) {
        console.log("맞다");
        setCheckScore((checkScore) => checkScore + 1);
        setRandomList((prevRandomList) => {
          return prevRandomList.map((image) => {
            if (image.card == choiceOne.card) {
              return { ...image, matched: true };
            } else {
              return image;
            }
          });
        });
        resetTurn();
      } else {
        console.log("틀림");
        setTimeout(() => resetTurn(), 2000);
      }
    }
  }, [choiceOne, choicetwo]);

  console.log(randomList);

  //고른 카드 reset하기
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((turns) => turns + 1);
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
        <CardWrapper>
          {randomList.map((image) => (
            <Card
              key={image.id}
              image={image}
              handleChoice={handleChoice}
              flipped={
                image === choiceOne || image === choicetwo || image.matched
              }
            />
          ))}
        </CardWrapper>
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

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;
