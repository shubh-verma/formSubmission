import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegistrationPage = () => {
  const [registrationData, setRegistrationData] = useState({
    username: "",
    password: "",
  });

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;

    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/register",
        registrationData
      );
      // console.log(registrationData);
      const { success, message } = response.data;
      if (success) {
        console.log("Register Successfully");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.error("Registration error", error);
    }
    setRegistrationData({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Registration page</h1>
      <form onSubmit={handleRegistrationSubmit}>
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={registrationData.username}
          onChange={handleRegistrationChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={registrationData.password}
          onChange={handleRegistrationChange}
          required
        />
        <button type="submit">Register</button>
        <p>
          Already registered? <Link to="/login">Login Here</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default RegistrationPage;
