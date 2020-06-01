import React from "react";
import styled from "styled-components";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth_5 from "./Fifth_5";

const tabs = ["재생목록", "앨범", "노래", "아티스트", "구독"];

class Locker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabID: 0,
      obj: {
        0: <First libraryData={this.props.libraryData} />,
        1: <Second />,
        2: <Third />,
        3: <Fourth />,
        4: <Fifth_5 />,
      },
    };
  }
  componentDidMount() {
    if (!this.props.libraryData) {
      window.scrollTo({
        top: 450,
        left: 0,
      });
    }
  }

  clickHnadler = (id) => {
    this.setState(
      {
        activeTabID: id,
      },
      () => {
        if (this.props.libraryData) {
          window.scrollTo({
            top: 450,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    );
  };

  render() {
    console.log(this.state);
    const { activeTabID, obj } = this.state;

    return (
      <Wrapper_a>
        <Wrapper>
          <ul>
            {tabs.map((tab, idx) => {
              return (
                <span
                  className={activeTabID === idx ? "selected" : "unselected"}
                  key={idx}
                  onClick={() => this.clickHnadler(idx)}
                >
                  {tab}
                </span>
              );
            })}
          </ul>
          <Content_box>{obj[activeTabID]}</Content_box>
        </Wrapper>
      </Wrapper_a>
    );
  }
}

export default Locker;

const Wrapper = styled.div`
  color: gray;
  font-size: 14px;
  border: 2px solid hidden;
  margin: 10px 10px;

  .selected {
    cursor: pointer;
    border-bottom-color: white;
    color: white;
    border-bottom: 2px solid white;
    margin: 10px 10px;
    padding-bottom: 25px;
  }
  .unselected {
    cursor: pointer;
    color: gray;
    margin: 10px 10px;
  }
`;

const Content_box = styled.div`
  color: white;
  font-size: 70px;
  margin: 80px 10px;
  width: 100vw;
  padding-right: 300px;
`;

const Wrapper_a = styled.div`
  font-size: 17px;
  margin-left: 90px;
  margin-top: 30px;
`;

const Si = styled.div`
  transition-duration: 0.2s, 0.5s;
`;
