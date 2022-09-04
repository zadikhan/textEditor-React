import React,{useState} from 'react'
export default function Textform(props) {

    
const [text, setText] = useState('');
const handleUpClick=()=>{
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
}

const handleLoClick=()=>{
  let newText= text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to lowerCase","success")
}

const handleClearClick=()=>{
  let newText = "";
  setText(newText);
  props.showAlert("Text has been Cleared","success")
}
const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
}
const handleExtraSpaces=()=>{
  let newText= text.split(/[ ]+/);
   setText(newText.join(" "))  
   props.showAlert("Extra Space has been added","success")
}

  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'light',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox"  rows="8"></textarea>
    </div>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
    
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
    
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Spaces</button>
    
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <p> {text.split(" ").length} words and {text.length}characters</p>
<p>{0.008* text.split(" ").length} Minutes Read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"enter something to get preview here "}</p>
    </div>
    </>
  )
}
