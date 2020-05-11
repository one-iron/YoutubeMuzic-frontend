import React, { useState, useEffect } from "react";
import styled from "styled-components";

export let player;
const Player = () => {
  const [isPlaying, setPlaying] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [totalTime, setTotalTime] = useState("0:00");
  const [mouseDragX, setMouseDragX] = useState(false);
  const [activeButton, setactiveButton] = useState(false);
  let checkCurrentTime;

  const playerState = (e) => {
    console.log(e.data);
    if (e.data === 1) {
      setPlaying(true);
    } else if (e.data === 2) {
      setPlaying(false);
    }
  };

  const transTime = (seconds) => {
    if (!seconds) {
      console.log(seconds);
      return;
    }
    const hour = parseInt(seconds / 3600);
    const min = parseInt((seconds % 3600) / 60);
    const sec = seconds % 60;

    return `${hour > 0 ? String(hour) + ":" : ""} ${min}:${
      sec < 10 ? "0" + String(sec) : sec
    }`;
  };

  const setTime = () => {
    setCurrentTime(transTime(player.getCurrentTime().toFixed()));
  };

  const onReadyAPI = () => {
    setLoading(true);
    setPlaying(true);
    checkCurrentTime = setInterval(setTime, 1000);
    setTotalTime(() => transTime(player.getDuration()));
  };

  const dragHandler = (e) => {
    setMouseDragX(e.x);
    const nowFraction = e.x / window.innerWidth;
    player.seekTo(player.getDuration() * nowFraction, true);
  };

  const drag = () => {
    document.addEventListener("mousemove", dragHandler);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", dragHandler);
      setMouseDragX(false);
    });
  };

  useEffect(() => {
    if (window.YT) {
      console.log(window.YT);
      window.onYouTubeIframeAPIReady = () => {
        player = new window.YT.Player("player", {
          height: "320",
          width: "720",
          videoId: "om3n2ni8luE",
          playerVars: {
            autoplay: 1,
            controls: 0,
            fs: 0,
          },
          events: {
            onReady: onReadyAPI,
            onStateChange: playerState,
          },
        });
      };
    } else {
      console.log("can not load player");
    }
    return () => {
      clearInterval(checkCurrentTime);
    };
  }, []);

  if (isLoading) {
    if (isPlaying) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  }

  return (
    <>
      <PlayerWrap>
        <div id="player"></div>
      </PlayerWrap>
      <LoadBar
        style={
          isLoading
            ? {
                width: mouseDragX
                  ? mouseDragX
                  : String(
                      (player.getCurrentTime() / player.getDuration()) * 100
                    ) + "vw",

                border:
                  activeButton || mouseDragX
                    ? "2px solid #ff0000"
                    : "0px solid #ff0000",
              }
            : { width: "0vw" }
        }
        onMouseOver={() => setactiveButton(true)}
        onMouseOut={() => setactiveButton(false)}
      >
        <DragButton
          style={{ opacity: activeButton || mouseDragX ? "1" : "0" }}
          onMouseOver={() => setactiveButton(true)}
          onMouseOut={() => setactiveButton(false)}
          onMouseDown={drag}
        />
      </LoadBar>
      <ControlsWrap>
        <MoveButton
          onClick={() => player.seekTo(player.getCurrentTime() - 10, true)}
        >
          <i className="xi-step-backward" />
        </MoveButton>
        <Button
          onClick={() => {
            setPlaying(!isPlaying);
          }}
        >
          {isLoading ? (
            isPlaying ? (
              <i className="xi-pause" />
            ) : (
              <i className="xi-play" />
            )
          ) : (
            <i className="xi-spinner-3 xi-spin" />
          )}
        </Button>
        <MoveButton
          onClick={() => player.seekTo(player.getCurrentTime() + 10, true)}
        >
          <i className="xi-step-forward" />
        </MoveButton>
        {isLoading ? `${currentTime} / ${totalTime}` : ""}
      </ControlsWrap>
    </>
  );
};
export default Player;

const PlayerWrap = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 64px 48px 72px 48px;
  background-color: #000000;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  all: unset;
  padding: 0px 20px;
  font-size: 36px;
  color: #ffffff;
  cursor: pointer;
`;

const MoveButton = styled(Button)`
  font-size: 24px;
`;

const ControlsWrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 72px;
  left: 0px;
  bottom: 0px;
  background-color: #1d1d1d;
  display: flex;
  align-items: center;
  padding: 0px 50px;
  color: #909090;
  font-size: 12px;
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

const DragButton = styled.div`
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
