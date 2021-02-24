import React from "react";
import styled from "styled-components";

const Page = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Container = styled.div`
  display: flex;
  cursor: pointer;
`;

const Info = styled.p`
  color: #666;
  margin-top: 5px;
`;

const Perspective = styled.div`
  perspective: 1000px;
`;

const Cube = styled.div`
  width: 50px;
  height: 50px;
  transform-style: preserve-3d;
  transition: transform 1s ease;
  &:hover {
    transform: rotateY(-270deg);
  }
`;

const Front = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  transform: translate3d(0, 0, 25px);
`;

const Right = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  transform-origin: top right;
  transform: rotateY(-270deg) translate3d(25px, 0, 0);
`;

const Back = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  transform: translateZ(-25px) rotateY(180deg);
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  transform-origin: center left;
  transform: translateZ(-25px) rotateY(270deg);
`;

const Letter = styled.text`
  font-size: 36px;
  font-weight: 700;
  font-family: Georgia-Bold, Georgia;
`;

export default function App() {
  return (
    <Page>
      <Container>
        <Perspective>
          <Cube>
            <Front>
              <Block letter={"C"} fill={"red"} />
            </Front>
            <Right className="right">
              <Block letter={"U"} fill={"green"} />
            </Right>
            <Back className="back">
              <Block letter={"B"} fill={"blue"} />
            </Back>
            <Left className="left">
              <Block letter={"E"} fill={"purple"} />
            </Left>
          </Cube>
        </Perspective>
      </Container>
    </Page>
  );
}

const Block = ({ letter, fill }) => {
  return (
    <svg width="51" height="51" viewBox="0 0 50 50">
      <g id="outerSquare">
        <rect fill={fill} width="50" height="50" />
      </g>
      <g id="innerSquare">
        <rect fill={"#FFF"} x="5" y="5" width="40" height="40" />
      </g>
      <g id="innerCharacter">
        <Letter fill={fill} transform="translate(11 38)">
          {letter}
        </Letter>
      </g>
    </svg>
  );
};
