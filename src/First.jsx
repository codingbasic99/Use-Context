import React from "react";
import Second from "./Second";



export default function First(){
  return(
    <div style={{border: '1px solid black', padding:"30px"}}>
    <h2>first</h2>
    <Second/>
    </div>
  );
}