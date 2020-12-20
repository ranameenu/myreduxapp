import React, { useState } from 'react';
import axios from 'axios';

const EditUser = (props) => {
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [age, setage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    if (fName !== '' && lName !== '' && age !== '') {
      const newUser = {
        fName,
        lName,
        age,
      };

      // Post in Server
      await axios.post(`http://localhost:5000/users`, newUser);

      // Reset State
      setfName('');
      setlName('');
      setage('');

      // Redirect
      props.history.push('/');
    }
  };

  return (
    <div className="w-50">
      <div className="d-flex justify-content-between">
        <h2>Add New User</h2>
        <div>
          <a href="/" className="btn btn-dark btn-sm">
            <i className="fas fa-arrow-left"></i> Back
          </a>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            name="fName"
            value={fName}
            className="form-control"
            placeholder="Enter first name"
            onChange={(e) => setfName(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            name="lName"
            value={lName}
            className="form-control"
            placeholder="Enter last name"
            onChange={(e) => setlName(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="fName">Age</label>
          <input
            type="Number"
            name="age"
            value={age}
            className="form-control"
            placeholder="age"
            onChange={(e) => setage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditUser;
