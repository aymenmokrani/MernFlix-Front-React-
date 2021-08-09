/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Content from "./components/content/Content";
import MovieCarousel from "./components/MovieCarousel/MovieCarousel";
import Navbar from "./components/navbar/Navbar";
import { getGenres, getPopular } from "./helpers/api";
import LoginPage from "./pages/login/LoginPage";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import RegisterPage from "./pages/register/RegisterPage";
import {
  getGenresAction,
  getPopularAction,
} from "./redux/actions/moviesActions";

function App() {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  console.log(isAuth);

  const dispatch = useDispatch();
  useEffect(() => {
    getPopular().then((res) => {
      dispatch(getPopularAction(res));
    });
    getGenres().then((res) => {
      dispatch(getGenresAction(res));
    });
  }, []);

  return (
    <div className="App" css={styles}>
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <MovieCarousel />
            <div className="container">
              <Content />
            </div>
          </Route>
          <Route exact path="/login">
            {!isAuth ? <LoginPage /> : <Redirect to={{ pathname: "/" }} />}
          </Route>
          <Route path="/register">
            {!isAuth ? <RegisterPage /> : <Redirect to={{ pathname: "/" }} />}
          </Route>
          <Route path="/movie/:id">
            <div className="container">
              <MovieDetails />
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

const styles = css`
  .container {
    padding: 0 20px;
    max-width: 1120px;
    margin: 0 auto;
  }
`;
export default App;
