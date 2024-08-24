import React ,{useState}from 'react'

export default function Textform(props) {
  const [text, settext] = useState("enter the text");
  return (
    <>
      <div>
 <h1>{props.heading}</h1>       
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={(event)=>{
settext(event.target.value);
  }}id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick= {()=>{
  let newText= text.toUpperCase();
  settext(newText); 
  props.showAlert("Converted to UpperCase!" ,"success");
}}> Convert to uppercase</button>
<button className="btn btn-primary mx-2"onClick= {()=>{
  let newText= text.toLowerCase();
  settext(newText); 
  props.showAlert("Converted to LowerCase!" ,"success");
}}> Convert to lowercase</button>

<button className="btn btn-primary mx-2"onClick= {()=>{
  let newText="  ";
  settext(newText);
  props.showAlert("Text Cleared!","success");
}}>ClearText</button>

    </div>
    <div className="container">
      <h1>Your Summary</h1>
      <p> {text.split ( " " ).length } words and {text.length} character</p>
    </div>
    </>
    )
    
  };
