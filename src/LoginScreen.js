import React from "react";
import { useState } from "react";
import HomeScreen from "./HomeScreen";


const LoginScreen = () => {
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    <HomeScreen name="name" dob="dob" />;
  }

  return (
    <div className="container">
      <h1>Student Login</h1>
      <input
        type="text"
        name="name"
        placeholder="Enter name of student"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control w-25"
      />
      <input
        type="text"
        name="dob"
        placeholder="Enter DOB in dd-mm-yyyy format"
        value={dob}
        onChange={(e) => setDOB(e.target.value)}
        className="form-control w-25"
      />
      <button className="btn btn-success" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default LoginScreen;
