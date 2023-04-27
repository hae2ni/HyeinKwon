import React, { useState } from "react";
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

export default function EasyModeWrapper() {
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

  const RandomImgList = [...IMG_LIST].sort(() => Math.random() - 0.5);
  const randomImgs = RandomImgList.splice(0, 5);
  const RandomImgList2 = [...randomImgs].sort(() => Math.random() - 0.5);

  const RandomList = randomImgs.concat(RandomImgList2);

  return (
    <Container>
      {RandomList.map((image, index) => (
        <Card sommung={image} key={index} alt={`image${index}`} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
