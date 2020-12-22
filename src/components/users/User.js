import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to={`/edit/${id}`} className="btn btn-secondary btn-sm">
          Edit
        </Link>{' '}
        <button className="btn btn-danger btn-sm" onClick={onClick}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
