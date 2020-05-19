import React, { useState, useEffect } from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import styled from "styled-components";

const LibraryList = (props) => {
  let scrollbar = null;
  const [scrollPoint, setScroll] = useState();
  const [screenWidth, setWidth] = useState(window.screen.width);

  return (
    <LibraryWrap>
      <SlidePreviousBtn
        onClick={() => {
          scrollbar.scrollTo(0, 0);
          setScroll(0);
        }}
        scrollPoint={scrollPoint}
        screenWidth={screenWidth}
      >
        <i className="xi-angle-left" />
      </SlidePreviousBtn>
      <SlideNextBtn
        onClick={() => {
          scrollbar.scrollTo(1429, 0);
          setScroll(1429);
        }}
        scrollPoint={scrollPoint}
        screenWidth={screenWidth}
      >
        <i className="xi-angle-right" />
      </SlideNextBtn>
      <CollectionTitle>
        <Title>{props.data.list_name}</Title>
      </CollectionTitle>

      <CollectionAlbums
        ref={(ref) => (scrollbar = ref)}
        onScroll={() => {
          setScroll(scrollbar.scrollLeft);
        }}
      >
        <AlbumCarousel>
          {props.data.map((albumData, idx) => (
            <AlbumCard
              key={idx}
              thumbnail={albumData.list_thumb}
              title={albumData.list_name}
              type={albumData.list_type}
              artist={albumData.list_artist}
            />
          ))}
        </AlbumCarousel>
      </CollectionAlbums>
    </LibraryWrap>
  );
};

export default LibraryList;

const LibraryWrap = styled.div`
  position: relative;
  color: white;
  margin-bottom: 38px;
`;
const SlidePreviousBtn = styled.div`
  display: ${(props) => (props.scrollPoint > 150 ? "" : "none")};
  position: absolute;
  cursor: pointer;
  left: 65px;
  top: 45%;

  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  i {
    color: black;
    position: absolute;
    top: 14px;
    left: 13px;
  }
`;

const SlideNextBtn = styled.div`
  display: ${(props) =>
    props.scrollPoint < props.screenWidth - 600 || props.scrollPoint == null
      ? ""
      : "none"};
  position: absolute;
  cursor: pointer;
  right: 65px;
  top: 45%;

  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  i {
    color: black;
    position: absolute;
    top: 14px;
    right: 13px;
  }
`;

const CollectionTitle = styled.div`
  padding: 32px 88px 16px 88px;
  line-height: 1.3;
  letter-spacing: -0.01em;
`;

const SubTitle = styled.div`
  font-size: 18px;
  color: gray;
  margin-bottom: 2px;
`;

const Title = styled.div`
  font-size: 34px;
  font-weight: 700;
  color: white;
`;

const CollectionAlbums = styled.div`
  line-height: 1.3;
  letter-spacing: -0.01em;
  overflow-x: scroll;
  scroll-behavior: smooth;
  margin: 32px 100px 16px 100px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const AlbumCarousel = styled.div`
  display: flex;
  flex-direction: row;
`;
