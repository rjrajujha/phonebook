import styled from "styled-components";
import filter from '../assests/images/filter.png';
import line from '../assests/images/lineblack.png';
import downarrow from '../assests/images/downarrow.png';
function Filter() {
  return (
    <Filters className="flex a-center j-center gap">
      <div><img src={filter} alt="filter"></img></div>
      <div>Filter</div>
      <div><img src={line} alt='line'></img></div>
      <div><img src={downarrow} alt='arror'></img></div>

    </Filters>
  );
}

export default Filter;
const Filters = styled.div`
position: absolute;
width: 169px;
height: 40px;
left:18%;
top:2%;

background: #FFFFFF;
box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
border-radius: 10px;
`