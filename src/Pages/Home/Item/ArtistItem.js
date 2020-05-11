import React from "react";
import styled from "styled-components";

const ArtistItem = (props) => {
  const ThumbnailSize = `180px`;
  const Thumbnail = styled.div`
    width: ${ThumbnailSize};
    height: ${ThumbnailSize};
    background-size: ${ThumbnailSize} ${ThumbnailSize};
    background-position: center;
    background-image: url(${props.itemData.thumbnail});
    border-radius: 4px;
  `;

  return (
    <ArtistItemWrap>
      <Thumbnail />
    </ArtistItemWrap>
  );
};

export default ArtistItem;

const ArtistItemWrap = styled.div``;
