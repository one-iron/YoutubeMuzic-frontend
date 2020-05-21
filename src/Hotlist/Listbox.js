import React, { Component } from "react";
import styled from "styled-components";

class Listbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Mingook>
        <Mingook_1>
          <Icon>
            <i className="xi-equalizer-thin" />
          </Icon>
          뮤직스테이션 시작
        </Mingook_1>
        <Mingook_1>
          <Icon>
            <i className="xi-equalizer-thin" />
          </Icon>
          다음 동영상으로 재생
        </Mingook_1>
        <Mingook_1>
          <Icon>
            <i className="xi-equalizer-thin" />
          </Icon>
          목록에 추가
        </Mingook_1>
        <Mingook_1>
          <Icon>
            <i className="xi-equalizer-thin" />
          </Icon>
          좋아요 표시한 노래에 추가
        </Mingook_1>
        <Mingook_1>
          <Icon>
            <i className="xi-equalizer-thin" />
          </Icon>
          재생목록에 추가
        </Mingook_1>
        <Mingook_1>
          <Icon>
            <i className="xi-equalizer-thin" />
          </Icon>
          공유
        </Mingook_1>
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

const Mingook_1 = styled.div`
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
