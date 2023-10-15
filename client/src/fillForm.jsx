import React from "react";

const FillFormPage = () => {
  return (
    <div>
      <h1>Please Fill the Form</h1>
      <form>
        <label for="firstName">First name: </label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          // value= {}
          // onChange={}
          required
        />
        <br />
        <label for="lastName">Last name: </label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          // value= {}
          // onChange={}
          required
        />
        <br />
        <label for="phoneNumber">Phone Number: </label>
        <input
          type="number"
          name="phoneNumber"
          placeholder="Phone Number"
          // value= {}
          // onChange={}
          required
        />
        <br />
        <label for="jobTitle">Job Title: </label>
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          // value= {}
          // onChange={}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FillFormPage;
