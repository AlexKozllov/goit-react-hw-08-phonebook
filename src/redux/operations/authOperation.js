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
      // console.log("data", data);
      dispatch(signUpSuccess(data));
    })
    .catch((error) => dispatch(signUpError(error)));
};

const signInUser = (user) => (dispatch) => {
  dispatch(signInRequest());

  postSignInUser(user)
    .then((data) => {
      // console.log("data", data);
      dispatch(signInSuccess(data));
    })
    .catch((error) => {
      console.log("error554654654", error);

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
      .then(() => {
        dispatch(refreshUserSuccess());
      })
      .catch((error) => dispatch(refreshUserError(error)));
  }
};
export { signUpUser, signInUser, logoutUser, refreshUser };
