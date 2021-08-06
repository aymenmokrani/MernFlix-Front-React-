/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Carousel, Image } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IMAGE_BASE_URL, IMAGE_SIZE_L } from "../../helpers/config";

function MovieCarousel() {
  const pops = useSelector((state) => state.moviesReducer.popular);
  console.log(pops);
  return (
    <div className="movieDetails" css={styles}>
      <div className="banner">
        <Carousel autoplay dotPosition="buttom">
          {pops?.slice(0, 4).map((element, index) => (
            <div key={index}>
              <Image
                preview={false}
                src={`${IMAGE_BASE_URL}/${IMAGE_SIZE_L}/${element.backdrop_path}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

const styles = css`
  .banner {
    color: white;
    .ant-carousel {
      color: white;
      text-align: center;
      > div {
        background-color: black;
        img {
          background: black;
          max-height: 550px;
          margin-bottom: -1.5%;
        }
      }
    }
  }
`;

export default MovieCarousel;
