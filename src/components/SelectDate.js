import Date from '../assests/images/date.png';
// import Downarrow from '../assests/images/downarrow.png'
import styled from "styled-components";
function Selectdate() {
  return (
    <Container className="flex a-center j-center gap">
      <div><img src={Date} alt="date"></img></div>
      <div><input type='date'></input></div>
      {/* <div><img src={Downarrow} alt='arrow' onClick={displayDate}></img></div> */}
    </Container>
  );
}

export default Selectdate;

const Container = styled.div`
position: absolute;
width: 169px;
height: 40px;
left:2%;
top:2%;
background: #FFFFFF;
box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
border-radius: 10px;

input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
    background-image: url('../assests/images/downarrow.png') ;
   
}
input[type="date"]{
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
}   
`