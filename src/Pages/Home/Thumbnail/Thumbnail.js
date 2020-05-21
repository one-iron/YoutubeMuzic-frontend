import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Menu from "../Menu/Menu";
import Play from "../Play/Play";
import styled from "styled-components";

const Thumbnail = (props) => {
  const [Hover, SetHover] = useState(false);
  const [MenuClick, setMenuClick] = useState(false);

  const goToAlbum = (id) => {
    props.history.push(`/playlist/${id}`);
  };
  return (
    <ThumbnailWrap
      onMouseEnter={() => SetHover(true)}
      onMouseLeave={() => SetHover(false)}
      onClick={() => goToAlbum(props.id)}
      thumbnail={props.thumbnail}
    >
      <Menu isHover={Hover} MenuClick={MenuClick} setMenuClick={setMenuClick}>
        <MenuModal MenuClick={MenuClick}></MenuModal>
      </Menu>
      <Play isHover={Hover} id={props.id} />
    </ThumbnailWrap>
  );
};
export default withRouter(Thumbnail);

const ThumbnailWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url(${(props) => props.thumbnail});
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
      url(${(props) => props.thumbnail});
    width: 220px;
    height: 220px;
    border-radius: 5px;
    background-size: cover;
    transition-timing-function: linear;
    cursor: pointer;
  }
`;

const MenuModal = styled.div`
  display: ${(props) => (props.MenuClick ? "" : "none")};
  position: absolute;
  width: 300px;
  height: 300px;
  top: 50px;
  left: 170px;
  background-color: #2e2e2e;
  border: 1px solid gray;
  border-radius: 3px;
  z-index: 1;
`;
