import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const EditUser = (props) => {
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [age, setage] = useState('');

  // create ref variable to update
  const fNameRef = useRef();
  const lNameRef = useRef();
  const ageRef = useRef();

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

  const onSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      fName: fNameRef.current.value,
      lName: lNameRef.current.value,
      age: ageRef.current.value,
    };

    await axios.put(
      `http://localhost:5000/users/${props.match.params.id}`,
      updatedUser
    );
    props.history.push('/');
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
            className="form-control"
            placeholder="Enter first name"
            defaultValue={fName}
            ref={fNameRef}
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
            ref={lNameRef}
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
            ref={ageRef}
          />
        </div>
        <button
          type="submit"
          value="update"
          className="btn btn-sm btn-success mt-4"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
