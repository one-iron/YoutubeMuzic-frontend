import React, { useState, useEffect } from "react";
import MainThumbnail from "./MainThumbnail/MainThumbnail";
import MainListFirst from "./MainListFirst/MainListFirst";
import styled from "styled-components";

const Home = () => {
  const [FirstAlbumData, SetFirstAlbumData] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/data/Collection1.json")
      .then((res) => res.json())
      .then((res) => SetFirstAlbumData(res));
  }, []);

  return (
    <HomeWrap>
      {FirstAlbumData && <MainThumbnail imgData={FirstAlbumData.main_thumb} />}
      {FirstAlbumData && <MainListFirst data={FirstAlbumData} />}
    </HomeWrap>
  );
};

export default Home;

const HomeWrap = styled.div`
  width: 100%;
  height: 3000px;
`;
