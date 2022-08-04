import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
 

 const changeHandler = (event)=>{
  setText(event.target.value);
 }
 const upCase = ()=>{
  if(text==""){
    alert('kindly write your text in your textFirst');
  }else{
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("Your text is converted","success");
  }



 }
 const loCase = ()=>{
  if(text==""){
    alert('kindly write your text in your textFirst')
  }else{
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Your text is converted","success");
  }

 }
 const delCase = ()=>{
  if(text==""){
    alert('kindly write your text in your textFirst');
  }
  else{
    let newText ="";
    setText(newText);
    props.showAlert("Thanks for Using","success");
  }
 }
 const SenCase = ()=>{
  if(text==""){
    alert('kindly write your text in your textFirst')
  }
  else{
    let newText = text.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
    setText(newText);
    props.showAlert("Your text is converted","success");
  }

 }
 const copyCase = ()=>{
  if(text==""){
    alert('Write your text');
  }
  else{
    navigator.clipboard.writeText(text);
    props.showAlert("Your text is copied","success");
  }
 
}

return (
<>
<div className="container">
<div className="form-floating my-3" style={{color: props.mode==='light'? 'black':'White'}}>
<h1>Try Textcode-Word Counter,character Counter,Remove Extra Spaces</h1>
  <textarea className="form-control" placeholder="Leave a comment here"  rows="10" col="10"  id="box" style={{backgroundColor: props.mode==='light'? 'white':'gray', color: props.mode==='light'? 'black':'White',height: '400px'}} value={text} onChange={changeHandler}></textarea>
</div>
<button className='btn btn-primary btn-sm mx-2 my-1' id='btn' onClick={upCase}>Convert Text To the Upper Case</button>
<button className='btn btn-primary btn-sm mx-2 my-1' id='btn' onClick={loCase}>Convert Text To the Lower Case</button>
<button className='btn btn-primary btn-sm mx-2 my-1' id='btn1' onClick={SenCase}>Sentance Case</button>
<button className='btn btn-primary btn-sm mx-2 my-1' id='btn2' onClick={delCase}>Delete</button>
<button className='btn btn-primary btn-sm mx-2 my-1' id='btn3' onClick={copyCase}>Copy to Clipboard</button>
<div style={{color: props.mode==='light'? 'black':'White'}}>
<h3 className='my-2'>Total Words is {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} and Total character is{text.split.length}</h3>
<h3>preview</h3>
<p>{text.length>0?text:"Write something to preview"}</p>
</div>
</div>
</>
  )
  }
