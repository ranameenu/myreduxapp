import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUser = (props) => {
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [age, setage] = useState('');

  const getUser = async () => {
    const res = await axios.get(
      `http://localhost:5000/users/${props.match.params.id}`
    );
    setfName(res.data.fName);
    setlName(res.data.lName);
    setage(res.data.age);
  };

  useEffect(() => {
    getUser();
  }, []);

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

      <form>
        <div className="form-group mt-3">
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            name="fName"
            className="form-control"
            placeholder="Enter first name"
            defaultValue={fName}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            name="lName"
            className="form-control"
            placeholder="Enter last name"
            defaultValue={lName}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="fName">Age</label>
          <input
            type="Number"
            name="age"
            className="form-control"
            placeholder="age"
            defaultValue={age}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success mt-4">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
