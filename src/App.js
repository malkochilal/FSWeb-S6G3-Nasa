import React, {useState,useEffect} from "react";
import {dummyData }  from "./dummyData";
import "./App.css";
import axios from 'axios';
import Nasa from './Nasa';

function App() {
  const[tarih,setTarih]=useState("2022-05-05");
  const[data,setData]=useState(dummyData);


  
  useEffect(()=>{
   
    axios 
    .get("https://api.nasa.gov/planetary/apod?api_key=CtGoPUGFfwFKd8GTwotKPb6V5trTeIvkqAGeKeku&date="+tarih)
    .then((response) => setData(response.data));
    
  }
  ,[tarih])

function dateChanger(days){
  let gun=new Date(tarih);
  gun.setDate(gun.getDate() + days);
  let gercekTarih = `${gun.getFullYear()}-${gun.getMonth()+1}-${gun.getDate()}`

  setTarih(gercekTarih)
}



  return (
    <div className="App">
      <Nasa data ={data} dateChanger={dateChanger}/>
     
    </div>
  );
}

export default App;
