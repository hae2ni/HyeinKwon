import imageA from "../assets/image1.gif";
import imageB from "../assets/image2.gif";
import imageC from "../assets/image3.gif";
import imageD from "../assets/image4.gif";
import imageE from "../assets/image5.gif";
import imageF from "../assets/image6.gif";
import imageG from "../assets/image7.gif";
import imageH from "../assets/image8.gif";
import imageI from "../assets/image9.gif";

const IMGLIST = [
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

//이미지 리스트 섞기
const RandomImgList = [...IMGLIST].sort(() => Math.random() - 0.5);

// Easy모드 랜덤으로 섞인 리스트에서 5개씩 자르고, 또 랜덤으로 섞어서 붙인 리스트
const EasyImgList = RandomImgList.slice(0, 5);
const EasyImgList2 = EasyImgList.sort(() => Math.random() - 0.5);

export const EasyRandomList = EasyImgList.concat(EasyImgList2);

//Normal모드
const NormalImgList = RandomImgList.slice(0, 7);
const NormalImgList2 = NormalImgList.sort(() => Math.random() - 0.5);

export const NormalRandomList = NormalImgList.concat(NormalImgList2);

//Hard 모드 (자르는 것 없음), 똑같이 랜덤으로 돌려서 concat으로 붙이기
const HardImgList = [...IMGLIST].sort(() => Math.random() - 0.5);
export const HardRandomList = RandomImgList.concat(HardImgList);
