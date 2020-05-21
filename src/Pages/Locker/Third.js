import React from "react";
import styled from "styled-components";
import blacklist from "../../img/blacklist.png";

class Third extends React.Component {
  render() {
    return (
      <div>
        <Middle_box>
          <img className="img" src={blacklist} />
        </Middle_box>
      </div>
    );
  }
}
export default Third;

const Middle_box = styled.div`
  display: flex;
  width: 50%;
  margin-bottom: 2000px;
`;
