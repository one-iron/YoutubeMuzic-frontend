import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
// import { usePlayBtn } from "../../CustomHooks";
import styled from "styled-components";
import ControlBox from "./ControlBox";

const audio = new Audio();
const Player = () => {
  const [isLoading, setLoading] = useState(false);
  const [metaData, setMetaData] = useState();
  const [src, setSrc] = useState(""); //http://10.58.0.33:8000, http://localhost:3000/Data/sampleAudio.mp3

  useEffect(() => {
    const getData = async () => {
      const data = await axios("http://localhost:3000/Data/PlayerMock.json");
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

  audio.src = src;
  return (
    <>
      <PlayerWrap>
        <VideoSide>
          {metaData && <img src={metaData.thumbnail} alt="thumbnail" />}
        </VideoSide>
        <RightSide></RightSide>
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

export default Player;

const PlayerWrap = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 88px 48px 72px;
  display: flex;
  min-width: 1000px;
`;

const VideoSide = styled.div`
  width: 64%;
  height: 100%;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    cursor: pointer;
  }
`;

const RightSide = styled.div`
  width: 36%;
  height: 100%;
  max-width: 800px;
`;
