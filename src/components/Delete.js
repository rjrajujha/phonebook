import Deleteicon from '../assests/images/delete.png';
// import Downarrow from '../assests/images/downarrow.png'
import styled from 'styled-components';
import { useContext, useState } from 'react';
import deleteIcon from "../assests/images/delete.png"
import check from "../assests/images/Check.png";
// import axios from 'axios';
import ContactContext from '../context/ContactContext';

function Delete({ selectContact }) {
  const [state, setState] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const { deleteUser, settick } = useContext(ContactContext)

  return (
    <>
      <Container className='flex a-center j-center gap' onClick={() => { setState(!state) }}>
        <div ><img src={Deleteicon} alt='delete'></img></div>
        <div>Delete</div>
      </Container>

      <Container2 className="flex column a-center j-center gap">
        {state && <Dialog>
          <div id="delete-file" className="flex column a-center j-center gap">
            <div id="delete-image" className="flex a-center j-center">
              <img src={deleteIcon} />
            </div>
            <p style={{ "fontSize": "24px" }}>Delete Contact</p>
            <p style={{ "fontSize": "16px", "color": "#2DA5FC", }}>Sure you want to delete this Contact?</p>
            <div className='flex a-center j-center' id="delete-confirm">
              <button onClick={() => { setState(false) }}>Cancel</button>
              <p onClick={() => {

                deleteUser(selectContact)
                setState(false)
              }}>OK</p>
            </div>
          </div>
        </Dialog>}
        {deleted && <Dialog className='flex column j-center a-center'>
          <div id="delete-file" className="flex column a-center j-center gap">
            <div id="delete-image" className="flex a-center j-center">
              <img src={check} />
            </div>
            <p style={{ "fontSize": "24px" }}>Deleted Contact</p>
          </div>
        </Dialog>}
      </Container2>
    </>

  );
}

export default Delete;
const Container = styled.div`
cursor:pointer;
position: absolute;
width: 169px;
height: 40px;
left:50%;
top:2%;

background: #FFFFFF;
box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
border-radius: 10px;

`

const Container2 = styled.div`
#delete-file{
  height:80%;
  width:100%;
  // background:red;

}
#delete-image{
  height:45px;
  width:45px;
  border-radius:50%;
  background:#2DA5FC 50%;
}
#delete-confirm{
  width:100%;
  // height:20%;
  // background:Red;
}
#delete-confirm>button{
  width:30%; 
  height:2rem;
  background:#2DA5FC;
  cursor:pointer;
  border:0px;
  border-radius:10px;
  font-size:18px;
  margin-right:10px;
}
#delete-confirm>p{
  font-size:19px;
  font-weight:600;
  color:#1F2633;
  cursor:pointer  
}

`

const Dialog = styled.div`
position: absolute;
width: 307px;
height: 290px;
left: 35%;
top: 100%;
background: #ffffff;
border-radius: 10px;
border: 2px solid black;
`