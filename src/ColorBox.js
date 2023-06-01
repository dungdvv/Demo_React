import React from "react";
import { ReactPropTypes } from "react";
const ColorBox = (props) =>{
  const { color } = props
  return (
    <div className="box" style={{backgroundColor: color }}>
      <h1> Hello World! </h1>
    </div>
  )
}


export default ColorBox;