import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
   // text="new text";  wrong Way to change the State
  //  setText("new text");        // Correct Way to change the State


  // Event Handling 
  const handleOnClick = ()=> {
    // console.log("Uppercase was Clicked" + text);
    let newText= text.toUpperCase();
    setText(newText)
  }
  const handleUpClick = ()=> {
    let newText1= text.toLowerCase();
    setText(newText1)
  }
  const handleClearClick = ()=> {
    let newText1= (' ');
    setText(newText1)
  }
  const handleOnChange = (event)=> {
    console.log("On Change");
    setText(event.target.value);
  }
  const handleCopy= () =>{
    console.log("I am A Copy of text")
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

 // Remove Extra Spaces
 const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
 }

 const redirectToJira = ()=>{
    alert("You Have Clicked")

 }
 const refreshButton= () =>{
    window.location.reload(true);
 }

const navigateToLink= () =>{
    console.log();
    
}

  return (
    <div className='container' style={{color: props.mode==='dark'?'white':'grey'}}>
                {/* <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div> */}
                
                <h1>{props.heading}</h1> 
                <div class="mb-3">  
                <label for="myBox" class="form-label">Example textarea</label>
                <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'042743'}} id="myBox" rows="8"></textarea>
                </div>

                <button className= "btn btn-primary mx-1" onClick={handleOnClick}>Convert to Uppercase </button>
                <button className= "btn btn-primary mx-1" onClick={handleUpClick}>Convert to Lowercase </button>
                <button className= "btn btn-primary mx-1" onClick={handleClearClick}>Clear Text </button>
                <button className= "btn btn-primary mx-1" onClick={handleCopy}>Copy Text </button>
                <button className= "btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className= "btn btn-primary mx-1" onClick={redirectToJira}>Redirect To Jira Site</button>
                <button className= "btn btn-primary mx-1" onClick={refreshButton}>Refresh Button</button>
                <button className= "btn btn-primary mx-1" onClick={navigateToLink}>NavigateToLink</button>
               
                
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text summary</h1>
        
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes required to read this Content</p>        
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    
    </div>
  )
}
