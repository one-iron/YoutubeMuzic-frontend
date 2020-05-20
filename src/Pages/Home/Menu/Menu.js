import React from "react";
import ThreeDots from "../Images/ThreeDots";
import styled from "styled-components";

const Menu = (props) => {
  return (
    <MenuWrap
      onClick={() => {
        props.setMenuClick(!props.MenuCLick);
      }}
      isHover={props.isHover}
    >
      <ThreeDotsWrap>
        <ThreeDots />
      </ThreeDotsWrap>
    </MenuWrap>
  );
};

export default Menu;

const MenuWrap = styled.div`
  display: ${(props) => (props.isHover ? "" : "none")};
`;

const ThreeDotsWrap = styled.div`
  padding: 15px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;
