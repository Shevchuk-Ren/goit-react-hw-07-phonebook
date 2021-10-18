import axios, { Axios } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { addPhonebookError, addPhonebookRequest, addPhonebookSuccess, deletePhonebookError, deletePhonebookRequest, deletePhonebookSuccess } from './phonebook-actions';


axios.defaults.baseURL = 'http://localhost:4040'


export const addContact = data => dispatch => {
  console.log(data, `New data`)
  const contactNew = {
     id: uuidv4(),
      name: data.name,
     number: data.number
  };
  console.log(contactNew, `New ContCT`)
  dispatch(addPhonebookRequest());

  axios.post(
    `/contacts`, contactNew
  ).then(({ data } ) => dispatch(addPhonebookSuccess(data))).catch(error => dispatch(addPhonebookError(error)))
}
 
export const deleteContact = id => dispatch => {
    dispatch(deletePhonebookRequest());


    axios.delete(`contacts/${id}`).then(() => dispatch(deletePhonebookSuccess(id))).catch(error => dispatch(deletePhonebookError(error)))

}
