class UserModel {
  constructor({ userId, email, pswd, firstName, lastName, phone, role }) {
    this.userId = userId;
    this.phone = phone;
    this.role = role;
    this.username = firstName + " " + lastName;
    this.email = email;
    this.pswd = pswd;
    this.firstName = firstName;
    this.lastName = lastName;
    this.creationDate = new Date().toISOString();
    this.isLoggedIn = false;
    this.lastLogin = 0; // used this value becouse firebase dont save a key with the value null. Please update it with the current datae value when logged in
  }
}

export default UserModel;
