import React, { useState } from "react";
import styled from "styled-components";

const EachItem = ({ item }) => {
  const [isHover, setHover] = useState(false);

  return (
    <EachItemWrap
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={{ cursor: "move" }}
    >
      <LeftSide>
        <ImageWrap>
          <ImageCover style={{ display: isHover ? "" : "none" }}>
            <i className="xi-play" />
          </ImageCover>
          <ItemImage imageUrl={item.thumbnail} />
        </ImageWrap>
        <InfoWrap>
          <p>
            {item.title.length > 29
              ? item.title.slice(0, 29) + "..."
              : item.title}
          </p>
          <span>{item.artist}</span>
        </InfoWrap>
      </LeftSide>
      <RightSide>
        <Icon style={{ display: isHover ? "" : "none" }}>
          <i className="xi-ellipsis-v" />
        </Icon>
        <Duration>{item.duration}</Duration>
      </RightSide>
    </EachItemWrap>
  );
};

const EachItemWrap = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  cursor: move;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const RightSide = styled.div`
  display: felx;
  align-items: center;
  color: #aaaaaa;
`;

const ImageWrap = styled.div`
  position: relative;
`;

const ImageCover = styled.div`
  z-index: 100;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  font-size: 32px;
  cursor: pointer;
`;

const ItemImage = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  margin-right: 16px;
`;

const InfoWrap = styled.div`
  font-size: 14px;
  padding-right: 10px;
  p {
    font-size: 15px;
    color: #ffffff;
    margin-bottom: 8px;
  }
  span {
    color: #aaaaaa;
  }
`;

const Icon = styled.div`
  font-size: 24px;
  padding: 0px 8px;
`;

const Duration = styled.div`
  font-size: 14px;
  padding-left: 8px;
`;

export default EachItem;
