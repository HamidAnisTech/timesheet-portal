import { handleResponse, handleError } from "./apiUtils";
import { login, register, logout } from "../firebaseConfig";

const baseUrl = process.env.REACT_APP_DATABASE_URL;

export function loginUser(email, pswd) {
  return login(email, pswd);
}

export function registerUser(email, pswd) {
  return register(email, pswd);
}

export function logoutUser() {
  return logout();
}

export function getUsers(token) {
  let url = `${baseUrl}/users.json?auth=${token}`;
  return fetch(url).then(handleResponse).catch(handleError);
}
export function getUserWIthId(userId, token) {
  let url = `${baseUrl}/users/${userId}.json?auth=${token}`;
  return fetch(url).then(handleResponse).catch(handleError);
}

export function saveUser(user, token) {
  return fetch(baseUrl + `/users/${user.userId}.json?auth=${token}`, {
    method: "PUT",
    // method: user.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteUser(userId, token) {
  let url = `${baseUrl}/users/${userId}.json?auth=${token}`;
  return fetch(url, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
