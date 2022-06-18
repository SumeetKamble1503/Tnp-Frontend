import "./App.css";
import { Profile } from "./components/profile.js";

import { Alljobs } from "./components/alljobs.js";
import { Postjobs } from "./components/postjob.js";
import { Dashboards } from "./components/dashboard.js";
import { MyNavbar } from "./components/navbar.js";
import { Login } from "./components/login.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from "react";

import {Bootstrapnavbar} from './mynavbar.js';
// import {Bootstrapnavbar} from "./components/mynavbar.js";
function App() {
  var admin = false;
  var isloggedin = true;
  // return (
  //   <Bootstrapnavbar/>
  // );
  return (
    <div
      // className="componentholder"
    >
      <MyNavbar admin={admin} isloggedin={isloggedin} />
      <BrowserRouter>
        <Routes>
          {admin ? (
            <>
              <Route path="/" element={<Dashboards />} />
              <Route path="postjob" element={<Postjobs />}></Route>
            </>
          ) : isloggedin ? (
            <>
              <Route path="/" element={<Dashboards />} />
              <Route path="alljobs" element={<Alljobs />} />
              <Route path="myprofile" element={<Profile />} />
              <Route path="history"></Route>
            </>
          ) : (
            <>
              <Route path="/" element={<Login />} />
            </>
          )}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
