import React, { useState, useEffect } from "react";
import LibraryList from "./LibraryList/LibraryList";
import styled from "styled-components";
import Locker from "../../Pages/Locker/Locker";
import { API } from "../../Config";

const Library = () => {
  const [libraryData, setLibraryData] = useState();

  useEffect(() => {
    fetch(`${API}/user/recent/playlist?${localStorage.getItem("token")}}`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => setLibraryData(res.contents));
  }, []);

  if (!libraryData) {
    window.scrollTo({
      top: 450,
      left: 0,
    });
  }

  return (
    <LibraryWrap>
      <Title>{libraryData && libraryData.collection}</Title>
      {libraryData ? <LibraryList data={libraryData.elements} /> : <Mock />}
      <LibraryTab></LibraryTab>
      <Locker libraryData={libraryData} />
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

const Mock = styled.div`
  height: 412px;
`;
