import React from "react";
import styled from "styled-components";
import ArtistCard from "../../Hotlist/ArtistCard";
import Listbox from "../../Hotlist/Listbox";

class First extends React.Component {
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
    return (
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
    );
  }
}
export default First;

const D_line = styled.div`
  max-width: 1210px;
  display: flex;
  justify-content: center;
`;

const ArtistCardContainer = styled.div`
  max-width: -1350%;
  width: -1350%;
  height: -1350%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
