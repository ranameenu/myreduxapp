import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    const res = await axios.get(`http://localhost:5000/users`);
    setUsers(res.data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users !== null ? (
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.fName}</td>
                <td>{user.lName}</td>
                <td>{user.age}</td>
                <td>
                  <a href="/#" className="btn btn-danger btn-sm">
                    Delete
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No User Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
