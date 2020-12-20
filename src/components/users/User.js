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
        <a className="btn btn-danger btn-sm">
          <button className="btn btn-danger btn-sm" onClick={onClick}>
            Delete
          </button>
        </a>
      </td>
    </tr>
  );
};

export default User;
