

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
import {Link } from "react-router-dom";
import { DialogUtility } from '@syncfusion/ej2-popups';
import DropbReceipts from "./DropbReceipts";
import SearchReceipts from "./SearchReceipts";
import TableSelectorReceipts from "./TableSelectorReceipts";
import TableselectorReimbursement from "./TableSelectorReimbursement";

export default class App extends React.Component {
   

    constructor(props) {
        super(props);
        this.toggleClick = this.toggleClick.bind(this);
    }
    // Toggle(Open/Close) the Sidebar
    toggleClick() {
        this.dockBar.toggle();
    }
    render() {
        return (<div className="control-section">
            <div id="wrapper">

                {/* <SidebarComponent id="dockSidebar" ref={Sidebar => this.dockBar = Sidebar} enableDock={true} dockSize="72px" width="220px">
                    <div className="dock"> */}
                        <List />
                        {/* <ul>
                            <ListItem button className="sidebar-item" style={{ marginTop: "140%" }} id="toggle" onClick={this.toggleClick}>
                                <ListItemIcon>
                                    <MenuIcon style={{color:"white"}} color="" />
                                </ListItemIcon>
                                <ListItemText style={{ color: "White" }} primary="Minimize sidebar" />
                            </ListItem>
                        </ul>
                    </div>
                </SidebarComponent> */}
                <Search />
                <div style={{ marginLeft: "48%",marginTop:"" }} className='rows'>
                    <div style={{ display: "inline-block", marginLeft: "-60%", marginTop: "5%" }} className='col-lg-7 row'> <Typography variant="h4" component="h4">
                Reimbursement
                </Typography>
               </div>
                 {/* <div><NewTrip/></div> */}
               </div>

                <div>
                <div style={{marginLeft:"-46.5%",marginTop:"2.10%"}}>
                <Datepicker/>
                </div>
                <div style={{ marginLeft: "37%", marginTop: "-4.1%" }}>
                <DropbReceipts/>
                </div>
                </div>
                <div style={{ marginLeft: "54.5%", marginTop: "-4%" ,width:"57%"}}>
                <SearchReceipts/>
                </div>
                <div style={{ marginLeft: "17%", marginTop: "3%" }}>
                <TableSelectorReceipts/>
                </div>
              
                {/* <div className="form-group">
                <label className="e-float-text e-label-top " htmlFor="email" >Date</label>
                <input placeholder="2021-03-09    -   2021-04-08" type="email" id="Email" name="email" data-msg-containerid="mailError"/>
                </div> */}

            </div>
        </div>
        );

    }
}