// import logo from './logo.svg';
import "./App.css";





import {
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";


import CardHeader from "@mui/material/CardHeader";




import React, { useEffect } from "react";
import useState from "react";



import { Cookies } from "react-cookie";
import { Login } from "./components/signup/Login";
import { Sig } from "./components/login/Sig";
import { Dashboard } from "./components/Dashboard components/Dashboard";
import { RequestToken } from "./components/Requestpage/RequestToken.1";
import { PendingToken } from "./components/Pendinglistpage/PendingToken";
import { Profile } from "./components/profile page/Profile";
import { ResponsiveAppBar } from "./components/usernav/pages";
import { Admindashboard } from "./components/Admin/Admin Dashboard/Admindashboard";
import { Logout } from "./components/logout/Logout";
import { Admin } from "./components/Admin/Admin signin/Admin";
import { AdmindashboardAcceptedToken } from "./components/Admin/AdminAcceptedlist/AdmindashboardAcceptedToken";
import { AdmindashboardrejectedToken } from "./components/Admin/Rejectedlist/AdmindashboardrejectedToken";
import { Foods } from "./components/Admin/Foods/Foods";
import { EditFood } from "./components/Admin/EditFood/EditFood";
import { AddFoods } from "./components/Admin/AddFood/AddFoods";
import { AdminResponsiveAppBar } from "./components/Admin/Admin Nav/adminpages";

export const API = "https://my-capston-1.herokuapp.com/";
function App() {

  


  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/signup" element={<Login />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Sigin" element={<Sig  />} />
          <Route
            path="Dashboard"
            element={[
              <ResponsiveAppBar /> ,<Dashboard  />
              ]}
           
          />
          <Route
            path="RequestToken"
            element={[
            <ResponsiveAppBar />, <RequestToken />
            
            ]}
          />

          <Route
            path="PendingToken"
            element={[
            <ResponsiveAppBar /> ,<PendingToken />
            ]}
          />
          <Route path="profile" element={[
          
          <ResponsiveAppBar /> ,<Profile />
          ]} />
          <Route path="Logout" element={<Logout />} />
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
          <Route path="/" element={<Navigate replace to="/signup" />} />
          {/* <Route path="/Dashboard/Dashboard" element={<Navigate replace to="/Dashboard" />} /> */}

          <Route
            path="Admindashboard"
            element={[
          <AdminResponsiveAppBar />, <Admindashboard />
          ]}
          />
          <Route
            path="Foods"
            element={[
          <AdminResponsiveAppBar /> ,<Foods />
          ]}
          />
          <Route
            path="AcceptedToken"
            element={[
              <AdminResponsiveAppBar />,
              <AdmindashboardAcceptedToken />
            ]}
          />
          <Route
            path="RejectedToken"
            element={[
              <AdminResponsiveAppBar />,
              <AdmindashboardrejectedToken />
            ]}
          />
          <Route
            path="Foods/AddFoods"
            element={[
            <AdminResponsiveAppBar /> ,<AddFoods />
            ]}
          />
          <Route
            path="Foods/edit/:id"
            element={[
            <AdminResponsiveAppBar />,<EditFood />
            ]}
          />
        </Routes>
      </div>
    </div>
  );
}

// function RequiredToken({ auth,children }) {
//   // const token = Cookies.get("token");
//   if(!auth){
//     return <Navigate replace to="/sigin" />;
//   }
  // return children
  // console.log("token for react", token);

  // return auth ? children : <Navigate replace to="/sigin" />;
// }

export default App;
