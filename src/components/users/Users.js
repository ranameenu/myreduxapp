import React, { useState } from 'react';

const Users = () => {
  const [Users, setUsers] = useState([
    {
      id: 1,
      fName: 'meenu',
      lName: 'rana',
      age: '27',
    },
    {
      id: 2,
      fName: 'teena',
      lName: 'rana',
      age: '25',
    },
    {
      id: 3,
      fName: 'reena',
      lName: 'rana',
      age: '29',
    },
  ]);
  return (
    <div>
      <h1>Users</h1>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <td>Id</td>
            <td>fName</td>
            <td>lName</td>
            <td>age</td>
            <td>?</td>
          </tr>
        </thead>
        <tbody>
          {Users !== null ? (
            Users.map((user, index) => (
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
            <h4>No User Found</h4>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
