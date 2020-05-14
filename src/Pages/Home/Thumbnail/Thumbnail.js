import React, { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import Play from "../Play/Play";
import styled from "styled-components";

const Thumbnail = (props) => {
  const ThumbnailWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: url(${props.thumbnail});
    width: 220px;
    height: 220px;
    border-radius: 5px;
    background-size: cover;
    transition-timing-function: linear;
    &:hover {
      background: linear-gradient(
          to bottom,
          rgba(20, 20, 20, 0.4) 10%,
          rgba(20, 20, 20, 0.3) 25%,
          rgba(20, 20, 20, 0.1) 50%,
          rgba(20, 20, 20, 0) 80%,
          rgba(20, 20, 20, 0) 100%
        ),
        url(${props.thumbnail});
      width: 220px;
      height: 220px;
      border-radius: 5px;
      background-size: cover;
      transition-timing-function: linear;
    }
  `;

  const [Hover, SetHover] = useState(false);

  let hoverEnterHandle = () => {
    SetHover(true);
  };
  let hoverLeaveHandle = () => {
    SetHover(false);
  };

  return (
    <ThumbnailWrap
      onMouseEnter={hoverEnterHandle}
      onMouseLeave={hoverLeaveHandle}
    >
      <Menu isHover={Hover} />
      <Play isHover={Hover} />
    </ThumbnailWrap>
  );
};
export default Thumbnail;
