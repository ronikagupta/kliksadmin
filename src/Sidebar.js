

import * as React from 'react';
import Card from './Card';
import Search from './Search';
import "./css/style.css";
import List from "./List";
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import Typography from 'typography';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import MoneyIcon from '@material-ui/icons/Money';
import CarIcon from '@material-ui/icons/CardTravelSharp';
import HomeIcon from '@material-ui/icons/Home';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import MenuIcon from '@material-ui/icons/Menu';
import Card1 from './Card1';
import Card2 from './Card2';
import { Dashboard } from '@material-ui/icons';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

// import Dashboard from "./Dashboard";
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
                            <ListItem button className="sidebar-item" style={{marginTop:"140%"}} id="toggle" onClick={this.toggleClick}>
                                <ListItemIcon>
                                    <MenuIcon style={{color:"white"}}  color="" />
                                </ListItemIcon>
                                <ListItemText style={{ color: "white" }} primary="Minimize sidebar" />
                            </ListItem>
                        </ul>
                    </div>
                 
                </SidebarComponent>
               */}
                <Search style={{marginLeft:"20%"}}/>
              
                <div className="row">
                   <div className="col-lg-4" style={{ display: "inline-block", marginLeft: "16%", marginTop: "5%" ,height:"400px" ,width:"350px" }}> <Card/> </div> 
                    <div  className="col-lg-4" style={{ display: "inline-block", marginLeft: "5%" ,height:"500px" ,width:"400px"  }}> <Card1/> </div>
                    <div  className="col-lg-4" style={{ display: "inline-block", marginLeft: "5%" }}> <Card2/> </div>
                    {/* <div className="col-lg-4" style={{ display: "inline-block", marginLeft: "16%", marginTop: "5%" }}><Card></Card></div>
                    <div className="col-lg-4" style={{ display: "inline-block", marginLeft: "5%" }}> <Card /></div>
                    <div className="col-lg-4" style={{ display: "inline-block", marginLeft: "5%" }}> <Card /></div> */}
                </div>
             </div>
        </div>);
    }
}