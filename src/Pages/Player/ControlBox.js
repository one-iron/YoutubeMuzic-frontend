import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  useCurrentTime,
  usePlayBtn,
  transTime,
  useSound,
  useDrag,
} from "../../CustomHooks";

const ControlBox = ({ audio, isLoading, setSrc, isPlay, metaData }) => {
  const play = usePlayBtn(true);
  const currentTime = useCurrentTime(audio);
  const sound = useSound(audio);
  const drag = useDrag(audio);

  isPlay = play.isPlay;

  const soundHandler = (e) => {
    const shiftX = e.movementX / 100;
    if (audio.volume + shiftX > 1) {
      audio.volume = 1;
      sound.setValue(1);
    } else if (audio.volume + shiftX < 0) {
      audio.volume = 0;
      sound.setValue(1);
    } else {
      audio.volume = audio.volume + shiftX;
      sound.setValue(audio.volume + shiftX);
      sound.setMouseOver(true);
    }
  };

  const changeSoundValue = () => {
    document.addEventListener("mousemove", soundHandler);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", soundHandler);
      sound.setMouseOver(false);
    });
  };

  const ended = () => {
    console.log("ended");
  };

  useEffect(() => {
    let intervalNum;

    if (isLoading) {
      intervalNum = setInterval(currentTime.getCurrentTime, 500);
      audio.addEventListener("ended", ended);
    }

    return () => {
      clearInterval(intervalNum);
      if (isLoading) {
        audio.removeEventListener("ended", ended);
      }
    };
  }, [isLoading]);

  if (isLoading) {
    isPlay ? audio.play() : audio.pause();
  }

  return (
    <ControlBoxWrap>
      <LoadBar
        style={{
          width: String((audio.currentTime / audio.duration) * 100) + "vw",
        }}
      >
        <LoadBarBtn {...drag} />
      </LoadBar>
      <ControlButtons>
        <MoveButton onClick={() => (audio.currentTime -= 10)}>
          <i className="xi-step-backward" />
        </MoveButton>
        <PlayButton {...play}>
          <i className={`xi-${isPlay ? "pause" : "play"}`} />
        </PlayButton>
        <MoveButton onClick={() => (audio.currentTime += 10)}>
          <i className="xi-step-forward" />
        </MoveButton>
        {audio && (
          <Time>
            {transTime(currentTime.currentTime)} /
            {transTime(audio.duration.toFixed())}
          </Time>
        )}
      </ControlButtons>
      <MetaBox>
        <Thumbnail thumbnail={metaData ? metaData.thumbnail : ""} />
        {metaData && (
          <Titles>
            <Title>{metaData.title}</Title>
            <SubTitle>
              {metaData.artist} • 조회수 {metaData.view}회 • 좋아요{" "}
              {metaData.like}개
            </SubTitle>
          </Titles>
        )}
        <MetaBoxBtn>
          <i className="far fa-thumbs-down" />
          <i className="far fa-thumbs-up" />
          <i className="xi-ellipsis-v" />
        </MetaBoxBtn>
      </MetaBox>
      <RightControl>
        <SoundBtn {...sound}>
          <SoundBar style={{ opacity: sound.mouseOver ? 1 : 0 }}>
            <SoundBarInner style={{ width: `${sound.value * 100}%` }}>
              <SoundBarButton onMouseDown={changeSoundValue} />
            </SoundBarInner>
          </SoundBar>
          <i
            className={`xi-volume-${audio.volume ? "up" : "off"}`}
            onClick={() => {
              audio.volume ? sound.setMute() : sound.setFull();
            }}
          />
        </SoundBtn>
        <i className="xi-repeat" />
        <i className="xi-shuffle" />
        <DownBtn>
          <i className="xi-caret-down-min" active="true" />
        </DownBtn>
      </RightControl>
    </ControlBoxWrap>
  );
};

export default ControlBox;

const ControlBoxWrap = styled.div`
  width: 100vw;
  height: 72px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  background-color: #1d1d1d;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ControlButtons = styled.div`
  width: 250px;
  height: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
`;

const PlayButton = styled.div`
  padding: 0px 16px;
  font-size: 40px;
  cursor: pointer;
`;

const MoveButton = styled.div`
  padding: 0px 16px;
  font-size: 21px;
  cursor: pointer;
`;

const LoadBar = styled.div`
  position: relative;
  z-index: 100;
  height: 2px;
  position: fixed;
  bottom: 72px;
  left: 0px;
  background-color: #ff0000;
`;

const LoadBarBtn = styled.div`
  position: absolute;
  transform: translate(50%, -50%);
  right: 0px;
  top: 0px;
  width: 13px;
  height: 13px;
  background-color: #ff0000;
  border-radius: 50%;
  transition: all 0.1s ease-in;
`;

const Time = styled.div`
  font-size: 12px;
  color: #aaaaaa;
`;

const MetaBox = styled.div`
  display: flex;
`;

const Thumbnail = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 2px;
  background-image: url(${(props) => props.thumbnail});
  background-position: center;
  background-size: cover;
`;

const Titles = styled.div`
  height: 40px;
  padding: 0px 16px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.div`
  color: #ffffff;
`;

const SubTitle = styled.div`
  color: #aaaaaa;
`;

const MetaBoxBtn = styled.div`
  display: flex;
  align-items: center;
  font-size: 21px;
  color: #aaaaaa;
  i {
    cursor: pointer;
    padding: 0px 16px;
  }
`;

const RightControl = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #aaaaaa;
  i {
    cursor: pointer;
    padding: 0px 16px;
  }
`;

const SoundBtn = styled.div`
  display: felx;
  align-items: center;
`;

const DownBtn = styled.div`
  color: #ffffff;
`;

const SoundBar = styled.div`
  width: 68px;
  height: 2px;
  background-color: #858585;
  border-radius: 1px;
  transition: opacity 0.2s ease-in-out;
`;

const SoundBarInner = styled.div`
  position: relative;
  height: 2px;
  left: 0px;
  background-color: #ffffff;
  border-radius: 1px;
`;

const SoundBarButton = styled.div`
  position: absolute;
  transform: translate(50%, -50%);
  right: 0px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ffffff;
  cursor: pointer;
`;