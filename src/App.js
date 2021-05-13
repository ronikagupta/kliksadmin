import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Sidebar from  './Sidebar';
import { Typography } from '@material-ui/core';
import { Dashboard } from '@material-ui/icons';
import Dashboard from './Dashboard';
import NewTrip from "./NewTrip";
import obdDevice from "./ObdDevice";
import Activity from './Activity';

import Yourdata from "./Yourdata";

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Login/>
       <Signup/>
       <Sidebar/>
       <Dashboard/>
       <NewTrip/>
       <Profile/>
       <Vacation/>
       <obdDevice/>
       <Activity/>
       <Yourdata/>
      </header>
    </div>
  );
}

export default App;
