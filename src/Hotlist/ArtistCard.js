import React, { Component } from "react";
import styled from "styled-components";
import Listbox from "./Listbox";

class ArtistCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jum_box: false,
    };
  }

  onClickJum = (e) => {
    e.stopPropagation();
    this.setState({
      jum_box: !this.state.jum_box,
    });
  };

  render() {
    return (
      <Box_hotlist>
        <HotListImg
          style={{ backgroundImage: 'url("' + this.props.thumb + '")' }}
        >
          <Jumjum onClick={this.onClickJum}>
            <i className="xi-ellipsis-v" />
          </Jumjum>
          <Jum_bx jumBox={this.state.jum_box}>
            <Listbox />
          </Jum_bx>
          <BButton />
        </HotListImg>

        <Nameandsinger>
          <div>
            <Song>
              {this.props.title.length > 30
                ? this.props.title.slice(0, 30) + "..."
                : this.props.title}
            </Song>
          </div>
          {this.props.artist}
          <span>•조회수</span>
          {this.props.views}
        </Nameandsinger>
      </Box_hotlist>
    );
  }
}

const Song = styled.div`
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 15px;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Nameandsinger = styled.div`
  position: absolute;
  font-weight: 350;
  margin-bottom: 20px;
  margin-left: 20px;
  top: 300px;
`;

const Box_hotlist = styled.div`
  position: relative;
  color: white;
  font-weight: 100;
  margin-right: 1px;
`;

const HotListImg = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 600px;
  height: 375px;
  border: 1px solid black;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 1px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    transition-duration: 0.2s, 0.5s;
  }

  cursor: pointer;
`;

// 이것은 버튼
const BButton = styled.div`
  position: relative;
  left: 50%;
  bottom: 50%;
  width: 34px;
  height: 34px;
  border-color: transparent transparent transparent white;
  border-style: solid solid solid solid;
  border-width: 23px 0 23px 44px;
  opacity: 0;
  cursor: pointer;
  ${HotListImg}:hover & {
    opacity: 1;
  }
`;

const Jumjum = styled.div`
  position: absolute;
  left: 570px;
  top: 5%;
  font-size: 25px;
  z-index: 500;
  opacity: 0;
  cursor: pointer;
  ${HotListImg}:hover & {
    opacity: 1;
    z-index: 1004;
  }
`;

const Jum_bx = styled.div`
  display: ${(props) => (props.jumBox ? "" : "none")};
  z-index: 3000 !important;
  position: absolute;
  left: 65%;
  bottom: -3%;
`;

export default ArtistCard;
