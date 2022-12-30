import React from 'react'
import myPic from "../myPic"
export const About = () => {
  return (
    <div style={{paddingTop:"30px"}}>
    <div style={{display:"flex" ,alignItems:"center",justifyContent:"center",margnTop:"300px",width:"80%",margin:"auto",}}>
      <div style={{textAlign:"left"}}>
        <h1 style={{ fontFamily: "Times New Roman, Times, serif"}}> Hii</h1>
        <h1 style={{ fontFamily: "Times New Roman, Times, serif"}}> I am</h1>
        <h1 style={{ fontFamily: "Times New Roman, Times, serif"}}>VARUN JATAV</h1>
        <h5 style={{ fontFamily: "Lucida Console, Courier New, monospace"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam iure cum iusto tempore sit eligendi quaerat voluptates ratione autem asperiores odit quam officiis ad corporis nobis, dolorem sed quod voluptas.</h5>
      </div>
      <div>
        <img src={myPic} alt="myPic" style={{width:"400px" , borderRadius:"100%"}} />
      </div>
    </div>
    </div>
  )
}
