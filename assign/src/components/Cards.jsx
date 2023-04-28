import React, { useEffect, useState } from "react";
import styled from "styled-components";
import preview from "../assets/preview.gif";

export default function Card({ sommung, onCardClick, isClickable, showCard }) {
  const [showImage, setShowImage] = useState(false);

  const handleClick = (e) => {
    if (isClickable) {
      onCardClick(sommung);
      setShowImage(true);
    }
  };

  return (
    <CardContainer onClick={handleClick}>
      {showCard !== showImage ? (
        <CardImg src={sommung} />
      ) : (
        <CardImg src={preview} />
      )}
    </CardContainer>
  );
}

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
