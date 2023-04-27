import React, { useState, useEffect } from "react";
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

export default function HardModeWrapper() {
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

  const [randomImgList, setRandomImgList] = useState([]);

  //컴포넌트 렌더링될 때마다 랜덤하게 섞은 이미지 리스트 생성하기
  useEffect(() => {
    const shuffledImgList = [...IMG_LIST].sort(() => Math.random() - 0.5);
    const shuffledImgList2 = [...IMG_LIST].sort(() => Math.random() - 0.5);
    const shuffledList = shuffledImgList.concat(shuffledImgList2);
    setRandomImgList(shuffledList);
  }, []);

  return (
    <Container>
      {randomImgList.map((image, index) => {
        return <Card sommung={image} key={index} alt={`image${index}`} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;
