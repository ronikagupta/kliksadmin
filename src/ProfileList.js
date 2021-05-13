import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
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
import { NavLink } from "react-router-dom";
import Receipts from "./Receipts";
import "./css/style.css";
import Vacation from "./Vacation";
import obdDevice from './ObdDevice';
import Activity from "./Activity";


const useStyles = makeStyles((theme) => ({
  
    

    root: {
        width: '100%',
        maxWidth: 200,
        backgroundColor: "",
       
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    
}));



export default function NestedList() {
    




    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List style={{ marginLeft: "15%" ,width:"20%"}}
            // component="nav"
            // aria-labelledby="nested-list-subheader"
            // subheader={
            //     <ListSubheader component="div" id="nested-list-subheader">
            //         Nested List Items
            //     </ListSubheader>
            // }
            className={classes.root}
        >

            <ListItem button>
                <ListItemIcon>
                </ListItemIcon>

            </ListItem>
            <ListItem button>
                <ListItemIcon>

                </ListItemIcon>
                < NavLink to="/Activity" activeClassName="active_class" style={{textDecoration:"none"}}><ListItemText style={{ color: "White", color: "Black", }} primary="Activity" /></ NavLink>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                </ListItemIcon>
                < NavLink to="/Profile" activeClassName="active_class" style={{textDecoration:"none",color:"black"}}><ListItemText style={{ color: "White", color: "Black" }} primary="Profile" /></ NavLink>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                </ListItemIcon>
                < NavLink to="/Vacation" activeClassName="active_class" style={{textDecoration:"none"}}><ListItemText style={{ color: "White", color: "Black" }} primary="Vacations" /></ NavLink>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                </ListItemIcon>
                < NavLink to="/obdDevice"activeClassName="active_class"  style={{textDecoration:"none"}}><ListItemText style={{ color: "White", color: "Black" }} primary="OBD Device" /></ NavLink>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                </ListItemIcon>
                < NavLink to="/Yourdata"activeClassName="active_class"  style={{textDecoration:"none"}}><ListItemText style={{ color: "White", color: "Black" }} primary="Your data" /></ NavLink>
            </ListItem>
            {/* <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <MoneyIcon style={{color:"white"}} color="" />
                </ListItemIcon>
                <ListItemText style={{ color: "White" }} primary="Payment" />
                {open ? <ExpandLess /> : <ExpandMore  style={{color:"white"}}/>}
            </ListItem>
            <Collapse style={{ color: "white" }} in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                        </ListItemIcon>
                    <Link to="/Sidebar"><ListItemText style={{ color: "White",color:"Black" }} primary="Dashboard" /></Link>
                    </ListItem>
                </List>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                        </ListItemIcon>
                        <Link to="/Reimbursement"> <ListItemText style={{ color: "White" }} primary="Reimbursment" /></Link>
                    </ListItem>
                </List>
            </Collapse> */}
        </List>
    );
}