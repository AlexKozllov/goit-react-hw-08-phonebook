import {
  postSignInUser,
  postSignUpUser,
  postLogoutUser,
  getRefreshUser,
} from "../../servises/fatchToDB";
import {
  logoutError,
  logoutSuccess,
  logoautRequest,
  signInError,
  signInRequest,
  signInSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
  refreshUserRequest,
  refreshUserSuccess,
  refreshUserError,
} from "../actions/authActions";

const signUpUser = (user) => (dispatch) => {
  dispatch(signUpRequest());

  postSignUpUser(user)
    .then((data) => {
      dispatch(signUpSuccess(data));
    })
    .catch((error) => dispatch(signUpError(error)));
};

const signInUser = (user) => (dispatch) => {
  dispatch(signInRequest());

  postSignInUser(user)
    .then((data) => {
      dispatch(signInSuccess(data));
    })
    .catch((error) => {
      dispatch(signInError(error));
    });
};

const logoutUser = () => (dispatch) => {
  dispatch(logoautRequest());

  postLogoutUser()
    .then(() => {
      dispatch(logoutSuccess());
    })
    .catch((error) => dispatch(logoutError(error)));
};

const refreshUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (persistedToken) {
    dispatch(refreshUserRequest());

    getRefreshUser(persistedToken)
      .then((data) => {
        dispatch(refreshUserSuccess(data));
      })
      .catch((error) => dispatch(refreshUserError(error)));
  }
};
export { signUpUser, signInUser, logoutUser, refreshUser };
