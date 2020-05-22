import React, { Component } from "react";
import styled from "styled-components";

class Listbox extends Component {
  render() {
    return (
      <Mingook>
        <MingookOne>
          <Icon>
            <i className="xi-equalizer-thin" />
          </Icon>
          뮤직스테이션 시작
        </MingookOne>
        <MingookOne>
          <Icon>
            <i className="xi-library-video" />
          </Icon>
          다음 동영상으로 재생
        </MingookOne>
        <MingookOne>
          <Icon>
            <i className="xi-paper" />
          </Icon>
          목록에 추가
        </MingookOne>
        <MingookOne>
          <Icon>
            <i className="fas fa-thumbs-up" />
          </Icon>
          좋아요 표시한 노래에 추가
        </MingookOne>
        <MingookOne>
          <Icon>
            <i className="fas fa-plus-square" />
          </Icon>
          재생목록에 추가
        </MingookOne>
        <MingookOne>
          <Icon>
            <i className="xi-share" />
          </Icon>
          공유
        </MingookOne>
      </Mingook>
    );
  }
}

const Mingook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #232323;
  width: 242px;
  height: 322px;
`;

const MingookOne = styled.div`
  background-color: #232323;
  width: 240px;
  height: 48px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  line-height: 35px;
  font-size: 14px;
  color: white;
  &:hover {
    background-color: gray;
  }
  cursor: pointer;
`;

const Icon = styled.div`
  font-size: 20px;
  margin: 0 8px;
`;

export default Listbox;
