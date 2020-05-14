import React from "react";
import PlayBtn from "../Images/PlayBtn";
import styled from "styled-components";

const Play = (props) => {
  const PlayWrap = styled.div`
    display: ${props.isHover ? "" : "none"};
  `;
  return (
    <PlayWrap>
      <PlayBtnWrap>
        <PlayBtnBox>
          <PlayBtn />
        </PlayBtnBox>
      </PlayBtnWrap>
    </PlayWrap>
  );
};

export default Play;

const PlayBtnWrap = styled.div`
  padding: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const PlayBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
  opacity: 70%;
  transition: all linear 0.1s;
  &:hover {
    transform: scale(1.2);
    opacity: 100%;
    transition: all linear 0.1s;
  }
`;
