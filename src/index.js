import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import sidebar from "./sidebar";


// import './Css/index1.css';
import Signup from './Signup';
import Login from './Login';
import Sidebar from './Sidebar';
// import { Card } from "@material-ui/core";
import Card from "./Card";
import Dashboard from "./Dashboard";
import NewTrip from "./NewTrip";
import Receipts from "./Receipts";
import Reimbursement from "./Reimbursement";
import Profile from "./Profile";
import Vacation from "./Vacation";
import obdDevice from "./ObdDevice";
import Activity from "./Activity";
import Yourdata from "./Yourdata";


// ReactDOM.render(<App/>,document.getElementById('root'));



const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
   <Switch>
    <Route exact path="/" exact="" component={Login}/>
    <Route path="/Signup" component={Signup}/>
    <Route path="/Login" component={Login}/>
    <Route path="/Card" component={Card}/>
    <Route path="/sidebar" component={Sidebar}/> 
    <Route path="/Dashboard" component={Dashboard}/> 
    <Route path="/NewTrip" component={NewTrip}/>
    <Route path="/Receipts" component={Receipts}/>
    <Route path="/Reimbursement" component={Reimbursement}/>
    <Route path="/Profile" component={Profile}/>
    <Route path="/Vacation" component={Vacation}/>
    <Route path="/obdDevice" component={obdDevice}/>
    <Route path="/Activity" component={Activity}/>
    <Route path="/Yourdata" component={Yourdata}/>

    
    {/* <Route path="/Sidebar" component={Sidebar} /> */}
   </Switch>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
