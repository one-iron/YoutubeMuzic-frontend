import React from "react";
import styled from "styled-components";
import axios from "axios";
import { getLikedSong } from "../../Config";
import PlayListItem from "../../Pages/PlayList/PlayListItem";

class Third extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");

    const getData = async () => {
      if (token) {
        const res = await axios.get(getLikedSong, {
          headers: { Authorization: token },
        });
        this.setState({
          list: res.data.contents,
        });
      }
    };

    getData();
  }

  render() {
    return (
      <div>
        <Wrap>
          {this.state.list &&
            this.state.list.map((item) => (
              <PlayListItem
                key={item.item_id}
                item={item}
                playerOn={"() => playerOnInListPage(item)"}
                playerOff={"playerOff"}
              />
            ))}
        </Wrap>
      </div>
    );
  }
}
export default Third;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2000px;
`;
