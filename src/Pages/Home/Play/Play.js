import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { playListPageData, postRecentPlayList } from "../../../Config";
import PlayBtn from "../Images/PlayBtn";
import * as actions from "../../../action";
import styled from "styled-components";

const Play = ({ isHover, id, playerOn, setPlayerSongList, setAudioSrc }) => {
  const [list, setList] = useState();

  const playMusic = (e, id) => {
    e.stopPropagation();
    fetch(`${playListPageData}${id}`)
      .then((data) => data.json())
      .then((data) => setList(data.elements));

    fetch(postRecentPlayList, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        playlist_id: id,
      }),
    });
  };

  useEffect(() => {
    list && playerOn();
    list && setPlayerSongList(list);
    list &&
      setAudioSrc(
        list[0].item_id,
        "http://localhost:3000/Data/sampleAudio.mp3",
        list[0].item_thumb,
        list[0].item_name,
        list[0].item_artist,
        list[0].view,
        list[0].like
      );
  }, [list]);

  return (
    <PlayWrap isHover={isHover}>
      <PlayBtnWrap>
        <PlayBtnBox onClick={(e) => playMusic(e, id)}>
          <PlayBtn />
        </PlayBtnBox>
      </PlayBtnWrap>
    </PlayWrap>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    playerOn: () => {
      dispatch(actions.playerOn());
    },
    setPlayerSongList: (list) => {
      dispatch(actions.getSongList(list));
    },
    setAudioSrc: (id, src, thumb, name, artist, view, like) => {
      dispatch(actions.setPlayerSrc(id, src, thumb, name, artist, view, like));
    },
  };
};

export default connect("", mapDispatchToProps)(Play);

const PlayWrap = styled.div`
  display: ${({ isHover }) => (isHover ? "" : "none")};
`;

const PlayBtnWrap = styled.div`
  padding: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const PlayBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
  opacity: 70%;
  transition: all linear 0.1s;
  &:hover {
    transform: scale(1.2);
    opacity: 100%;
    transition: all linear 0.1s;
  }
`;
