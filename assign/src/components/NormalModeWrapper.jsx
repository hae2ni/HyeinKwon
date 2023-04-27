import React from "react";
import styled from "styled-components";
import Card from "./Cards";
import imageA from "../assets/image1.gif";
import imageB from "../assets/image2.gif";
import imageC from "../assets/image3.gif";
import imageD from "../assets/image4.gif";
import imageE from "../assets/image5.gif";
import imageF from "../assets/image6.gif";
import imageG from "../assets/image7.gif";
import imageH from "../assets/image8.gif";
import imageI from "../assets/image9.gif";

export default function NormalModeWrapper() {
  const IMG_LIST = [
    imageA,
    imageB,
    imageC,
    imageD,
    imageE,
    imageF,
    imageG,
    imageH,
    imageI,
  ];

  return (
    <Container>
      {IMG_LIST.map((image, index) => (
        <Card sommung={image} key={index} alt={`image${index}`} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 600px;

  background-color: ${({ theme }) => theme.colors.pink};
`;
