/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Image } from "antd";
import { Typography } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../helpers/api";

function MovieDetails() {
  const { Title } = Typography;
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  console.log(movie);
  useEffect(() => {
    getMovie(id).then((res) => setMovie(res));
  }, []);

  return (
    <div css={styles}>
      <div className="details">
        <div className="cover">
          <Image
            preview={false}
            src={`http://image.tmdb.org/t/p//w300/${movie.poster_path}`}
          />
        </div>

        <div className="information">
          <Title level={3}>{movie.original_title}</Title>
          <span>
            <strong>tagline:</strong>
            <span>{` ${movie.tagline}`}</span>
          </span>
          <span>
            <strong>language:</strong>
            <span>{` ${movie.original_language}`}</span>
          </span>
          <span>
            <strong>release date:</strong>
            <span>{` ${movie.release_date}`}</span>
          </span>
          <span>
            <strong>Status:</strong>
            <span>{` ${movie.status}`}</span>
          </span>
          <span>
            <strong>vote average:</strong>
            <span>{` ${movie.vote_average}/10`}</span>
          </span>
          <span>
            <strong>overview:</strong>
            <span>{` ${movie.overview}`}</span>
          </span>
          <span>
            <strong>production companies:</strong>
            <span>{` ${movie.status}`}</span>
          </span>
          <span>
            <strong>production countries:</strong>
            <span>{` ${movie.status}`}</span>
          </span>
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
    .cover {
      flex-shrink: 0;
    }
    .information {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      padding: 0 20px;
      //   background-color: red;
      > span {
        margin: 5px 0;
        font-size: 14px;
        > strong {
          font-size: 16px;
        }
      }
    }
  }
`;
export default MovieDetails;
