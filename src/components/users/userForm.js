import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
let roles = ['admin','user']

const UserForm = ({ user, onSave, onChange, saving = false, errors = {} }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{user.userId ? "Edit" : "Add"} User</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="firstName"
        label="First Name"
        value={user.firstName}
        onChange={onChange}
        error={errors.firstName}
      />
      <TextInput
        name="lastName"
        label="Last Name"
        value={user.lastName}
        onChange={onChange}
        error={errors.lastName}
      />
      <TextInput
        name="email"
        label="Email"
        value={user.email}
        onChange={onChange}
        error={errors.email}
      />
      <TextInput
        name="pswd"
        label="Password"
        value={user.pswd}
        onChange={onChange}
        error={errors.pswd}
      />
      <TextInput
        name="phone"
        label="Phone"
        value={user.phone}
        onChange={onChange}
        error={errors.phone}
      />
      <SelectInput
        name="role"
        label="Role"
        value={user.role || ""}
        defaultOption="Select Role"
        options={roles.map((role) => ({
          value: role,
          text: role,
        }))}
        onChange={onChange}
        error={errors.author}
      />
      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default UserForm;
