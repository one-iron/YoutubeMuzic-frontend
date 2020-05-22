import React, { Component } from "react";
import { connect } from "react-redux";
import { playListPageData } from "../Config";
import axios from "axios";
import styled from "styled-components";
import Listbox from "./Listbox";
import * as actions from "../action";

class ArtistCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jum_box: false,
    };
  }

  playAudio = async () => {
    const id = Math.floor(Math.random() * (144 + 1 + 1) + 1);
    const { playerOn, setPlayerSongList, setAudioSrc } = this.props;
    const res = await axios(`${playListPageData}${id}`);
    const list = res.data.elements;
    playerOn();
    setPlayerSongList(list);
    setAudioSrc(
      id,
      "/data/sampleAudio.mp3",
      this.props.thumb,
      this.props.title,
      this.props.artist,
      "",
      ""
    );
  };

  onClickJum = (e) => {
    e.stopPropagation();
    this.setState({
      jum_box: !this.state.jum_box,
    });
  };

  render() {
    return (
      <BoxHotList>
        <HotListImg
          onClick={this.playAudio}
          style={{ backgroundImage: 'url("' + this.props.thumb + '")' }}
        >
          <Jumjum onClick={this.onClickJum}>
            <i className="xi-ellipsis-v" />
          </Jumjum>
          <JumBox jumBox={this.state.jum_box}>
            <Listbox />
          </JumBox>
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
      </BoxHotList>
    );
  }
}

const Song = styled.div`
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 15px;
`;

const Nameandsinger = styled.div`
  font-size: 28px;
  position: absolute;
  font-weight: 350;
  margin-bottom: 20px;
  margin-left: 20px;
  top: 300px;
`;

const BoxHotList = styled.div`
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

const JumBox = styled.div`
  display: ${(props) => (props.jumBox ? "" : "none")};
  z-index: 3000 !important;
  position: absolute;
  left: 65%;
  bottom: -3%;
`;

const mapDispatchToProps = (dispatch) => {
  return {
    playerOn: () => {
      dispatch(actions.playerOn());
    },
    setPlayerSongList: (list) => {
      dispatch(actions.getSongList(list));
    },
    setAudioSrc: (src, thumb, name, artist, view, like) => {
      dispatch(actions.setPlayerSrc(src, thumb, name, artist, view, like));
    },
  };
};

export default connect(null, mapDispatchToProps)(ArtistCard);
