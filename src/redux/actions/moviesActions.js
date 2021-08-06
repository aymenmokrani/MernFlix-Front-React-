import { getPopular } from "../../helpers/api";

export const getPopularAction = (res) => {
    return {
      type: "GET_POPULAR",
      payload: res
    };  
  };
  
export const getGenresAction = (res) => {
  return {
    type: "GET_GENRES",
    payload: res
  }
}