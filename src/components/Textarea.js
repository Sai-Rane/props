import { React, useState } from "react";
import { Container } from "react-bootstrap";
import "./Textarea.css";

const Textarea = (props) => {
  const [text, setText] = useState("Enter text.....");

  const handleUpClick = () => {
    console.log("Button was clicked");
    let newText = text.toUpperCase();
    console.log("newText", newText);
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Button was clicked");
    let newText = text.toLowerCase();
    console.log("newText", newText);
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("text area handled");
    setText(event.target.value);
  };
  return (
    <>
      <Container>
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            id="myBox"
            rows="3"
            onChange={handleOnChange}
            value={text}
          ></textarea>
          <button className="btn btn-primary mt-2" onClick={handleUpClick}>
            {/* Arrow function in onClick can be written as: <button  onClick={  ()=>handleUpClick()  }/>  */}
            Click for Upper case
          </button>

          <button className="btn btn-primary mt-2" onClick={handleLoClick}>
            Click for Lower case
          </button>
        </div>
      </Container>
    </>
  );
};

export default Textarea;
