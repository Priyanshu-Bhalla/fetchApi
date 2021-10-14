import React from 'react'
import "../css/Form.css"
import { useState } from 'react'
export default function Form() {
   const [text, setText] = useState();

//   const handleonChange =(event)=>{
//     console.log( event);
//     console.log(event.target);
//     console.log(event.target.value)
// setValue(event.target.value);

//   }

const handleonChange = (e)=>{
  setText(e.target.value);
}
return (
        <div>
         
 <form>
  {/* <label htmlFor="my_input">FirstName:</label> */}
  <input type="text"  name="my_input" id="my_input" value={text} onChange={handleonChange}/>
</form> 
  <h2>Text Preview</h2>
<div className="preview" style={{border:"1px solid black",height:"100px",marginTop:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
  <p >{text}</p>
</div>
        </div>
    )
}
