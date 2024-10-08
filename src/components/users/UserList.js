import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./UserList.css";
const UserList = ({ users, onDeleteClick }) => (
  <table className="table user-cantainer">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, UserIndex) => {
        return (
          <tr key={UserIndex}>
            <td>{UserIndex + 1}</td>
            <td>
              <Link to={"/user/" + user?.userId}>{user.username}</Link>
            </td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.role}</td>
            <tr>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(user)}
              >
                Delete
              </button>
            </tr>
          </tr>
        );
      })}
    </tbody>
  </table>
);

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default UserList;
