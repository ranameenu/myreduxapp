import React from 'react';

const User = (props) => {
  const { id, fName, lName, age } = props.user;
  return (
    <tr>
      <td>{id}</td>
      <td>{fName}</td>
      <td>{lName}</td>
      <td>{age}</td>
      <td>
        <a href="/#" className="btn btn-danger btn-sm">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default User;
