import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const postSignUpUser = async (user) => {
  try {
    return await axios.post("/users/signup", user).then(({ data }) => data);
  } catch (error) {
    console.log("error", { error });
    return error;
  }
};

const postSignInUser = async (user) => {
  try {
    return await axios.post("/users/login", user).then(({ data }) => data);
  } catch (error) {
    console.log("error", { error });
    return error;
  }
};

const postLogoutUser = async (token) => {
  try {
    return await axios.post("/users/logout", token).then(({ data }) => data);
  } catch (error) {
    console.log("error", { error });
    return error;
  }
};

const postContacts = async (contacts) => {
  try {
    return await axios.post("/contacts", contacts).then(({ data }) => data);
  } catch (error) {
    console.log("error", { error });
    return error;
  }
};

const getContacts = async () => {
  try {
    return await axios.get("/contacts").then(({ data }) => data);
  } catch (error) {
    console.log("error", { error });
    return error;
  }
};

const removeContact = async (id) => {
  try {
    return await axios.delete(`/contacts/${id}`);
  } catch (error) {
    console.log("error", { error });
    return error;
  }
};

export {
  postContacts,
  getContacts,
  removeContact,
  postSignUpUser,
  postSignInUser,
  postLogoutUser,
};
