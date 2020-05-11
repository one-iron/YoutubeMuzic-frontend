import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [searchOn, setSearchOn] = useState(false);

  const onBlur = () => {
    setSearchOn(false);
    setValue("");
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { onBlur, onChange, value, searchOn, setSearchOn, setValue };
};

export const useCurrentTime = (audio) => {
  const [currentTime, setCurrentTime] = useState(0);

  const getCurrentTime = () => {
    setCurrentTime(audio.currentTime.toFixed());
  };

  return { currentTime, getCurrentTime };
};

export const usePlayBtn = (initValue) => {
  const [isPlay, setPlay] = useState(initValue);

  const onClick = () => {
    if (isPlay) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  };

  return { isPlay, onClick };
};

export const transTime = (seconds) => {
  if (!seconds) {
    return;
  }
  const hour = parseInt(seconds / 3600);
  const min = parseInt((seconds % 3600) / 60);
  const sec = seconds % 60;

  return `${hour > 0 ? String(hour) + ":" : ""} ${min}:${
    sec < 10 ? "0" + String(sec) : sec
  }`;
};

export const useSound = (audio) => {
  const [mouseOver, setMouseOver] = useState(false);
  const [value, setValue] = useState(audio.volume);

  const onMouseOver = () => {
    setMouseOver(true);
  };

  const onMouseLeave = () => {
    setMouseOver(false);
  };

  const setMute = () => {
    audio.volume = 0;
    setValue(0);
    setMouseOver(true);
  };

  const setFull = () => {
    audio.volume = 1;
    setValue(1);
    setMouseOver(true);
  };

  return {
    mouseOver,
    setMouseOver,
    onMouseOver,
    onMouseLeave,
    value,
    setValue,
    setMute,
    setFull,
  };
};

export const useDrag = (audio) => {
  const [value, setValue] = useState();

  const drag = (e) => {
    setValue(e.x / window.innerWidth);
    console.log(value);
  };

  const onMouseDown = () => {
    document.addEventListener("mousemove", drag);
    console.log(11);
  };

  const onMouseUp = () => {
    document.removeEventListener("mousemove", drag);
  };

  return { value, onMouseDown, onMouseUp };
};
