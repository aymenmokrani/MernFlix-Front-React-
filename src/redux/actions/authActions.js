import { signout } from "../../helpers/authToken";

export const logIn = () => {
  return {
    type: "LOG_IN",
  };
};

export const logOut = () => {
  signout();
  return {
    type: "LOG_OUT",
  };
};
