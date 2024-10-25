import { useRef } from "react";

export default function StateLogin() {
 
  const refPassword = useRef();
  const refEmail = useRef();
 
  function handleSubmit(e) {
    e.preventDefault();

    const password= refPassword.current.value
    const email= refEmail.current.value
    console.log(password, email);
  }


  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={refEmail}
          />
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
