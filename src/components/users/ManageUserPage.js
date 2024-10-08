import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import * as userAction from "../../redux/actions/userActions";
import UserModel from "../../models/userModel";
import UserForm from "./userForm";
import "./ManageUserPage.css";
import { toast } from "react-toastify";
import { debugErrorMap } from "firebase/auth";
let newuser = new UserModel({
  userId: "",
  email: "",
  pswd: "",
  firstName: "",
  lastName: "",
  phone: "",
  role: "",
});
function ManageUserPage({ users, getUsers, addUser, ...props }) {
  let { userId } = useParams();
  let navigation = useNavigate();
  const [user, setUser] = useState({ ...props.user });
  const [errors, setErrors] = useState();
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (users.length === 0) {
      getUsers();
    } else if (userId) {
      let user = users.find((user) => user.userId === userId);
      setUser(user);
    }
  }, [userId, users]);

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevuser) => ({
      ...prevuser,
      [name]: value,
    }));
  }
  function isFormValid() {
    let { firstName, lastName, email, pswd, phone, role } = user;
    let errors = {};
    if (firstName === "") errors.firstName = "Fisrt Name is requires field";
    if (lastName === "") errors.lastName = "Last Name is requires field";
    if (email === "") errors.email = "Email is requires field";
    if (pswd === "") errors.pswd = "Password is requires field";
    if (phone === "") errors.phone = "Phone is requires field";
    if (role === "") errors.role = "Role is requires field";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSave(event) {
    event.preventDefault();
    console.log(isFormValid(), errors);
    if (!isFormValid()) return;
    setSaving(true);
    try {
      await addUser(user);
      toast.success("User saved.");
      navigation("/users");
    } catch (err) {
      setSaving(false);
      setErrors({ onSave: err.message });
    }
  }
  return (
    <div className="manage-user-cantainer">
      <UserForm
        user={user}
        errors={errors}
        onChange={handleChange}
        onSave={handleSave}
        saving={saving}
      />
    </div>
  );
}

ManageUserPage.propTypes = {
  user: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
};

// export function getuserByID(users, userId) {
//   return users.find((user) => user.userId === userId) || null;
// }

function mapStateToProps(state) {
  return {
    user: newuser,
    users: state.users,
  };
}

const mapDispatchToProps = {
  getUsers: userAction.getUsers,
  addUser: userAction.addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageUserPage);
