

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
import DonutChart from "./Donutchart";
import DonutChart2 from "./Donutchart2";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ActivityDatepicker from "./ActivityDatepicker";


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

                <div ><ProfileList /></div>

                <div className="boxprofile4" style={{ marginTop: "-14%" }}>
                    <div style={{ marginTop: "5%", marginLeft: "3%", borderColor: "gray" }}>

                        <select class="form-select" aria-label="Default select example" style={{ borderColor: "gray", height: "30px", width: "210px", marginLeft: "63%", marginTop: "5%", fontSize: "15px", borderColor: "gray" }}>
                            <option selected style={{ borderColor: "gray", fontSize: "15px", }}>2020</option>
                            <option value="1">2021</option>

                        </select>
                    </div>

                    <div>
                        <div style={{ display: "inline-block" }}>
                            <div className="e-card">
                                <div className="e-card-image">
                                    <div className="e-card-title" style={{ fontSize: "40px", fontWeight: "800", marginLeft: "25%", marginTop: "50%" }}>365.03 </div>
                                    <div style={{ marginLeft: "26%", font: " Muli, sans-sarif" }}>Miles approved</div><br />
                                    {/* <div style={{marginTop:"-5%",marginLeft:"25%"}}><img src="https://dev.kliks.io/images/icons/trend-down.svg"/></div> */}
                                    <div style={{ color: "red", marginTop: "-10%", marginLeft: "25%", width: "200px" }}><img style={{ marginTop: "5%" }} src="https://dev.kliks.io/images/icons/trend-down.svg" />-82% vs last year</div>

                                </div>
                            </div>
                        </div>
                        <div style={{ display: "inline-block", marginLeft: "5%" }}>
                            <div className="e-card">
                                <div className="e-card-image">
                                    <div className="e-card-title" style={{ fontSize: "40px", fontWeight: "800", marginLeft: "25%", marginTop: "50%" }}>110 </div>
                                    <div style={{ marginLeft: "26%", font: " Muli, sans-sarif" }}>Trip Submitted</div><br />
                                    {/* <div style={{marginTop:"-5%",marginLeft:"25%"}}><img src="https://dev.kliks.io/images/icons/trend-down.svg"/></div> */}
                                    <div style={{ color: "red", marginTop: "-10%", marginLeft: "25%", width: "200px" }}><img style={{ marginTop: "5%" }} src="https://dev.kliks.io/images/icons/trend-down.svg" />-39% vs last year</div>

                                </div>
                            </div>

                        </div>
                        <div style={{ display: "inline-block" }}>
                            <div className="e-card">
                                <div className="e-card-image">
                                    <div className="e-card-title" style={{ fontSize: "40px", fontWeight: "800", marginLeft: "25%", marginTop: "50%" }}>$487.46 </div>
                                    <div style={{ marginLeft: "26%", font: " Muli, sans-sarif" }}>Reimbursed</div><br />
                                    {/* <div style={{marginTop:"-5%",marginLeft:"25%"}}><img src="https://dev.kliks.io/images/icons/trend-down.svg"/></div> */}
                                    <div style={{ color: "red", marginTop: "-10%", marginLeft: "25%", width: "200px" }}><img style={{ marginTop: "5%" }} src="https://dev.kliks.io/images/icons/trend-down.svg" />-49% vs last year</div>

                                </div>
                            </div>

                        </div>




                    </div>


                    <div style={{ marginTop: "-7%" }}>
                        <div style={{ display: "inline-block", marginTop: "-25%" }}>
                            <div className="e-card">
                                <div className="e-card-image">
                                    <div className="e-card-title" style={{ fontSize: "40px", fontWeight: "800", marginLeft: "25%", marginTop: "50%" }}>1 </div>
                                    <div style={{ marginLeft: "26%", font: " Muli, sans-sarif" }}>FAVR</div><br />
                                    {/* <div style={{marginTop:"-5%",marginLeft:"25%"}}><img src="https://dev.kliks.io/images/icons/trend-down.svg"/></div> */}
                                    <div style={{ color: "red", marginTop: "-10%", marginLeft: "25%", width: "200px" }}><img style={{ marginTop: "5%" }} src="https://dev.kliks.io/images/icons/trend-down.svg" />-100% vs last year</div>

                                </div>
                            </div>
                        </div>
                        <div style={{ display: "inline-block", marginLeft: "5%" }}>
                            <div className="e-card">
                                <div className="e-card-image">
                                    <div className="e-card-title" style={{ fontSize: "40px", fontWeight: "800", marginLeft: "25%", marginTop: "50%" }}>1 </div>
                                    <div style={{ marginLeft: "26%", font: " Muli, sans-sarif" }}>Safety</div><br />
                                    {/* <div style={{marginTop:"-5%",marginLeft:"25%"}}><img src="https://dev.kliks.io/images/icons/trend-down.svg"/></div> */}
                                    <div style={{ color: "red", marginTop: "-10%", marginLeft: "25%", width: "200px" }}><img style={{ marginTop: "5%" }} src="https://dev.kliks.io/images/icons/trend-down.svg" />-100% vs last year</div>

                                </div>
                            </div>

                        </div>
                        <div style={{ display: "inline-block" }}>
                            <div className="e-card">
                                <div className="e-card-image">
                                    <div className="e-card-title" style={{ fontSize: "40px", fontWeight: "800", marginLeft: "25%", marginTop: "50%" }}>1</div>
                                    <div style={{ marginLeft: "26%", font: " Muli, sans-sarif" }}>Policy</div><br />
                                    {/* <div style={{marginTop:"-5%",marginLeft:"25%"}}><img src="https://dev.kliks.io/images/icons/trend-down.svg"/></div> */}
                                    <div style={{ color: "red", marginTop: "-10%", marginLeft: "25%", width: "200px" }}><img style={{ marginTop: "5%" }} src="https://dev.kliks.io/images/icons/trend-down.svg" />-49% vs last year</div>

                                </div>
                            </div>

                        </div>




                    </div>

                    <hr style={{ marginTop: "10%" }}></hr>

                    <div style={{ marginTop: "-4%" }}>
                        <div style={{ display: "inline-block", marginTop: "-25%", width: "150px" }}>
                            <div className="e-card">
                                <div className="e-card-image">
                                    <div className="e-card-title" style={{ fontSize: "40px", fontWeight: "800", marginLeft: "25%", marginTop: "50%" }}>48</div>
                                    <div style={{ marginLeft: "26%", font: " Muli, sans-sarif" }}>Days since last Trip recording</div><br />
                                    {/* <div style={{marginTop:"-5%",marginLeft:"25%"}}><img src="https://dev.kliks.io/images/icons/trend-down.svg"/></div> */}
                                    <div style={{ color: "Green", marginTop: "-10%", marginLeft: "26%", width: "200px" }}>view</div>

                                </div>
                            </div>
                        </div>
                        <div style={{ display: "inline-block", marginLeft: "5%", width: "180px" }}>
                            <div className="e-card">
                                <div className="e-card-image">
                                    <div className="e-card-title" style={{ fontSize: "40px", fontWeight: "800", marginLeft: "25%", marginTop: "50%" }}>68 </div>
                                    <div style={{ marginLeft: "26%", font: " Muli, sans-sarif" }}>Days since last reimbursement</div><br />
                                    {/* <div style={{marginTop:"-5%",marginLeft:"25%"}}><img src="https://dev.kliks.io/images/icons/trend-down.svg"/></div> */}
                                    <div style={{ color: "Green", marginTop: "-10%", marginLeft: "26%", width: "200px" }}>view</div>

                                </div>
                            </div>

                        </div>
                        <div style={{ display: "inline-block", width: "180px" }}>
                            <div className="e-card">
                                <div className="e-card-image">
                                    <div className="e-card-title" style={{ fontSize: "40px", fontWeight: "800", marginLeft: "25%", marginTop: "50%" }}>0</div>
                                    <div style={{ marginLeft: "26%", font: " Muli, sans-sarif" }}>Days until next vacation</div><br />
                                    {/* <div style={{marginTop:"-5%",marginLeft:"25%"}}><img src="https://dev.kliks.io/images/icons/trend-down.svg"/></div> */}
                                    <div style={{ color: "Green", marginTop: "-10%", marginLeft: "26%", width: "200px" }}>view</div>

                                </div>
                            </div>

                        </div>

                        <div style={{ display: "inline-block", width: "180px" }}>
                            <div className="e-card">
                                <div className="e-card-image">
                                    <div className="e-card-title" style={{ fontSize: "40px", fontWeight: "800", marginLeft: "25%", marginTop: "60%" }}>43</div>
                                    <div style={{ marginLeft: "26%", font: " Muli, sans-sarif" }}>Receipts waiting for approval</div><br />
                                    {/* <div style={{marginTop:"-5%",marginLeft:"25%"}}><img src="https://dev.kliks.io/images/icons/trend-down.svg"/></div> */}
                                    <div style={{ color: "Green", marginTop: "-10%", marginLeft: "25%", width: "200px" }}>view</div>

                                </div>
                            </div>

                        </div>
                    </div>

                    
{/*                    
                    <div style={{ marginTop: "1%",marginLeft:"10%" }}>
                        <DonutChart/>
                       
                    </div> */}
                     
                    <div style={{ marginTop: "1%",marginLeft:"10%" }}>
                        <DonutChart2/>  
                    </div>
                    {/* <div style={{ marginTop: "1%",marginLeft:"10%" }}>
                        <DonutChart/>
                    </div> */}

                  
                     

                   
                  
                  
                    <div >  <hr style={{ marginTop: "10%" }}></hr> </div>
                  
                      
                    <div style={{color:'black',font:" 16px Muli sans-serif",marginLeft:"5%",marginTop:"5%"}}>
                      <p style={{color:"black",fontSize:"30px"}}>  daily Avtivity </p> 
                    </div>
                    <div style={{marginTop:"4%",marginLeft:"-55%", color:"Black",borderRadius:"3px"}}> 
                        <ActivityDatepicker/>
                    </div>

                    <div>
                    <div className="" style={{paddingTop: "16px;", paddingBottom: "16px;",marginLeft:"6%",marginTop:"4%",marginRight:"7%"}}><div className="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"><img src="https://dev.kliks.io/images/icons/login-key-1.svg"/>Logged into Kliks</div></div><div className="ant-col"><div className="style_text__12JcJ style_right__2-S_A style_p__1T8oW style_sm__KmxEp">a few seconds ago</div></div></div><div className=""><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"></div></div><div class="ant-col"><div className=""></div></div></div></div>
                    <div className="" style={{paddingTop: "16px;", paddingBottom: "16px;",marginLeft:"6%",marginTop:"4%",marginRight:"7%"}}><div className="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"><img src="https://dev.kliks.io/images/icons/login-key-1.svg"/>Submitted 1 receipt</div></div><div className="ant-col"><div className="style_text__12JcJ style_right__2-S_A style_p__1T8oW style_sm__KmxEp">2 days ago</div></div></div><div className=""><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"></div></div><div class="ant-col"><div className=""></div></div></div></div>
                    <div className="" style={{paddingTop: "16px;", paddingBottom: "16px;",marginLeft:"6%",marginTop:"4%",marginRight:"7%"}}><div className="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"><img src="https://dev.kliks.io/images/icons/login-key-1.svg"/>Logged into Kliks</div></div><div className="ant-col"><div className="style_text__12JcJ style_right__2-S_A style_p__1T8oW style_sm__KmxEp">2 days ago</div></div></div><div className=""><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"></div></div><div class="ant-col"><div className=""></div></div></div></div>
                    <div className="" style={{paddingTop: "16px;", paddingBottom: "16px;",marginLeft:"6%",marginTop:"4%",marginRight:"7%"}}><div className="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"><img src="https://dev.kliks.io/images/icons/login-key-1.svg"/>Logged into Kliks</div></div><div className="ant-col"><div className="style_text__12JcJ style_right__2-S_A style_p__1T8oW style_sm__KmxEp">11 days ago</div></div></div><div className=""><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"></div></div><div class="ant-col"><div className=""></div></div></div></div>
                    <div className="" style={{paddingTop: "16px;", paddingBottom: "16px;",marginLeft:"6%",marginTop:"4%",marginRight:"7%"}}><div className="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"><img src="https://dev.kliks.io/images/icons/login-key-1.svg"/>Logged into Kliks</div></div><div className="ant-col"><div className="style_text__12JcJ style_right__2-S_A style_p__1T8oW style_sm__KmxEp">3 days ago</div></div></div><div className=""><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"></div></div><div class="ant-col"><div className=""></div></div></div></div>
                    <div className="" style={{paddingTop: "16px;", paddingBottom: "16px;",marginLeft:"6%",marginTop:"4%",marginRight:"7%"}}><div className="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"><img src="https://dev.kliks.io/images/icons/login-key-1.svg"/>Logged into Kliks</div></div><div className="ant-col"><div className="style_text__12JcJ style_right__2-S_A style_p__1T8oW style_sm__KmxEp">6 days ago</div></div></div><div className=""><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"></div></div><div class="ant-col"><div className=""></div></div></div></div>
                    <div className="" style={{paddingTop: "16px;", paddingBottom: "16px;",marginLeft:"6%",marginTop:"4%",marginRight:"7%"}}><div className="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"><img src="https://dev.kliks.io/images/icons/login-key-1.svg"/>Logged into Kliks</div></div><div className="ant-col"><div className="style_text__12JcJ style_right__2-S_A style_p__1T8oW style_sm__KmxEp">11 days ago</div></div></div><div className=""><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"></div></div><div class="ant-col"><div className=""></div></div></div></div>
                    <div className="" style={{paddingTop: "16px;", paddingBottom: "16px;",marginLeft:"6%",marginTop:"4%",marginRight:"7%"}}><div className="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"><img src="https://dev.kliks.io/images/icons/login-key-1.svg"/>Logged into Kliks</div></div><div className="ant-col"><div className="style_text__12JcJ style_right__2-S_A style_p__1T8oW style_sm__KmxEp">1 days ago</div></div></div><div className=""><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"></div></div><div class="ant-col"><div className=""></div></div></div></div>
                    </div>
                </div>
             
               
             
            </div>
          
        </div>
        );

    }
}