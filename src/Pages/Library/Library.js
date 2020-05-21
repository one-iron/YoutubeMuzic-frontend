import React, { useState, useEffect } from "react";
import LibraryList from "./LibraryList/LibraryList";
import styled from "styled-components";
import Locker from "../../Pages/Locker/Locker";

const Library = () => {
  const API = "http://10.58.0.33:8000/user/recent/playlist";
  const [libraryData, setLibraryData] = useState();

  useEffect(() => {
    fetch(API, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => setLibraryData(res.contents));
  }, []);
  return (
    <LibraryWrap>
      <Title>{libraryData && libraryData.collection}</Title>
      {libraryData && <LibraryList data={libraryData.elements} />}
      <LibraryTab></LibraryTab>
      <Locker />
    </LibraryWrap>
  );
};

export default Library;

const LibraryWrap = styled.div`
  margin: 84px 0 0 0;
  padding-top: 32px;

  color: white;
`;
const Title = styled.div`
  margin-left: 100px;
  margin-bottom: -60px;
  font-size: 26px;
  font-weight: 500;
  line-height: 31.2px;
`;
const LibraryTab = styled.div`
  height: 51px;
`;
