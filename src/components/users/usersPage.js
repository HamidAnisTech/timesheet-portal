import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";
import "./usersPage.css";
import * as userAction from "../../redux/actions/userActions";
import Spinner from "../common/Spinner";

const UsersPage = ({ users, getUsers, deleteUser }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (users.length === 0) {
      getUsers();
    }
  });

  const handleDeleteuser = async (user) => {
    console.log("delete user with id:", user.userId);
    toast.success("User Deleted");
    try {
      await deleteUser(user);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };
  const handleAddUser = () => {
    navigate("/user");
  };
  return (
    <div className="users-container">
      <h2>Users</h2>
      <div>
        {users.length === 0 ? (
          <Spinner />
        ) : (
          <>
            <button
              className="btn btn-primary add-user"
              onClick={handleAddUser}
            >
              Add user
            </button>

            <UserList onDeleteClick={handleDeleteuser} users={users} />
          </>
        )}
      </div>
    </div>
  );
};

UsersPage.propTypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

const mapDispatchToProps = {
  getUsers: userAction.getUsers,
  deleteUser: userAction.deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
