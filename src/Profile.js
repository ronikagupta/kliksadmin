

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
                <div> <Search /></div>
               
                {/* <div style={{ marginLeft: "50%",marginTop:"" }} className='rows'>
                    <div style={{ display: "inline-block", marginLeft: "-60%", marginTop: "5%" }} className='col-lg-7 row'> <Typography variant="h4" component="h4">
                        Trips
                </Typography>
               </div>

                    <div><NewTrip/></div>
                  
                </div> */}

                {/* <div style={{ display: "inline-block", marginLeft: "21%", }} className='col-lg-3 row'> <Datepicker /></div> */}
                {/* <div style={{marginLeft:"40%",marginTop:"-4%"}}><Dropb/></div> */}
                {/* <label for="exampleInputEmail1" class="form-label" style={{marginTop:"-10%",marginLeft:"%"}}><b>Purpose</b></label> */}
                {/* <div style={{marginTop:"-2.3%",marginLeft:"3%"}}>
        
        <select class="form-select" aria-label="Default select example" style={{height:"46px",width:"250px",marginLeft:"40%",marginTop:"-30%",fontSize:"20px"}}>
  <option selected style={{fontSize:"14px"}}>Panding</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </div>
  

                <div style={{ marginLeft: "21.5%", marginTop: "2%" }}>
                    <Tableselector/>
                </div> */}

                {/* <div className="form-group">
                <label className="e-float-text e-label-top " htmlFor="email" >Date</label>
                <input placeholder="2021-03-09    -   2021-04-08" type="email" id="Email" name="email" data-msg-containerid="mailError"/>
                </div> */}
                <div> <ProfileList /></div>

                <div className="boxprofile">
                    <span class="ant-avatar style_avatar__3E_gi ant-avatar-circle ant-avatar-image" style={{ width: "80px", height: "80px", lineHeight: "80px", fontSize: "018px" }}><img src="https://viantr-asset.s3.us-east-2.amazonaws.com/uploads/profiles/kojs5rcklc5fo6q.jpeg" style={{ borderRadius: "60%", height: "80px", marginTop: "5%", marginLeft: "5%" }} /></span>

                <div style={{ marginLeft: "70%", marginTop: "-15%" }}> <SwitchComponent checked={true} /><b>Account Active</b></div>
                   
                <Form/>
               
                {/* <div className="ant-row">
                <div className="ant-col ant-col-xs-24 ant-col-lg-12">
                <div class="ant-row ant-row-space-between style_bottomBoxRow__3UHKv" style={{padding: "8px 0px"}}><div class="ant-col"><div class="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"style={{marginLeft:"100%"}}>Group</div></div><div class="ant-col"><div class="style_text__12JcJ style_p__1T8oW style_sm__KmxEp"style={{marginLeft:"100%"}}>Test Group 31</div></div></div>
                <div class="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div class="ant-col"><div class="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"style={{marginLeft:"40%"}}>Group Manager</div></div><div class="ant-col"><div  class="style_text__12JcJ style_p__1T8oW style_sm__KmxEp"style={{marginLeft:"100%"}}  >Sathi Test 158</div></div></div>
                <div class="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div class="ant-col"><div class="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"style={{marginLeft:"80%"}}>Product</div></div><div class="ant-col"><div  class="style_text__12JcJ style_p__1T8oW style_sm__KmxEp"style={{marginLeft:"100%"}}  >??</div></div></div>
                <div class="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div class="ant-col"><div class="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"style={{marginLeft:"30%"}}>Payment Frequency</div></div><div class="ant-col"><div  class="style_text__12JcJ style_p__1T8oW style_sm__KmxEp"style={{marginLeft:"100%"}}  >??</div></div></div>
                <div class="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div class="ant-col"><div class="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"style={{marginLeft:"33%"}}>Payment Approval </div></div><div class="ant-col"><div  class="style_text__12JcJ style_p__1T8oW style_sm__KmxEp"style={{marginLeft:"100%"}}  >??</div></div></div>
                <div class="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div class="ant-col"><div class="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp"style={{marginLeft:"37%"}}>Mileage Capture</div></div><div class="ant-col"><div  class="style_text__12JcJ style_p__1T8oW style_sm__KmxEp"style={{marginLeft:"100%"}}  >??</div></div></div>
                </div>
                </div> */}
              
                <div>
     <div className="ant-col ant-col-xs-24 ant-col-lg-12" style={{paddingTop: "16px;", paddingBottom: "16px;",marginLeft:"6%",marginTop:"4%"}}><div className="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp">Group</div></div><div className="ant-col"><div className="style_text__12JcJ style_right__2-S_A style_p__1T8oW style_sm__KmxEp">Test Group 31</div></div></div><div className="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp">Group Manager</div></div><div class="ant-col"><div className="style_text__12JcJ style_right__2-S_A style_p__1T8oW style_sm__KmxEp">Sathi Test 138</div></div></div></div>
     
     <div style={{marginTop:"-4%"}}>
     <div className="ant-col ant-col-xs-24 ant-col-lg-12" style={{paddingTop: "16px;", paddingBottom: "16px;",marginLeft:"6%",marginTop:"4%"}}><div className="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp">Products</div></div><div className="ant-col"><div className="style_text__12JcJ style_right__2-S_A style_p__1T8oW style_sm__KmxEp">??</div></div></div><div className="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp">Payment Frequency</div></div><div class="ant-col"><div className="style_text__12JcJ style_right__2-S_A style_p__1T8oW style_sm__KmxEp">??</div></div></div></div>
    </div>

    <div style={{marginTop:"-4%"}}>
     <div className="ant-col ant-col-xs-24 ant-col-lg-12" style={{paddingTop: "16px;", paddingBottom: "16px;",marginLeft:"6%",marginTop:"4%"}}><div className="ant-row ant-row-space-between style_bottomBoxRow__3UHKv"><div className="ant-col"><div className="style_text__12JcJ style_strong__ioj3g style_sm__KmxEp">Mileage Capture</div></div><div className="ant-col"><div className="style_text__12JcJ style_right__2-S_A style_p__1T8oW style_sm__KmxEp">??</div></div></div></div>
     
    </div>
    
     </div>
               
                <div style={{marginTop:"4%"}}>
              <ProfileButton />
                </div>
                </div>

                <div style={{marginTop:"30%"}}>
              {/* <ProfileButton /> */}
                </div>
                </div>

              <div>
                <div className="boxprofile2">
                <div class="ant-row"><h5 class="style_text__12JcJ style_h5__2imxX style_medium__EyH1E style_formTitle__9Dm3M " style={{marginTop:"10%",marginLeft:"5%"}}>Home Address</h5></div>
                    <div style={{marginTop:"-20%"}}>
                        <Form2/>
                        <div class="ant-row"><h5 class="style_text__12JcJ style_h5__2imxX style_medium__EyH1E style_formTitle__9Dm3M " style={{marginTop:"1%",marginLeft:"5%"}}>office Address</h5></div>
                        <div  style={{marginTop:"-20%"}}>  <From3/></div>
                       
                    
                    </div>
                    <div style={{marginTop:"13%"}}>
              <ProfileButton />
                </div>
                </div>

               

            </div>

        </div>
        );

    }
}