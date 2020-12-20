import React from 'react';

const User = (props) => {
  const { id, fName, lName, age } = props.user;

  const onClick = () => {
    props.onDelete(id);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{fName}</td>
      <td>{lName}</td>
      <td>{age}</td>
      <td>
        <a href="/edituser" className="href"></a>
        <button className="btn btn-secondary btn-sm mr-2">Update</button>

        <button className="btn btn-danger btn-sm" onClick={onClick}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
