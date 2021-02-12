import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.loading;
const getFilter = (state) => state.contacts.filter;
const getListContacts = (state) => state.contacts.items;
const getCurentToken = (state) => state.auth.token;
const getUserEmail = (state) => state.auth.user.email;

const getVisibleContacts = createSelector(
  [getListContacts, getFilter],
  (listContacts, filterValue) => {
    if (!!filterValue) {
      return listContacts.filter((contact) =>
        contact.name
          .toLocaleLowerCase()
          .includes(filterValue.toLocaleLowerCase())
      );
    } else return listContacts;
  }
);

export {
  getLoading,
  getFilter,
  getVisibleContacts,
  getListContacts,
  getCurentToken,
  getUserEmail,
};
