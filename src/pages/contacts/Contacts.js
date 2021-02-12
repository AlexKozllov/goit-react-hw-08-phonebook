import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";

import s from "../../components/app.module.css";

import shiftAppear from "../../components/animation/shiftAppear.module.css";
import ContactForm from "../../components/contactForm/ContactForm";
import ContactList from "../../components/contactList/ContactList";
import ModalLoader from "../../components/loader/ModalLoader";
import { getLoading } from "../../redux/selectors/contactsSelectors";
import { getContactsList } from "../../redux/operations/phBookOperations";
import { useHistory } from "react-router-dom";
import { getIsAuthenticated } from "../../redux/selectors/authSelectors";

const Contacts = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => getIsAuthenticated(state));
  const isLoading = useSelector((state) => getLoading(state));

  const history = useHistory();

  useEffect(() => {
    if (!isAuthenticated) {
      history.replace("/login");
      return;
    }
    dispatch(getContactsList());
  }, []);

  return (
    <>
      {isLoading && <ModalLoader />}
      <div className={s.wrapper}>
        <CSSTransition
          in={true}
          appear
          classNames={shiftAppear}
          timeout={500}
          unmountOnExit
        >
          <h1 className={s.headerPhoneboo}>Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        <ContactList />
      </div>
    </>
  );
};

export default Contacts;
