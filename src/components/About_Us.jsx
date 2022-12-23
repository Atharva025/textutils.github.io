import React from "react";
import { useState } from "react";

export default function About_Us() {

  const [myStyle , setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [buttonText, setbuttonText] = useState("Enable Dark Mode");

  const enableDark = () => {
    if(myStyle.color == 'black'){
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setbuttonText("Enable Light Mode");
    }
    else{
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setbuttonText("Enable Dark Mode");
    }
  }

  return (
    <div className="container" style={myStyle}>
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Convert To UpperCase
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              The Convert to Uppercase Button converts the entire entered text in the Text-Area Field to Uppercase Characters.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Convert To LowerCase
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            The Convert to Lowercase Button converts the entire entered text in the Text-Area Field to Lowercase Characters.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Clear Text-Area
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              The Clear TextArea Button removes the entire text from the Text-Field Area. Reloading the Page also clears the entire text from the Text-Field Area. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Reverse The Text
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              The Reverse Text Button Reverse the entire Characters Entered in the Text-Field Area. 
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <button onClick = {enableDark} className="btn btn-primary my-3">{buttonText}</button>
      </div>
    </div>
  );
}
