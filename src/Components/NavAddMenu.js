import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../action";
import styled from "styled-components";

const NavAddMenu = ({ isClickedUser, history, handleLoginData, setToken }) => {
  const [info, setInfo] = useState([]);

  const LogOutGoogle = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("imageUrl");
    localStorage.removeItem("familyName");
    localStorage.removeItem("givenName");
    localStorage.removeItem("email");
    history.push("/");
    handleLoginData("", "", "", "");
    setToken(null);
  };

  useEffect(() => {
    setInfo([
      localStorage.getItem("imageUrl"),
      localStorage.getItem("familyName"),
      localStorage.getItem("givenName"),
      localStorage.getItem("email"),
    ]);
  }, []);

  return (
    <NavAddMenuWrap isClickedUser={isClickedUser}>
      <ProfileWrap>
        <ProfileImage imageUrl={info[0]} />
        <ProfileInfo>
          <p>
            {info[1]}
            {info[2]}
          </p>
          {info[3]}
          <LogOutBtn onClick={() => LogOutGoogle()}>
            Google계정 로그아웃
          </LogOutBtn>
        </ProfileInfo>
      </ProfileWrap>
    </NavAddMenuWrap>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoginData: (email, familyName, givenName, imageUrl) => {
      dispatch(actions.getLoginData(email, familyName, givenName, imageUrl));
    },
  };
};

export default connect("", mapDispatchToProps)(withRouter(NavAddMenu));

const NavAddMenuWrap = styled.div`
  width: 300px;
  transform: translate(-100%, 30px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: ${(props) => (props.isClickedUser ? "" : "none")};
  cursor: default;
`;

const ProfileWrap = styled.div`
  background-color: rgb(33, 33, 33, 0.98);
  height: 100px;
  padding: 16px;
  display: flex;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.imageUrl});
  border-radius: 50%;
  background-size: cover;
  margin-right: 16px;
`;

const ProfileInfo = styled.div`
  font-size: 14px;
  color: #ffffff;
  p {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const LogOutBtn = styled.div`
  color: #3ea6ff;
  margin-top: 10px;
  cursor: pointer;
`;
