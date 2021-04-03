// import axios from 'axios';
// // import {
// //   getContactsRequest,
// //   getContactsSuccess,
// //   getContactsError,
// //   addContactRequest,
// //   addContactSuccess,
// //   addContactError,
// //   deleteContactRequest,
// //   deleteContactSuccess,
// //   deleteContactError,
// // } from './contact-actions';
// import { contactsActions } from '../contacts';

// axios.defaults.baseURL = 'http://localhost:2222';

// /**
//  * Операция это функция, вызванная в компоненте,
//  * которая возвращает другую функцию, в которой
//  * выполняются асинх запросы по паттерну:
//  * Request > Success > Error
//  */

// // GET
// export const GET = () => async (dispatch) => {
//   dispatch(contactsActions.getContactsRequest());
//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(contactsActions.getContactsSuccess(data));
//   } catch (error) {
//     dispatch(contactsActions.getContactsError(error));
//   }
// };

// // ADD
// export const ADD = (text) => async (dispatch) => {
//   const newContact = { name: text.name, number: text.number };

//   dispatch(contactsActions.addContactRequest());

//   try {
//     const { data } = await axios.post('/contacts', newContact);
//     dispatch(contactsActions.addContactSuccess(data));
//   } catch (error) {
//     dispatch(contactsActions.addContactError(error));
//   }
// };

// // DELETE
// export const DELETE = (id) => async (dispatch) => {
//   dispatch(contactsActions.deleteContactRequest());

//   try {
//     await axios.delete(`/contacts/${id}`);
//     dispatch(contactsActions.deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(contactsActions.deleteContactError(error));
//   }
// };
