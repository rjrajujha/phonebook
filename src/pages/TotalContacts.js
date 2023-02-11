import "./totalContact.css";
import { useContext, useEffect, useState } from "react";
import Buttons from "../components/button";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Vector from "../assests/images/Vector.jpg";
import dashboard from "../assests/images/dashboard.png";
import line from "../assests/images/line.png";
import logout from "../assests/images/logout.png";
import profile from "../assests/images/profile.png";
import search from "../assests/images/search.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Edit from '../assests/images/Layer 42.png'
import Delete from '../assests/images/Layer 17.png'
import "./totalContact.css";
import ContactContext from "../context/ContactContext";

const APIUrl = process.env.REACT_APP_APIURL;

const TotalContact = () => {
  const { contact, getData, setContact, deleteUser } = useContext(ContactContext)
  const navigate = useNavigate();
  const location = useLocation();

  const [dim, setDim] = useState(false)
  const [selectcontact, setselectContact] = useState([]);

  const [admin, setAdmin] = useState();

  if (!localStorage.getItem("token")) {
    console.log(555);
    navigate("/");
  }
  if (location.pathname === "/") {
    navigate("/TotalContacts");
  }

  useEffect(() => {
    getData();
    getAdmin()
    setDim(false)
  }, [])


  const handleContact = (e, itemId) => {
    const { checked } = e.target;
    if (checked) {
      setselectContact([...selectcontact, itemId])
    } else {
      setselectContact(selectcontact.filter(e => e !== itemId))
    }
    console.log(selectcontact)
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/');
    alert("Logged Out");
    document.location.reload()
  }
  const handleButton = () => {
    setDim(!dim);
  }

  const handleSearch = async (email, e) => {
    // console.log(email)
    const headers = { "Authorization": localStorage.getItem("token") }
    if (e.key !== "") {
      const user = await axios.get(`${APIUrl}/search/${email}`, { headers })
      setContact(user?.data)
    }
  }
  const handleResetSearch = (e) => {
    if (e === "") {
      getData();
    }
  }
  const getAdmin = async () => {
    const headers = { "Authorization": localStorage.getItem("token") }
    const admins = await axios.get(`${APIUrl}/getAdmin`, { headers })
    setAdmin(admins)
  }

  return (
    <>
      <div className={`total-container `}>
        <div id="container-left">
          <div id="total-sidebar">
            <div id="sidebar-left" className="gap">
              <h2 style={{ color: "#2DA5FC", fontSize: "34px" }}>Logo</h2>
              <div id="dashboard" className="gap">
                <img src={Vector} alt="dashboard"></img>
                <p style={{ "margin": "10px", "fontSize": "20px" }}>DashBoard</p>
              </div>
              <div id="total-contacts" className="gap">
                <img src={dashboard} alt="dashboard"></img>
                <p style={{ "marginTop": "14px", "fontSize": "20px" }}>TotalContact</p>
                <img src={line} alt="TotalContact"></img>
              </div>
            </div>
            <div id="sidebar-right">
              <div id="logout" className="gap" onClick={handleLogout} style={{ "cursor": "pointer" }}>
                <img src={logout} alt="Logout"></img>
                <p style={{ "margin": "10px" }}>Logout</p>
              </div>
            </div>
          </div>
        </div>
        <div id="container-right">
          <div id="header">
            <div id="header-left">
              <h2>Total Contact</h2>
              <div id="search-container">
                <img src={search} alt="search"></img>
                <input
                  id="search"
                  type="text"
                  placeholder="Search by email...."
                  onChange={(e) => { handleResetSearch(e.target.value) }}
                  onKeyDown={(e) => { handleSearch(e.target.value, e) }}
                ></input>
              </div>
            </div>
            <div id="header-right">
              <div id="logo-left">
                <img src={profile} alt="profile"></img>
              </div>
              <div id="logo-right">
                <h2>{admin?.data}</h2>
                <p>Super Admin</p>
              </div>
            </div>
          </div>

          <div id="main-table">
            <table className="table ">
              <thead className="table-primary">
                <tr>
                  <th scope="col">#</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Company</th>
                  <th>Industry</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Country</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

                {contact && contact.map((item, id) => {
                  return (
                    <tr key={id}>
                      <td><input type="checkbox" onClick={(e) => { handleContact(e, item?._id) }} /></td>
                      <td>{contact && item?.name}</td>
                      <td>{contact && item?.designation}</td>
                      <td>{contact && item?.company}</td>
                      <td>{contact && item?.industry}</td>

                      <td id="tooltip " data-toggle="tooltip" data-placement="top" title={contact && item?.email} >{contact && item?.email}</td>
                      <td>{contact && item?.phone}</td>
                      <td>{contact && item?.country}</td>
                      <td>
                        <img src={Delete} onClick={(e) => deleteUser(item._id)} style={{ "marginRight": "20px" }} alt="delete" />
                        <img src={Edit} alt="edit" />
                      </td>

                    </tr>
                  )
                })}

              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div onClick={() => { handleButton() }}>
        <Buttons selectContact={selectcontact} />
      </div>
    </>
  );
};
export default TotalContact;
