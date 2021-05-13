

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


enableRipple(true);


export default class App extends React.Component {

    state = {
        Profiledaterange:[]

    }


 

    render() {
        return (<div className="control-section">
            <div id="wrapper">

                {/* <SidebarComponent id="dockSidebar" ref={Sidebar => this.dockBar = Sidebar} enableDock={true} dockSize="72px" width="220px">
                    <div className="dock"> */}
                 <div style={{position:"fixed"}}>  <List /></div>
                      
                        {/* <ul>
                            <ListItem button className="sidebar-item" style={{ marginTop: "140%" }} id="toggle" onClick={this.toggleClick}>
                                <ListItemIcon>
                                    <MenuIcon style={{ color: "white" }} color="" />
                                </ListItemIcon>
                                <ListItemText style={{ color: "White" }} primary="Minimize sidebar" />
                            </ListItem>
                        </ul>
                    </div>
                </SidebarComponent> */}
                <Search />
                 
                <div> <ProfileList /></div>
                
                <div className="boxprofile3" style={{marginTop:"-14%"}}>
                <div class="ant-row"><h5 class="style_text__12JcJ style_h5__2imxX style_medium__EyH1E style_formTitle__9Dm3M " style={{marginTop:"4%",marginLeft:"5%"}}>Vacation Date</h5></div>
     <div id="add">
     <Profiledaterange />
     
     {/* <Profiledaterange2/> */}
     <div style={{marginTop:"-4.4%",marginLeft:"85%"}}><img src="https://dev.kliks.io/images/icons/bin-1.svg"/></div></div>
     <div style={{marginLeft:"5.6%",marginTop:"3%"}} > <Button variant="outlined" color="" style={{color:"#16b396"}}>
       + Add Another
      </Button></div>
     <div id="add1"></div>
     
                </div>

            </div>

        </div>
        );

    }
}