import React, { useState, useEffect } from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import styled from "styled-components";
const AlbumCard = (props) => {
  const { title, subtitle, thumbnail } = props;

  return (
    <AlbumCardWrap>
      <Thumbnail thumbnail={thumbnail} />
      <Text>
        <Title> {title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Text>
    </AlbumCardWrap>
  );
};

export default AlbumCard;

const AlbumCardWrap = styled.div`
  margin-right: 20px;
`;

const Text = styled.div`
  margin-top: 24px;
  line-height: 1.3;
  letter-spacing: -0.01em;
`;
const Title = styled.div`
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline white;
  }
`;
const SubTitle = styled.div`
  margin-top: 3px;
  font-weight: 100;
`;
