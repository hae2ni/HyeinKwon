import React, { useState } from "react";
import styled from "styled-components";

import Reset from "./Reset";
import ChooseLevel from "./ChooseLevel";

import Card from "./Cards";
import { EasyRandomList, NormalRandomList, HardRandomList } from "./ImgData";

export default function Main() {
  const [score, setScore] = useState(5);
  const [checkScore, setCheckScore] = useState(0);
  const [RandomList, setRandomList] = useState(EasyRandomList);

  const [isClickable, setIsClickable] = useState(true);

  const [selectCard, setSelectCard] = useState([]);
  const [showCard, setShowCard] = useState(true);

  const EasyMode = () => {
    setScore("5");
    setRandomList(EasyRandomList);
  };

  const NormalMode = () => {
    setScore("7");
    setRandomList(NormalRandomList);
  };

  const HardMode = () => {
    setScore("9");
    setRandomList(HardRandomList);
  };

  const handleCardClick = (image) => {
    //뒤집은 카드를 list에 저장
    setSelectCard([...selectCard, image]);

    //두개 일때
    if (selectCard.length === 1) {
      setIsClickable(false);
      if (selectCard[0] === image) {
        setCheckScore((checkScore) => checkScore + 1);

        setSelectCard([]);
        setTimeout(() => {
          setIsClickable(true);
        }, 2000);
      } else {
        setSelectCard([]);
        setIsClickable(true);
        setShowCard(false);
      }
    }
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
          {RandomList.map((image, index) => (
            <Card
              showCard={showCard}
              isClickable={isClickable}
              onCardClick={handleCardClick}
              sommung={image}
              key={index}
              alt={`image${index}`}
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
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 300px;
  margin: 20px;

  border: 5px solid ${({ theme }) => theme.colors.blue};
  border-radius: 3%;
  box-shadow: 3px 3px 2px ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.lightblue};
`;

const CardImg = styled.img`
  width: 150px;
  height: 200px;

  border-radius: 3%;
`;
