

import * as React from 'react';
import Card from './Card';
import Search from './Search';
import "./css/style.css";
import List from "./List";
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Datepicker from "./Datepicker";
import Profiledaterange from "./Profiledaterange";
// import Profiledaterange2 from "./Profiledaterange2";

import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";
import MoneyIcon from '@material-ui/icons/Money';
import CarIcon from '@material-ui/icons/CardTravelSharp';
import HomeIcon from '@material-ui/icons/Home';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Button from '@material-ui/core/Button';
import Button_trip from "./Button_trip";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import Dropb from "./Dropb";
import Tableselector from "./Tableselector";
import NewTrip from "./NewTrip";
import { Link } from "react-router-dom";
import { DialogUtility } from '@syncfusion/ej2-popups';
import ProfileList from "./ProfileList";

import Switch from '@material-ui/core/Switch';
import { enableRipple } from '@syncfusion/ej2-base';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import Form from "./Form";
import ProfileButton from "./ProfileButton";
import Form2 from "./Form2";
import ProfileTable from "./ProfileTable";
import From3 from "./Form3";
import Vacation from "./Vacation";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import VacationButton from "./VacationButton";
import Yourdatatab from "./Yourdatatab";


enableRipple(true);


export default class App extends React.Component {



    constructor(props) {
        super(props);
        this.toggleClick = this.toggleClick.bind(this);
    }
    // Toggle(Open/Close) the Sidebar
    toggleClick() {
        this.dockBar.toggle();
    }
    add() {
        // var para = document.createElement("DIV");
        // var str = document.getElementById('add')
        // var node = document.getElementById("add1").innerHTML = str;
        // para.appendChild(node);
        // var element = document.getElementById("add");
        // element.appendChild(para);
    }

    render() {
        return (<div className="control-section">
            <div id="wrapper">

                {/* <SidebarComponent id="dockSidebar" ref={Sidebar => this.dockBar = Sidebar} enableDock={true} dockSize="72px" width="220px">
                    <div className="dock">
                        <List />
                        <ul>
                            <ListItem button className="sidebar-item" style={{ marginTop: "140%" }} id="toggle" onClick={this.toggleClick}>
                                <ListItemIcon>
                                    <MenuIcon style={{ color: "white" }} color="" />
                                </ListItemIcon>
                                <ListItemText style={{ color: "White" }} primary="Minimize sidebar" />
                            </ListItem>
                        </ul>
                    </div>
                </SidebarComponent> */}
                   <div style={{position:"fixed"}}>  <List /></div>
                      
                <Search />

                <div> <ProfileList /></div>


                <div className="boxprofile5" style={{ marginTop: "-14%" }}>

                    <div style={{ color: 'black', font: " 16px Muli sans-serif", marginLeft: "5%", marginTop: "5%" }}>
                        <p style={{ color: "black", fontSize: "30px" }}> Access Your Information  </p>
                        <p style={{ color: "black" }}>Here is a list of your Kliks information you can download (CSV file) at any time. Our Data Policy has more information about how we collect and use your information.</p>
                        <p>You may also request to have all of your data anonymized, resulting in you no longer being personally identifiable in our system. If you choose to anonymize your data, your company administrator will need to approve the request. Once approved, you will no longer have access to your account or data.</p>
                        <p>Note, all of your personal data will automatically be deleted from Kliks if your company decides to stop using Kliks.

</p>
                    </div>

                    <div style={{marginTop:"5%",marginLeft:"5%",marginBottom:"5%"}}>
                        <Yourdatatab />
                    </div>
                </div>

            </div>

        </div>
        );

    }
}