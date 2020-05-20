import React, { useState } from "react";
import styled from "styled-components";

const PlayListItem = ({ item, playerOn }) => {
  const [isHover, setHover] = useState(false);

  return (
    <PlayListItemWrap
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <LeftSide>
        <ImageWrap onClick={playerOn}>
          <ImageCover style={{ display: isHover ? "" : "none" }}>
            <i className="xi-play" />
          </ImageCover>
          <ItemImage imageUrl={item.item_thumb} />
        </ImageWrap>
        <InfoWrap>
          <p>
            {item.item_name.length > 29
              ? item.item_name.slice(0, 29) + "..."
              : item.item_name}
          </p>
          <span>
            {item.item_artist.length > 20
              ? item.item_artist.slice(0, 20) + "..."
              : item.item_artist}
          </span>
          <Album>
            {item.item_album.length > 25
              ? item.item_album.slice(0, 25) + "..."
              : item.item_album}
          </Album>
        </InfoWrap>
      </LeftSide>
      <RightSide>
        <Icon style={{ display: isHover ? "" : "none" }}>
          <i className="far fa-thumbs-down" />
          <i className="far fa-thumbs-up" />
          <i className="xi-ellipsis-v" />
        </Icon>
        <Duration>{item.item_length}</Duration>
      </RightSide>
    </PlayListItemWrap>
  );
};

export default PlayListItem;

const PlayListItemWrap = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
`;

const LeftSide = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  width: 100%;
`;

const RightSide = styled.div`
  width: 30%;
  display: felx;
  align-items: center;
  justify-content: end;
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
  width: 100%;
  font-size: 14px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  p {
    width: 40%;
    font-size: 15px;
    color: #ffffff;
    margin: 0px 12px 8px 0px;
  }
  span {
    width: 30%;
    color: #aaaaaa;
  }
`;

const Album = styled.div`
  width: 30%;
  color: #aaaaaa;
`;

const Icon = styled.div`
  font-size: 24px;
  padding: 0px 8px;
  i {
    margin-left: 24px;
  }
`;

const Duration = styled.div`
  font-size: 14px;
  padding-left: 36px;
`;
