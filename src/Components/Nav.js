import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useInput } from "../CustomHooks";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import { googleLogin, clientId } from "../Config";
import NavAddMenu from "./NavAddMenu";
import * as actions from "../action";

const Nav = ({
  handleLoginData,
  email,
  familyName,
  givenName,
  imageUrl,
  history,
}) => {
  const menuItems = ["홈", "핫리스트"];
  const [token, setToken] = useState(null);
  const [isScrolled, setIsScrolled] = useState();
  const [userImg, setUserImg] = useState(false);
  const [isClickedUser, setClickedUser] = useState(false);
  const input = useInput("");

  const checkScroll = (e) => {
    if (e.target.scrollingElement.scrollTop > 1) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    input.setValue("");
  };

  const LoginGoogle = async (res) => {
    try {
      const token = await axios({
        method: "POST",
        url: googleLogin,
        data: {
          id: res.googleId,
          token: res.tc.id_token,
        },
      });
      if (token.data.token) {
        const { email, familyName, givenName, imageUrl } = res.profileObj;
        localStorage.setItem("token", token.data.token);
        localStorage.setItem("ImageUrl", imageUrl);
        handleLoginData(email, familyName, givenName, imageUrl);
        setUserImg(localStorage.getItem("ImageUrl"));
        setToken(token.data.token);
      } else {
        console.warn("Login failed, can not check google token");
      }
    } catch {
      console.warn("Login failed, can not connect django api");
    }
  };

  useEffect(() => {
    if (history.location.pathname === "/player") {
      setIsScrolled(true);
    }
    document.addEventListener("scroll", checkScroll);
    if (localStorage.getItem("ImageUrl")) {
      setUserImg(localStorage.getItem("ImageUrl"));
    }
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
    return () => {
      document.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const test = (click) => {
    localStorage.getItem("token") ? history.push("/library") : click();
  };

  return (
    <NavWrap isScrolled={isScrolled}>
      <Link to="/">
        <LogoImg
          src="https://s.ytimg.com/yts/img/music/web/on_platform_logo_dark-vfl_PUy2j.svg"
          alt="logo"
        />
      </Link>
      <Menu>
        {input.searchOn && (
          <InputWrap onSubmit={submit}>
            <i className="xi-arrow-left" />
            <Input placeholder="검색" autoFocus {...input} />
            <i
              className="xi-close"
              style={{ display: input.value ? "" : "none" }}
            />
          </InputWrap>
        )}
        {menuItems.map((item, idx) => (
          <Item key={idx} isVisible={input.searchOn}>
            {item}
          </Item>
        ))}
        <GoogleLogin
          clientId={clientId}
          render={(props) => (
            <Item
              isVisible={input.searchOn}
              onClick={() => test(props.onClick)}
            >
              <span>보관함</span>
            </Item>
          )}
          onSuccess={(res) => LoginGoogle(res)}
          onFailure={(res) => console.log("Google Error", res)}
        />
        <Item
          onClick={() => input.setSearchOn(true)}
          isVisible={input.searchOn}
        >
          <i className="xi-search" />
          검색
        </Item>
      </Menu>
      {token ? (
        <LoginedImg
          imageUrl={userImg}
          onClick={() => setClickedUser(!isClickedUser)}
        >
          <NavAddMenu
            isClickedUser={isClickedUser}
            imageUrl={userImg}
            data={{ email, familyName, givenName }}
            setToken={setToken}
          />
        </LoginedImg>
      ) : (
        <Login>
          <i className="xi-ellipsis-v" />
          <GoogleLogin
            clientId={clientId}
            render={(props) => (
              <LoginBtn onClick={props.onClick}>
                <span>로그인</span>
              </LoginBtn>
            )}
            onSuccess={(res) => LoginGoogle(res)}
            onFailure={(res) => console.log("Google Error", res)}
          />
        </Login>
      )}
    </NavWrap>
  );
};

const mapStataeToProps = (state) => {
  return {
    email: state.loginData.email,
    familyName: state.loginData.familyName,
    givenName: state.loginData.givenName,
    imageUrl: state.loginData.imageUrl,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoginData: (email, familyName, givenName, imageUrl) => {
      dispatch(actions.getLoginData(email, familyName, givenName, imageUrl));
    },
    playerOn: () => {
      dispatch(actions.playerOn());
    },
    playerOff: () => {
      dispatch(actions.playerOff());
    },
    setSrc: (src) => {
      dispatch(actions.setPlayerSrc(src));
    },
  };
};

export default connect(mapStataeToProps, mapDispatchToProps)(withRouter(Nav));

const NavWrap = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  min-width: 1000px;
  height: 64px;
  background-color: ${(props) => (props.isScrolled ? "#1d1d1d" : "")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px 0px 16px;
  transition: background-color 0.2s ease-in-out;
  box-shadow: ${(props) =>
    props.isScrolled ? "0px 5px 6px -2px rgba(0, 0, 0, 0.4)" : ""};
`;

const LogoImg = styled.img`
  cursor: pointer;
  height: 24px;
`;

const Menu = styled.div`
  display: flex;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.5);
`;

const Item = styled.div`
  margin: 0px 22px;
  line-height: 48px;
  display: ${(props) => (props.isVisible ? "none" : "")};
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
  i {
    margin-right: 22px;
  }
`;

const InputWrap = styled.form`
  width: 860px;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgb(35, 35, 35);
  border: 1px solid hsl(0, 0%, 20%);
  border-radius: 2px;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.5);
  i {
    font-size: 22px;
    margin: 0px 16px;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px;
`;

const Login = styled.div`
  display: flex;
  align-items: center;
  i {
    font-size: 24px;
    font-weight: 400;
    color: #ffffff;
    margin-right: 16px;
    cursor: pointer;
  }
`;

const LoginBtn = styled.div`
  height: 32px;
  font-size: 14px;
  padding: 0px 16px;
  background-color: #065fd4;
  color: #ffffff;
  line-height: 32px;
  border-radius: 2px;
  font-weight: 400;
  cursor: pointer;
`;

const LoginedImg = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  padding-left: 26px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.imageUrl});
  cursor: pointer;
`;
