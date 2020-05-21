import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PlayBtn from "../Images/PlayBtn";
import * as actions from "../../../action";
import styled from "styled-components";

const Play = ({
  isHover,
  id,
  playerOn,
  playerOff,
  setPlayerSongList,
  setAudioSrc,
}) => {
  const [list, setList] = useState();
  const [meta, setMeta] = useState({});

  const playMusic = (e, id) => {
    e.stopPropagation();

    fetch(`http://10.58.3.243:8000/music/list/${id}`)
      .then((data) => data.json())
      .then((data) => setList(data.elements));

    fetch("http://10.58.0.33:8000/user/recent/playlist", {
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
        list[0].item_src,
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
    playerOff: () => {
      dispatch(actions.playerOff());
    },
    setPlayerSongList: (list) => {
      dispatch(actions.getSongList(list));
    },
    setAudioSrc: (src, thumb, name, artist, view, like) => {
      dispatch(actions.setPlayerSrc(src, thumb, name, artist, view, like));
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
  border: 1px solid red;
`;
