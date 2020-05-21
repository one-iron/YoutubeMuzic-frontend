import React from "react";
import styled from "styled-components";
import radii from "../../img/radii.png";

class Second extends React.Component {
  render() {
    return (
      <div>
        <Middle_box>
          <img className="img" src={radii} width="300px" />
        </Middle_box>
      </div>
    );
  }
}
export default Second;

const Middle_box = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  margin-bottom: 2000px;
`;
