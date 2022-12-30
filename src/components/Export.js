import {useState} from 'react'
import axios from 'axios';
import Exporticon from '../assests/images/export.png'
import styled from 'styled-components';
const Export = ()=>{
    // const [file,setFile]=useState()
    // const handleSubmit=async (e)=>{
    //     e.preventDefault();
    //     let data = new FormData();
    //     data.append('contact',file[0])
    //     const res=axios.post("http://localhost:3004/upload",data)
    //     window.location.reload(false)
    //     console.log(file)
       
    
    return(
        <Container className='flex a-center j-center gap'>
        {/* <form method="POST" >
            <input type="file" onChange={(e)=>{setFile(e.target.files)}}/>
            <button onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form> */}
        <div><img src={Exporticon} alt="icon"></img></div>
        <div>Export</div>

        </Container>
    )
}
export default Export;
const Container=styled.div`
position: absolute;
width: 169px;
height: 40px;
left:82%;
top:2%;

background: #FFFFFF;
box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
border-radius: 10px;
`

