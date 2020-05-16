import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import styled from "styled-components";
import ControlBox from "./ControlBox";
import EachItem from "./EachItem";
import * as actions from "../../action";

const ListItem = SortableElement(({ item }) => <EachItem item={item} />);

const ListItemHOC = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={`ListItem-${index}`} index={index} item={item} />
      ))}
    </ul>
  );
});

const audio = new Audio("http://localhost:3000/Data/sampleAudio.mp3");

const Player = ({ songList, updateSongList, isModalOn, setModalOn }) => {
  const [items, setItems] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [metaData, setMetaData] = useState();
  const [src, setSrc] = useState(""); //http://10.58.0.33:8000, http://localhost:3000/Data/sampleAudio.mp3

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  useEffect(() => {
    const getData = async () => {
      const data = await axios("http://localhost:3000/Data/PlayerMock.json");
      const songListData = await axios(
        "http://localhost:3000/Data/SongList.json"
      );
      updateSongList(songListData.data.list);
      setItems(songListData.data.list);
      setMetaData(data.data);
      setSrc(data.data.audio_file);
    };
    getData();

    audio.addEventListener("loadeddata", () => {
      setLoading(true);
    });
    return () => {
      audio.removeEventListener("loadeddata", () => setLoading(true));
    };
  }, []);

  // audio.src = src;
  return (
    <>
      <PlayerWrap isModalOn={isModalOn}>
        <VideoSide isModalOn={isModalOn}>
          {metaData && (
            <ImageWrap>
              <ImageHover>
                <HoverIcons>
                  <i
                    className={
                      isModalOn ? "xi-focus-frame" : "xi-compress-square"
                    }
                    onClick={setModalOn}
                  />
                </HoverIcons>
              </ImageHover>
              <img src={metaData.thumbnail} alt="thumbnail" />
            </ImageWrap>
          )}
        </VideoSide>
        <RightSide isModalOn={isModalOn}>
          <ListTop>목록</ListTop>
          {items && <ListItemHOC items={items} onSortEnd={onSortEnd} />}
        </RightSide>
      </PlayerWrap>
      <ControlBox
        audio={isLoading ? audio : false}
        isLoading={isLoading}
        setSrc={setSrc}
        isPlay={true}
        metaData={metaData}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    songList: state.songList.list,
    isModalOn: state.isModalOn.isModalOn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSongList: (songList) => {
      dispatch(actions.getSongList(songList));
    },
    setModalOn: () => {
      dispatch(actions.modalOn());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);

const PlayerWrap = styled.div`
  position: fixed;
  top: ${({ isModalOn }) => (isModalOn ? "" : "0px")};
  left: ${({ isModalOn }) => (isModalOn ? "" : "0px")};
  bottom: ${({ isModalOn }) => (isModalOn ? "90px" : "")};
  right: ${({ isModalOn }) => (isModalOn ? "50px" : "")};
  width: ${({ isModalOn }) => (isModalOn ? "180px" : "100vw")};
  height: ${({ isModalOn }) => (isModalOn ? "180px" : "100vh")};
  padding: ${({ isModalOn }) => (isModalOn ? "0px" : "88px 48px 72px")};
  display: flex;
  min-width: ${({ isModalOn }) => (isModalOn ? "180px" : "1000px")};
  background-color: #000000;
  transition: all 0.2s ease-in-out;
`;

const VideoSide = styled.div`
  width: ${({ isModalOn }) => (isModalOn ? "100%" : "64%")};
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 100%;
  }
`;

const ImageHover = styled.div`
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  cursor: pointer;
  background: linear-gradient(
    to bottom,
    rgba(20, 20, 20, 0.6) 10%,
    rgba(20, 20, 20, 0.3) 25%,
    rgba(20, 20, 20, 0.1) 50%,
    rgba(20, 20, 20, 0) 80%,
    rgba(20, 20, 20, 0) 100%
  );
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

const HoverIcons = styled.div`
  text-align: right;
  color: #ffffff;
  font-size: 24px;
  i {
    padding: 12px;
  }
`;

const RightSide = styled.div`
  padding: 30px 0px 0px 56px;
  width: 36%;
  height: 100%;
  max-width: 800px;
  display: ${({ isModalOn }) => (isModalOn ? "none" : "")};
`;

const ListTop = styled.div`
  padding: 8px;
  font-size: 14px;
  color: #aaaaaa;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;
