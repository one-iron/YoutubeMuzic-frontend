import React from "react";
import ThreeDots from "../Images/ThreeDots";
import styled from "styled-components";

const Menu = (props) => {
  const MenuWrap = styled.div`
    display: ${props.isHover ? "" : "none"};
  `;
  return (
    <MenuWrap>
      <ThreeDotsWrap>
        <ThreeDots />
      </ThreeDotsWrap>
    </MenuWrap>
  );
};

export default Menu;

const ThreeDotsWrap = styled.div`
  padding: 15px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;
