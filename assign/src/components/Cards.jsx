import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import preview from "../assets/preview.gif";
import "./Cards.css";

export default function Card({ image, handleChoice, flipped, isClicked }) {
  const handleClick = () => {
    if (!isClicked) {
      handleChoice(image);
    }
  };
  return (
    <CardContainer>
      <div className={flipped ? "flipped" : ""}>
        <CardImg className="front" src={image.card} />
        <CardImg
          onClick={handleClick}
          className="back"
          src={preview}
          alt="카드 커버"
        />
      </div>
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
