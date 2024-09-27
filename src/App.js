import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import PageNotFound from "./components/common/PageNotFound";
import LoginPage from "./components/loginForms/LoginPage";
import Dashboard from "./components/dashboard/DashboardPage";
function App() {
  const isLoggedIn = false;
  return (
    <>
      {isLoggedIn && <NavBar />}
      <Routes>
        <Route path="/" exact element={<Navigate to="login" replace />} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/home" Component={Dashboard} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </>
  );
}

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
