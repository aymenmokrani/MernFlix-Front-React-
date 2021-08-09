export default function (state = { isAuth: false }, action) {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, isAuth: true };
    case "LOG_OUT":
      return { ...state, isAuth: false };

    default:
      return { state };
  }
}
