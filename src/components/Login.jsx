import { useState } from "react";
import Input from "./Input.jsx";

export default function Login() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailisValid = didEdit.email && !inputValue.email.includes("@");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputValue);
  }

  function handleInputChange(event) {
    setInputValue((prev) => ({
      ...prev,
      [event.name]: event.value,
    }));

    setDidEdit((prev) => ({
      ...prev,
      [event.name]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          label="Email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(e) => handleInputChange(e.target)}
          value={inputValue.email}
          />
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleInputChange(e.target)}
          value={inputValue.email}
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
