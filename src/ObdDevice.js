

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
import Profiledaterange2 from "./Profiledaterange2";

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
import { ChipListComponent } from '@syncfusion/ej2-react-buttons';


// import ObdButton from "./ObdButton";

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

    }

    render() {
        return (<div className="control-section">
            <div id="wrapper">

            <div style={{position:"fixed"}}>  <List /></div>
                      
                <Search />

                <div> <ProfileList /></div>

                <div className="boxprofile3" style={{ marginTop: "-14%" }}>
                    <div class="ant-row"><b class="style_text__12JcJ style_h5__2imxX style_medium__EyH1E style_formTitle__9Dm3M " style={{ marginTop: "4%", marginLeft: "6%", fontSize: "6px;" }}>OBD Device</b>    <ChipListComponent style={{ marginTop: "3.5%", marginLeft: "2%", color: "red", backgroundColor: "#FF616133" }} text="Inactive"></ChipListComponent></div>

                    <div id="add">
                        {/* <Profiledaterange/> */}

                        <Profiledaterange2 />

                    </div>
                  </div>
                  <ButtonComponent style={{marginLeft:"35%",marginTop:"7%",backgroundColor:"#16B396",color:"white"}}>Update OBD Setting</ButtonComponent>
             </div>
        </div>
        );

    }
}