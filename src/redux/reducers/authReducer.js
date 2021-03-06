import { isAuth } from "../../helpers/authToken";

export default function (state = { isAuth: isAuth() ? true : false }, action) {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, isAuth: true };
    case "LOG_OUT":
      return { ...state, isAuth: false };

    default:
      return state;
  }
}
