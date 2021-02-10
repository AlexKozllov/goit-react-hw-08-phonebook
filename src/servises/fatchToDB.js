import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const postSignUpUser = async (user) => {
  try {
    return await axios.post("/users/signup", user).then(({ data }) => {
      token.set(data.token);
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
      token.set(data.token);
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
      token.unSet(data);
    });
  } catch (error) {
    console.log("error", { error });
    throw error;
  }
};

const getRefreshUser = async (persistedToken) => {
  token.set(persistedToken);
  try {
    return await axios.get("/users/current").then(({ data }) => {
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
