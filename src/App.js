import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/navbar/Navbar";
import PageNotFound from "./components/common/PageNotFound";
import LoginPage from "./components/loginForms/LoginPage";
import Dashboard from "./components/dashboard/DashboardPage";
import Users from "./components/users/usersPage";
import ManageUserPage from "./components/users/ManageUserPage";
function App() {
  return (
    <>
      <NavBar />
      {/* {userLoginStatus && <NavBar />} */}
      <Routes>
        <Route path="/" exact element={<Navigate to="login" replace />} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/home" Component={Dashboard} />
        <Route path="/users" Component={Users} />
        <Route path="/user/:userId" Component={ManageUserPage} />
        <Route path="/user" Component={ManageUserPage} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
      <ToastContainer autoClose={2000} hideProgressBar />
    </>
  );
}

// let mapStateToProps = (state) => {
//   return {
//     isLoggedIn: state.user.isLoggedIn,
//   };
// };
// let mapdispatchToProps = {};
// App.proptype = {
//   logIn: PropTypes.bool.isRequired,
// };
// export default connect(mapStateToProps, mapdispatchToProps)(App);
export default App;

/*



 
const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};


 <Route 
          path="dashboard" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />


         <Route path="dashboard" element={<Dashboard />}>
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>

*/
