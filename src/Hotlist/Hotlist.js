import React from "react";
import styled from "styled-components";
import ArtistCard from "./ArtistCard";
import Listbox from "./Listbox";

const API_URL = "";

class Hotlist extends React.Component {
  // --------여기 함수 만들기 ------------

  constructor() {
    super();

    this.state = {
      data: { contents: [] },
    };
  }

  componentDidMount() {
    fetch("./Data/HotListData.json")
      // ./Data/HotListData.json
      // http://10.58.7.53:8000/music/hot
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({
          // data: { contents: data.element },
          data, //moc data
        });
      });
  }

  onClickJoin = () => {
    this.props.history.push("/player");
  };

  render() {
    console.log(this.state.data);
    const { contents } = this.state.data;
    // 두리님이 두번 알려준거 위것을 줄여준다는 뜻
    return (
      <div>
        <S_line>
          <Music_header>
            <Nana>동영상 핫리스트</Nana>
            새롭게 주목받고 있는 인기 급상승 동영상
          </Music_header>
        </S_line>
        <C_line>
          <D_line>
            <ArtistCardContainer onClick={this.onClickJoin}>
              {contents.map((content) => (
                <ArtistCard
                  thumb={content.thumb}
                  title={content.title}
                  artist={content.artist}
                  views={content.views}
                />
              ))}
            </ArtistCardContainer>
          </D_line>
        </C_line>
      </div>
    );
  }
}

export default Hotlist;

const C_line = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 120px;
`;

const S_line = styled.div`
  display: flex;
  justify-content: center;
`;

const D_line = styled.div`
  max-width: 1210px;
  display: flex;
  justify-content: center;
`;
const AB_box = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
`;

const A_box = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  border-color: white;
`;

const B_box = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  border-color: white;
`;

const Nana = styled.div`
  margin-top: 90px;
  padding-bottom: 10px;
  font-size: 35px;
  display: flex;
  align-items: center;
  font-weight: 500;
`;

const Music_header = styled.div`
  /* position: relative;
  right: 0px; */
  /* display:flex; */
  margin-bottom: 20px;
  color: white;
  font-weight: 100;
  width: 1200px;
`;

const ArtistCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Hiddenlist = styled.div`
  position: relative;
  top: -100px;
  right: 10px;
  overflow: hidden;
`;
