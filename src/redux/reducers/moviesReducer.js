import { getGenres, getPopular } from "../../helpers/api";

export default function (state = { popular: [], genres: [] }, action) {
  switch (action.type) {
    case "GET_POPULAR":
      return { ...state, popular: action.payload };
    case "GET_GENRES":
      return { ...state, genres: action.payload };

    default:
      return state;
  }
}
