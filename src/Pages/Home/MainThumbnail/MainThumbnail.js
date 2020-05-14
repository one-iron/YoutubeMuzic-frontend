import React from "react";
import styled from "styled-components";

const MainThumbnail = (props) => {
  const MainThumbnailWrap = styled.div`
    width: 100%;
    height: 610.28px;
    position: relative;
    opacity: 60%;
    background: linear-gradient(
        to bottom,
        rgba(20, 20, 20, 0) 10%,
        rgba(20, 20, 20, 0) 25%,
        rgba(20, 20, 20, 0.75) 50%,
        rgba(20, 20, 20, 1) 80%,
        rgba(00, 000, 000, 1) 100%
      ),
      url(${props.imgData});
    background-size: cover;
  `;
  return <MainThumbnailWrap></MainThumbnailWrap>;
};

export default MainThumbnail;
