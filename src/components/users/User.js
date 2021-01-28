import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUser } from '../../actions/userAction';

const User = ({ user, deleteUser }) => {
  const { id, fName, lName, age } = user;

  const onClick = () => {
    deleteUser(id);
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

export default connect(null, { deleteUser })(User);
