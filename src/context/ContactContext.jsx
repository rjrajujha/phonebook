import { createContext, useState } from "react";
import axios from "axios";
const ContactContext = createContext();

const APIUrl = process.env.REACT_APP_APIURL;

export const ContactContextProvider = ({ children }) => {

  function compare(a, b) {
    if (a.email < b.email) {
      return -1;
    }
    if (a.email > b.email) {
      return 1;
    }
    return 0;
  }

  const [contact, setContact] = useState([]);
  const [tick, settick] = useState(false);

  const getData = async () => {
    const headers = { "Authorization": localStorage.getItem("token") }
    let user = await axios.get(`${APIUrl}/getContacts`, { headers })
    user.data.sort(compare)
    // console.log(user.data)
    setContact(user?.data)
  }

  const deleteUser = async (selectContact) => {
    const headers = { "Authorization": localStorage.getItem("token") }
    await axios.delete(`${APIUrl}/del/${selectContact}`, { headers }) //user

    settick(false)
    getData();

  }
  return (
    <ContactContext.Provider value={{ contact, getData, deleteUser, tick, settick, setContact }}>
      {children}
    </ContactContext.Provider>
  )
}
export default ContactContext;