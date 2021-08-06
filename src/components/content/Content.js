/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Card, Col, Image, Row, Tag, Typography, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import fallbackImg from "../../assets/fallback.png";
import { getMovie } from "../../helpers/api";
import { IMAGE_BASE_URL, IMAGE_SIZE_L } from "../../helpers/config";
import { getReleaseDate } from "../../helpers/helpers";

function Content() {
  const { Title } = Typography;
  const popularMovies = useSelector((state) => state.moviesReducer.popular);
  const genres = useSelector((state) => state.moviesReducer.genres);

  const consoleDetails = (id) => {
    getMovie(id).then((res) => console.log(res));
  };

  return (
    <div className="content" css={style}>
      <h1 className="title">Popular Now</h1>
      <br />
      <Row justify="space-around" gutter={[0, 32]}>
        {popularMovies.map((element, index) => (
          <Col xs={24} sm={10} md={7} lg={5} span={4} key={index}>
            <Card
              hoverable
              cover={
                <Image
                  // src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  src={`${IMAGE_BASE_URL}/${IMAGE_SIZE_L}/${element.poster_path}`}
                  fallback={fallbackImg}
                  placeholder
                />
              }
            >
              <Card.Meta
                title={
                  <div>
                    <Link to={`/movie/${element.id}`}>
                      <Tooltip title={element.original_title}>
                        <Title
                          level={4}
                          style={{
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                          }}
                          onClick={() => consoleDetails(element.id)}
                        >
                          {element.original_title}
                        </Title>
                      </Tooltip>
                    </Link>

                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      {element.genre_ids.map((id, idx) => {
                        return (
                          <Tag
                            color="blue"
                            key={idx}
                            style={{ marginBottom: 10 }}
                          >
                            {genres.find((el) => el.id === id)?.name}
                          </Tag>
                        );
                      })}
                    </div>
                  </div>
                }
                description={
                  <div>
                    <span>Release Year: </span>
                    <b>{getReleaseDate(element.release_date)}</b>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

const style = css``;

export default Content;
