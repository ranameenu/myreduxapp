import React, { useState, useEffect } from 'react';
import User from './User';
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
      <div className="d-flex justify-content-between">
        <h1>All Users</h1>
        <div className="mt-2">
          <a href="/add" className="btn btn-primary">
            Add User
          </a>
        </div>
      </div>
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
            users.map((user) => <User key={user.id} user={user} />)
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
