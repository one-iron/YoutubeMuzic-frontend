import React, { useState, useEffect } from "react";
import axios from "axios";
import { getLike, pushLike } from "../../Config";
import styled from "styled-components";

const PlayListItem = ({ item, playerOn }) => {
  const [isHover, setHover] = useState(false);
  const [따봉, set따봉] = useState(null);

  const get따봉 = async () => {
    const 따봉a = await axios.get(`${getLike}${item.item_id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    set따봉(따봉a.data.like);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      get따봉();
    }
  }, []);

  const 따봉누르기 = async (bol) => {
    const token = localStorage.getItem("token");
    if (token) {
      const res = await axios.post(
        pushLike,
        {
          media_id: item.item_id,
          like: bol,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      set따봉(res.data.like);
    }
  };

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
        {따봉 === null ? (
          <Icon style={{ opacity: isHover ? 1 : 0 }}>
            <i
              className="far fa-thumbs-down"
              onClick={() => 따봉누르기(false)}
            />
            <i className="far fa-thumbs-up" onClick={() => 따봉누르기(true)} />
            <i className="xi-ellipsis-v" style={{ opacity: isHover ? 1 : 0 }} />
          </Icon>
        ) : 따봉 ? (
          <Icon>
            <i
              className="far fa-thumbs-down"
              style={{ opacity: isHover ? 1 : 0 }}
              onClick={() => 따봉누르기(false)}
            />
            <i className="fas fa-thumbs-up" onClick={() => 따봉누르기(true)} />
            <i className="xi-ellipsis-v" style={{ opacity: isHover ? 1 : 0 }} />
          </Icon>
        ) : (
          <Icon>
            <i
              className="fas fa-thumbs-down"
              onClick={() => 따봉누르기(false)}
            />
            <i
              className="far fa-thumbs-up"
              style={{ opacity: isHover ? 1 : 0 }}
              onClick={() => 따봉누르기(true)}
            />
            <i className="xi-ellipsis-v" style={{ opacity: isHover ? 1 : 0 }} />
          </Icon>
        )}
        <Duration>{item.item_length}</Duration>
      </RightSide>
    </PlayListItemWrap>
  );
};

export default PlayListItem;

const PlayListItemWrap = styled.div`
  height: 60px;
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
    cursor: pointer;
  }
`;

const Duration = styled.div`
  font-size: 14px;
  padding-left: 36px;
`;
