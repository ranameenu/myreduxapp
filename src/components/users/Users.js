import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import User from './User';
import { getUsers } from '../../actions/userAction';

const Users = ({ users, getUsers }) => {
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
      <table className="table table-striped mt-3">
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

const mapStateToProps = (state) => ({
  users: state.user.users,
});

export default connect(mapStateToProps, { getUsers })(Users);
