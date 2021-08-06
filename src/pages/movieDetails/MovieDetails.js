/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Image } from "antd";
import { Typography } from "antd";
import React from "react";

function MovieDetails() {
  const { Title } = Typography;
  return (
    <div css={styles}>
      <div className="details">
        <Image
          preview={false}
          src="http://image.tmdb.org/t/p//w300//9dKCd55IuTT5QRs989m9Qlb7d2B.jpg"
        />
        <div className="information">
          <Title level={3}>Movie Title</Title>
          <strong>tagline:</strong>
          <strong>language:</strong>
          <strong>release date:</strong>
          <strong>status:</strong>
          <strong>vote average:</strong>
          <strong>overview:</strong>
          <strong>production companies:</strong>
          <strong>production countries:</strong>
        </div>
      </div>
      <div></div>
    </div>
  );
}

const styles = css`
  min-height: calc(100vh - 57px);
  margin-top: 60px;
  //   background: teal;
  .details {
    display: flex;
    .information {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      padding: 0 20px;
      //   background-color: red;
      > strong {
        margin: 5px 0;
        font-size: 15px;
      }
    }
  }
`;
export default MovieDetails;
