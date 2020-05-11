import React, { useState, useEffect } from "react";
import { useInput } from "../CustomHooks";
import styled from "styled-components";

const Nav = () => {
  const menuItems = ["홈", "핫리스트", "보관함"];
  const [isScrolled, setIsScrolled] = useState();
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

  useEffect(() => {
    document.addEventListener("scroll", checkScroll);
    return () => {
      document.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <NavWrap isScrolled={isScrolled}>
      <LogoImg
        src="https://s.ytimg.com/yts/img/music/web/on_platform_logo_dark-vfl_PUy2j.svg"
        alt="logo"
      />
      <Menu>
        {input.searchOn && (
          <InputWrap onSubmit={submit}>
            <i className="xi-arrow-left" />
            <Input placeholder="검색" autoFocus {...input} />
            <i className="xi-close-thin" />
          </InputWrap>
        )}
        {menuItems.map((item, idx) => (
          <Item key={idx} isVisible={input.searchOn}>
            {item}
          </Item>
        ))}
        <Item
          onClick={() => input.setSearchOn(true)}
          isVisible={input.searchOn}
        >
          <i className="xi-search" />
          검색
        </Item>
      </Menu>
      <Login>
        <i className="xi-ellipsis-v" />
        <LoginBtn>
          <span>로그인</span>
        </LoginBtn>
      </Login>
    </NavWrap>
  );
};

export default Nav;

const NavWrap = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 64px;
  background-color: ${(props) => (props.isScrolled ? "#1d1d1d" : "")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px 0px 16px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 5px 6px -2px rgba(0, 0, 0, 0.4);
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
