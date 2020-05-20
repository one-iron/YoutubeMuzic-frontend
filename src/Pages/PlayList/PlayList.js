import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { playListPageData, postRecentPlayList } from "../../Config";
import axios from "axios";
import styled from "styled-components";
import PlayListItem from "./PlayListItem";
import * as actions from "../../action";

const PlayList = ({
  match,
  playerOn,
  playerOff,
  setPlayerSongList,
  setAudioSrc,
}) => {
  const [list, setList] = useState([]);
  const [meta, setMeta] = useState({});
  const [isLoading, setLoading] = useState(false);

  const playerOnInListPage = (item) => {
    playerOn();
    setPlayerSongList(list);
    setAudioSrc(
      item.item_id,
      item.item_src,
      item.item_thumb,
      item.item_name,
      item.item_artist,
      item.view,
      item.like
    );

    if (localStorage.getItem("token")) {
      axios.post(
        postRecentPlayList,
        { playlist_id: match.params.id },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
    }
  };

  const suffleList = () => {
    setList([...list.sort(() => 0.5 - Math.random())]);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await axios(`${playListPageData}${match.params.id}`);
      setList(data.data.elements);
      setMeta(data.data.list_meta);
      setLoading(true);
    };
    getData();
  }, []);

  if (!isLoading) {
    return (
      <Loading>
        <i className="xi-spinner-1 xi-spin" />
      </Loading>
    );
  }

  return (
    <PlayListWrap>
      <TopWrap>
        <TitleImage imageUrl={meta.list_thumb} />
        <InfoWrap>
          <Title>{meta.list_name}</Title>
          <Info>
            <p>
              {meta.list_type}•{meta.list_artist}•{meta.list_year}
            </p>
            <p>노래{list.length}곡</p>
          </Info>
          <Desc>{meta.list_desc}</Desc>
          <Buttons>
            <SuffleBtn onClick={suffleList}>
              <i className="xi-shuffle" />
              <span>셔플</span>
            </SuffleBtn>
            <AddBtn>
              <i className="xi-library-add" />
              <span>보관함에 추가</span>
            </AddBtn>
            <MoreIcon>
              <i className="xi-ellipsis-v" />
            </MoreIcon>
          </Buttons>
        </InfoWrap>
      </TopWrap>
      <ItemList>
        {list.map((item) => (
          <PlayListItem
            key={item.item_id}
            item={item}
            playerOn={() => playerOnInListPage(item)}
            playerOff={playerOff}
          />
        ))}
      </ItemList>
    </PlayListWrap>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    playerOn: () => {
      dispatch(actions.playerOn());
    },
    playerOff: () => {
      dispatch(actions.playerOff());
    },
    setPlayerSongList: (list) => {
      dispatch(actions.getSongList(list));
    },
    setAudioSrc: (id, src, thumb, name, artist, view, like) => {
      dispatch(actions.setPlayerSrc(id, src, thumb, name, artist, view, like));
    },
  };
};

export default connect("", mapDispatchToProps)(PlayList);

const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    font-size: 36px;
    color: #ffffff;
  }
`;

const PlayListWrap = styled.div``;

const TopWrap = styled.div`
  width: 100vw;
  min-width: 800px;
  height: 400px;
  background-color: #1d1d1d;
  padding: 112px 160px 48px 160px;
  display: felx;
`;

const TitleImage = styled.div`
  width: 240px;
  height: 240px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  border-radius: 4px;
  margin-right: 64px;
`;

const InfoWrap = styled.div`
  color: #aaaaaa;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 24px;
  color: #ffffff;
  font-weight: 600;
`;

const Info = styled.div`
  padding: 16px 0px;
  p {
    line-height: 20px;
  }
`;

const Buttons = styled.div`
  display: felx;
  align-items: center;
  i {
    font-size: 24px;
    margin-right: 8px;
  }
  span {
    line-height: 35px;
  }
`;

const Desc = styled.div`
  margin-bottom: 32px;
`;

const SuffleBtn = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 0px 16px;
  font-size: 16px;
  color: #131313;
  margin-right: 12px;
  cursor: pointer;
`;

const AddBtn = styled.div`
  padding: 0px 16px;
  color: #ffffff;
  height: 36px;
  display: flex;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 2px;
`;

const MoreIcon = styled.div`
  font-size: 16px;
  color: #ffffff;
  margin-left: 8px;
  i {
    font-size: 21px;
  }
`;

const ItemList = styled.div`
  padding: 24px 160px 120px 160px;
`;
