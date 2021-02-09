import {
  postSignInUser,
  postSignUpUser,
  postLogoutUser,
} from "../../servises/fatchToDB";
import {
  logoutError,
  logoutSuccess,
  logoauRequest,
  signInError,
  signInRequest,
  signInSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
} from "../actions/authActions";

const signUpUser = (user) => (dispatch) => {
  dispatch(signUpRequest());

  postSignUpUser(user)
    .then((data) => {
      console.log("data", data);
      dispatch(signUpSuccess(data));
    })
    .catch((error) => dispatch(signUpError(error)));
};

const signInUser = (user) => (dispatch) => {
  dispatch(signInRequest());

  postSignInUser(user)
    .then((data) => {
      console.log("data", data);
      dispatch(signInSuccess(data));
    })
    .catch((error) => dispatch(signInError(error)));
};

const logoutUser = (token) => (dispatch) => {
  dispatch(logoauRequest());

  postLogoutUser(token)
    .then((data) => {
      console.log("data", data);
      dispatch(logoutSuccess(data));
    })
    .catch((error) => dispatch(logoutError(error)));
};
export { signUpUser, signInUser, logoutUser };
