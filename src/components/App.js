import React, { useEffect } from "react";

import NavigationsLinks from "./navigations/NavigationsLinks";
import NavigationsRouters from "./navigations/NavigationsRouters";
import { BrowserRouter } from "react-router-dom";
import UserMenu from "./userMenu/UserMenu";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/operations/authOperation";

const App = () => {
  const isLogIn = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, []);
  return (
    <BrowserRouter>
      <NavigationsLinks />
      {isLogIn && <UserMenu />}
      <NavigationsRouters />
    </BrowserRouter>
  );
};

export default App;

// const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector((state) => getLoading(state));

//   useEffect(() => {
//     dispatch(getContactsList());
//   }, []);

//   return (
//     <>
//       {isLoading && <ModalLoader />}
//       <div className={s.wrapper}>
//         <CSSTransition
//           in={true}
//           appear
//           classNames={shiftAppear}
//           timeout={500}
//           unmountOnExit
//         >
//           <h1 className={s.headerPhoneboo}>Phonebook</h1>
//         </CSSTransition>
//         <ContactForm />
//         <ContactList />
//       </div>
//     </>
//   );
// };

// export default App;
