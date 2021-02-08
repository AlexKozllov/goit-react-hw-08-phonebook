import {
  postSignUpContact,
  postContacts,
  getContacts,
  removeContact,
} from "../../servises/fatchToDB";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactError,
  removeContactSuccess,
  removeContactRequest,
  signUpRequest,
  signUpSuccess,
  signUpError,
} from "../actions/phBookActions";

const signUpContact = (contacts) => (dispatch) => {
  dispatch(signUpRequest());

  postSignUpContact(contacts)
    .then((data) => {
      dispatch(signUpSuccess(data));
    })
    .catch((error) => dispatch(signUpError(error)));
};

const addContact = (contacts) => (dispatch) => {
  dispatch(addContactRequest());

  postContacts(contacts)
    .then((data) => {
      dispatch(addContactSuccess(data));
    })
    .catch((error) => dispatch(addContactError(error)));
};

const getContactsList = () => (dispatch) => {
  dispatch(getContactsRequest());

  getContacts()
    .then((data) => {
      console.log("data", data);
      dispatch(getContactsSuccess(data));
    })
    .catch((error) => dispatch(getContactsError(error)));
};

const removeContactFromList = (id) => (dispatch) => {
  dispatch(removeContactRequest());
  removeContact(id)
    .then(() => {
      dispatch(removeContactSuccess(id));
    })
    .catch((error) => dispatch(removeContactError(error)));
};

export { addContact, getContactsList, removeContactFromList, signUpContact };
