import React,{useState}  from 'react'

export default function Textforms({heading,mode,showAlert}) {
const HandleUpClick = () =>{
console.log('button is clicked' + text)
// console.log(setText(text))
let newText = text.toUpperCase()
setText(newText)
showAlert('Converted to Upper Case' ,'success')

}

const HandleLowClick = () =>{
console.log('button is clicked' + text)
// console.log(setText(text))
let newText = text.toLowerCase()
setText(newText)
showAlert('Converted to Lower Case' ,'success')

}
const clear = () =>{
console.log('button is clicked' + text)
// console.log(setText(text))
let newText = ''
setText(newText)
showAlert('Cleared Text ' ,'success')

}
const handleSpaces =()=>{
  let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    showAlert('Spaces cleared' ,'success')

}

const HandleOnChange = (event) =>{
console.log('text is change')
setText(event.target.value)
}

 
const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

    const [text, setText] = useState('');
  return (
<>
    <div className='container' style={{color : mode === 'dark' ? 'white' : 'black'}}>
        <h1>{heading}</h1>
       <div className="mb-3">
      <textarea className="form-control" value={text} style={{backgroundColor : mode === 'dark' ? 'grey' : 'white' , color : mode === 'dark' ? 'white' : 'black'}} onChange={HandleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
       </div>
<button type="button" className='mx-2' onClick={HandleUpClick}>Convert To UpperCase</button>
<button type="button" onClick={HandleLowClick}>Convert To LowerCase</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
<button type="submit" onClick={clear} className=" mx-2 my-2">Clear Text</button>
<button type="submit" onClick={handleSpaces} className=" mx-2 my-2">Clear Spaces</button>
    </div>

    <div className="container" style={{color : mode === 'dark' ? 'white' : 'black'}}>
        <h1 className='my-2'>Your Text Summary</h1>
        <p> { text==="" ?0 :text.trim().split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter text in the above Text Area to preview here '} </p>
    </div>
    </>
  )
}
