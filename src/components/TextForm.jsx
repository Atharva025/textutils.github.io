import React, { useState } from 'react'

export default function TextForm(props) {

    const convertUpCase = () => {
        let uppercase_text = text.toUpperCase();
        setText(uppercase_text);
        props.showAlert("The Text has been Converted to Uppercase!" , "success");
    }

    const convertLowCase = () => {
        let lowercase_text = text.toLowerCase();
        setText(lowercase_text);
        props.showAlert("The Text has been Converted to Lowercase!" , "success");
    }
    const cleartext = () => {
        let cleartext = "";
        setText(cleartext);
        props.showAlert("The Text has been Cleared!" , "success");
    }

    const reversetext = () => {
        var rev_text = text.split("");

        var rev_arr = rev_text.reverse();

        var join_text = rev_arr.join("");

        setText(join_text);
        props.showAlert("The Text has been Reversed!" , "success");
    }

    const handleonChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (

        <>
            <div className="container" style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" style = {{backgroundColor : props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743'}} value={text} id="textbox" rows="10" onChange={handleonChange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={convertUpCase}>Convert To Uppercase</button> &nbsp;
                <button className="btn btn-primary" onClick={convertLowCase}>Convert To Lowercase</button> &nbsp;
                <button className="btn btn-primary" onClick={cleartext}>Clear Text-Area</button> &nbsp;
                <button className="btn btn-primary" onClick={reversetext}>Reverse The Text</button> &nbsp;
            </div>
            <div className="container my-3" style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1 className = {props.mode}>Your Words Summary</h1>
                <p>The above sentence has {text.length} characters and {text.split(" ").length} words</p>

                <h2>Preview of the Text</h2>
                <p>{text.length > 0 ? text : "Enter Something in the Textbox to Preview it here!"}</p>
            </div>
        </>




    )
}
