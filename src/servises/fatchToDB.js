import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

// const token = {
//   unSet() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

const tokenSet = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const tokenUnSet = () => {
  axios.defaults.headers.common.Authorization = "";
};

const postSignUpUser = async (user) => {
  try {
    return await axios.post("/users/signup", user).then(({ data }) => {
      tokenSet(data.token);
      return data;
    });
  } catch (error) {
    console.log("error", { error });
    throw error;
  }
};

const postSignInUser = async (user) => {
  try {
    return await axios.post("/users/login", user).then(({ data }) => {
      console.log("data", data);
      tokenSet(data.token);
      return data;
    });
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const postLogoutUser = async () => {
  try {
    return await axios.post("/users/logout").then((data) => {
      tokenUnSet(data);
    });
  } catch (error) {
    console.log("error", { error });
    throw error;
  }
};

const getRefreshUser = async (persistedToken) => {
  tokenSet(persistedToken);
  try {
    return await axios.post("/users/current").then((data) => {
      return data;
    });
  } catch (error) {
    console.log("error", { error });
    throw error;
  }
};

const postContacts = async (contacts) => {
  try {
    return await axios.post("/contacts", contacts).then(({ data }) => data);
  } catch (error) {
    console.log("error", { error });
    throw error;
  }
};

const getContacts = async () => {
  try {
    return await axios.get("/contacts").then(({ data }) => data);
  } catch (error) {
    console.log("error", { error });
    throw error;
  }
};

const removeContact = async (id) => {
  try {
    return await axios.delete(`/contacts/${id}`);
  } catch (error) {
    console.log("error", { error });
    throw error;
  }
};

export {
  postContacts,
  getContacts,
  removeContact,
  postSignUpUser,
  postSignInUser,
  postLogoutUser,
  getRefreshUser,
};
