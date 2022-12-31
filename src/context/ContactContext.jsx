import { createContext, useState } from "react";
import axios from "axios";
const ContactContext = createContext();
const APIUrl = "https://contactsapi-qt0r.onrender.com"

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
    setContact(user?.data)
  }
  const deleteUser = async (selectContact) => {
    console.log(selectContact)
    const headers = { "Authorization": localStorage.getItem("token") }
    const user = await axios.delete(`${APIUrl}/del/${selectContact}`, { headers })

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