/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { UsageState } from "webpack";
// eslint-disable-next-line no-unused-vars
import { showAlert } from "../utils/showAlert";


const Form = () => {

    // eslint-disable-next-line no-undef
    const [state_1, setState_1] = useState("");
    // eslint-disable-next-line no-undef
    const [state_2, setState_2] = useState("");
  
    // eslint-disable-next-line no-undef, no-unused-vars
    const [stateMessage, setMessage] = useState("");
  
    const handleChange_1 = (e) => {
      setState_1(e.target.value);
    };
  
    const handleChange_2 = (e) => {
      setState_2(e.target.value);
    };
  
  
    const handleSubmit = (e) => {
  
      e.preventDefault()
  
      let nameValidation = /^.{5,}$/.test(state_1)
    
      let emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(state_2)
  
      if (nameValidation && emailValidation) {
        showAlert(`Thank you ${state_1}, We will be contacting you by mail: ${state_2}`)
        console.log("Succesful");
      } else {
        showAlert("Please check your information again")
        console.error("Unsuccesful");
      }
    }
  
    return (
      <div className = 'Form__div'>
        <form className = 'div__form'>
          <div>
            <input onChange = {handleChange_1} className = {`${state_1 ? "has-value" : ""}`} id = "name" type="text" value={state_1} placeholder="Your Name"
                    required/>
          </div>
  
          <div>
            <input onChange = {handleChange_2} className = {`${state_2 ? "has-value" : ""}`} id = "email" type="email" placeholder="Your Email"
                    required/>
          </div>

          <button onClick = {handleSubmit} typeof= 'submit'>
            <div className = 'button__div'>
              Send
            </div>
          </button>
  
          <p>{stateMessage}</p>
        </form>
  
      </div>
    )
  
    
  
  }
  
  export {Form};