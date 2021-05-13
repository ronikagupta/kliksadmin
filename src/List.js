//import useState hook to create menu collapse state
import React, { useState } from "react";
import { NavLink } from "react-router-dom";



//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
// import MoneyIcon from '@material-ui/icons/Money';
import CarIcon from '@material-ui/icons/CardTravelSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
// import {Link } from "react-router-dom";
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import FormatIndentDecreaseIcon from '@material-ui/icons/FormatIndentDecrease';
// import HomeIcon from '@material-ui/icons/Home';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import MoneyIcon from '@material-ui/icons/Money';




//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./css/Link.css";




const Header = () => {

    
    
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    
    return (
        <>

          <div id="header">
          
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <img style={{padding:"15px",height:"80px",marginLeft:"13%"}} src={menuCollapse ? "https://dev.kliks.io/images/logo/logo-sidebar-small-v2.svg" : "https://dev.kliks.io/images/logo/logo-sidebar-v2.svg"}/>
                        </div>
                        {/* <div className="closemenu" onClick={menuIconClick}>
               
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div> */}
                    </SidebarHeader>
                    <SidebarContent>
                  
                        <Menu >
                            <MenuItem icon={<HomeSharpIcon style={{color:"#FFFFFF"}}/>}>
                                <NavLink to="/Sidebar"  activeClassName="active_class" >  Dashboard </NavLink>
                            </MenuItem>

                            <MenuItem icon={<DirectionsCarIcon style={{color:"#FFFFFF"}} />}> <NavLink to="/Dashboard" activeClassName="active_class"> Trip </NavLink></MenuItem>
                            <MenuItem onClick={handleClick} icon={< MoneyIcon style={{color:"#FFFFFF"}}/>} >Payment  {open ? <ExpandLess /> : <ExpandMore  />}</MenuItem>
                            {/* <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <MoneyIcon style={{color:"white"}} color="" />
                </ListItemIcon>
                <ListItemText style={{ color: "White" }} primary="Payment" />
                {open ? <ExpandLess /> : <ExpandMore  style={{color:"white"}}/>}
            </ListItem> */}
                            <Collapse style={{ color: "white" }} in={open}  timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button >
                        <ListItemIcon>
                        </ListItemIcon>
                     <NavLink to="/Receipts" activeClassName="active_class"><ListItemText style={{ color: "#CFCECE" ,fontWeight:"bold",marginLeft:"2%"}} primary="Receipts"/></NavLink> 
                    </ListItem>
                </List>
                <List component="div" disablePadding>
                    <ListItem button >
                        <ListItemIcon>
                        </ListItemIcon>
                        <NavLink to="/Reimbursement"activeClassName="active_class"> <ListItemText style={{ color: "#CFCECE",fontWeight:"bold",marginLeft:"2%",alignItems:"center",display:"flex",justifyContent:"center"}} primary="Reimbursment" /></NavLink>
                    </ListItem>
                </List>
            </Collapse>
                            {/* <MenuItem ><Link to="/Receipts">Receipts</Link></MenuItem>
                            <MenuItem ><Link to="/Reimbursement">Remburshment</Link></MenuItem> */}
                            <MenuItem> <div className="closemenu" onClick={menuIconClick} > 

                                {menuCollapse ? (
                                    <FormatIndentDecreaseIcon style={{display:"flex",justifyContent:"center",position:"fixed",color:"#FFFFFF"}} />
                                ) : (
                                    <FormatIndentDecreaseIcon  Style={{color:"#FFFFFF"}}/>
                                )}
                            </div></MenuItem>
                        </Menu><span className="menu" >{menuCollapse ? "" : "Minimize sidebar"}</span>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">


                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default Header;