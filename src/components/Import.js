import Importicon from "../assests/images/import.png";
import styled from "styled-components";
import check from "../assests/images/Check.png";
import fileicon from "../assests/images/file.png"
import { useContext, useState } from "react";
import axios from "axios";
import ContactContext from "../context/ContactContext";

const APIUrl = "https://contactsapi-qt0r.onrender.com";

function Import() {
  const { getData } = useContext(ContactContext)
  const [state, setState] = useState(false);
  const [uploaded, setuploaded] = useState(false);
  const handleState = () => {
    setState(!state);
  };

  const [file, setFile] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = { "Authorization": localStorage.getItem("token") }
    let data = new FormData();

    data.append("contact", file[0]);

    // const res 
    axios.post(`${APIUrl}/upload`, data, { headers });
    setState(false);
    setuploaded(true);

    setTimeout(() => {
      setuploaded(false);
      getData();
    }, 2000)

  };

  return (
    <>
      <Container className="flex  a-center j-center gap" onClick={handleState}>
        <div>
          <img src={Importicon} alt="icon"></img>
        </div>
        <div>Import</div>
      </Container>
      {/* {console.log(state)} */}

      <Container2>
        {state && (
          <Dialog className="flex column a-center j-center gap">

            <div id="import-file" className="flex column a-center j-around gap">
              <div id="import-image" className="flex a-center j-center">
                <img src={fileicon} alt='fileicon' />
              </div>
              <p style={{ "fontSize": "24px" }}>Import File</p>
              <input id="file" type="file" onChange={(e) => {
                setFile(e.target.files);
              }}
              />
              <button id="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
            </div>
          </Dialog>
        )}

        {uploaded && (
          <Dialog className="flex column a-center j-center gap">
            <div id="import-icons" className="flex column a-center  gap">
              <div id="icon-background" >
                <img src={check} alt='check' />
              </div>
              <div id="task-completed">
                <p style={{ "color": "#1F2633", "fontWeight": "700", "fontSize": "18px" }}>Import completed</p>
                <br />
                <p style={{ "color": "#2DA5FC", "fontWeight": "700", "fontSize": "18px", "padding-left": "14px" }}>Csv is Uploaded </p>
              </div>
            </div>
          </Dialog>
        )}
      </Container2>
    </>
  );
}

export default Import;
const Container = styled.div`
  cursor: pointer;
  position: absolute;
  width: 169px;
  height: 40px;
  left: 66%;
  top: 2%;

  background: #ffffff;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;


`;
const Container2 = styled.div`
  #import-icons {
    width: 100%;
    height: 100%;
    // justify-content:
  }
  #icon-background{
    position:absolute;
    top:20%;
    height:40%;
  }
  #task-completed{
    position:absolute;  
    top:40%;
    // background-color:Red;
 
  }

  #import-file{
    height:70%;
    width:100%;
    // background:red;
 
  }
  #import-image{
    height:45px;
    width:45px;
    border-radius:50%;
    background:#2DA5FC 50%;
  }
  #import-image>img{
    height:50%;
    width:50%;
  }
  #submit{
    background:#2DA5FC;
    border:0px;
    width:30%;
    height:20%;
    border-radius:10px;
    cursor:pointer;
  }
`;
const Dialog = styled.div`
position: absolute;
width: 307px;
height: 290px;
left: 35%;
top: 100%;
background: #ffffff;
border-radius: 10px;
border: 2px solid black;
`;
