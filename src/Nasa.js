import React from 'react';
//import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap';
// const SCBaslik=styled.h1`
// font-size:50px;
// margin:20px 0;
// background-color:#282c34;
// color:white;
// letter-spacing:2px;
// padding:18px;
// `
// const SCmain=styled.div`
// display:flex;
// justify-content:space-between`


function Nasa(props){
    const{data,dateChanger}=props;


    return(
      <><div className='date-content'>
        <Button color="primary" onClick={()=>dateChanger(-1)}>Azalt</Button>
        <p>{data.date}</p>
        <Button color="danger" onClick={()=>dateChanger(1)}>Arttır</Button>
        </div>
        <h1>{data.title}</h1>
        
        <img src={data.url} alt={data.title}/>
        <p>{data.explanation}</p>
        <p>{data.copyright}</p></>
    
        
    )

}
export default Nasa;