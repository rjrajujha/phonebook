import styled from "styled-components";
import Selectdate from './SelectDate';
import Filter from "./Filter";
import Delete from "./Delete";
import Import from "./Import";
import Export from "./Export";

function Buttons({ selectContact }) {
  return (
    <Container className="flex j-between">
      <div className="flex gap j-center a-center">
        <div><Selectdate /></div>
        <div><Filter /></div>
      </div>
      <div className="flex gap j-center center">
        <div><Delete selectContact={selectContact} /></div>
        <div><Import /></div>
        <div><Export /></div>
      </div>
    </Container>
  );
}

export default Buttons;
const Container = styled.div`
position: absolute;
width: 82%;
// background:red!important;
height:10%;
left: 18%;
top:13%;
padding:1rem;
background: #FFFFFF;
// border: 2px solid #EAEAEA;
`