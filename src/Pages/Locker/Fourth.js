import React from "react";
import styled from "styled-components";
import img from "../../";
import yudd from "../../img/yudd.png";

class Fourth extends React.Component {
  render() {
    return (
      <div>
        <Middle_box>
          <img className="img" src={yudd} width="300px" />
        </Middle_box>
      </div>
    );
  }
}
export default Fourth;

const Middle_box = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  margin-bottom: 2000px;
`;
