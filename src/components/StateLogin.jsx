import { useRef, useState } from "react";

export default function StateLogin() {

  const [emailisIvalid, setEmailIsInvalid] = useState(false);
 
  const refPassword = useRef();
  const refEmail = useRef();
 
  function handleSubmit(e) {
    e.preventDefault();

    const enterPassword= refPassword.current.value;
    const enterEmail= refEmail.current.value;

   const emailIsValid = enterEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return
    } 

    setEmailIsInvalid(false);

    console.log("setting a http request");
    
  }


  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            ref={refEmail}
          />
          <div className="control-error">{emailisIvalid && "Invalid email"}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={refPassword}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
