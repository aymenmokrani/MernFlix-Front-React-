export default function (state = { isAuth: false }, action) {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isAuth: true };
    case "SIGN_OUT":
      return { ...state, isAuth: false };

    default:
      return { state };
  }
}
