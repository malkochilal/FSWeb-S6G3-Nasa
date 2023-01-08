import React from 'react';
import styled from "styled-components";

const SCinput=styled.input`
font-size:30px;
margin:20px 0;
background-color:grey;
color:white
`





export default function Tarih(props){
    const {changer}=props;
    return(
        <SCinput type="date" onChange={(event)=>changer(event.target.value)}/>
    )

}