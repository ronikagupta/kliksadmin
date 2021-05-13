import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import AddDatePicker from "./AddDatePicker";
import Profiledaterange3 from "./Profiledaterange3";

import Timepicker from './Timepicker';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button> */} <div style={{ display: "inline-block", marginLeft: "40%", }} className='col-lg-3 row'><ButtonComponent className="e-control e-btn" onClick={handleClickOpen} style={{ backgroundColor: "#16b396", boxShadow: "0 2px 5px rgb(0 18 71 / 20%)", color: "white" , padding: "14px 14px 14px"}}>Add Manual Trip</ButtonComponent><ButtonComponent className="e-control e-btn " disabled="true" onClick={handleClickOpen} style={{ marginLeft: "20px", backgroundColor: "#16b396", boxShadow: "0 2px 5px rgb(0 18 71 / 20%)", color: "white" , padding: "14px 14px 14px"}}>Submit Trip for Approval</ButtonComponent></div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        
        </DialogTitle>
        <DialogContent dividers>
        {/* <div class="style_text__12JcJ style_strong__ioj3g style_large__J8lu_ modal-title"><div class="trip-update-modal-title"style={{marginTop:"15px",marginBottom:"5px",textAlign:"center"}}>New Trip</div></div>
        
      
        <label for="exampleInputEmail1" class="form-label"style={{marginTop:"20px",marginLeft:"2%"}}><b>Start Address:</b></label>
       
        
        
        <label for="exampleInputEmail1" class="form-label"style={{marginTop:"-15px",marginLeft:"2%"}}><b>Designation Address</b></label>
        <div class="location-input-container"><input autocomplete="new-password" style={{ borderColor:"black",marginBottom:"5%",height:"35px",width:"250px",marginTop:"3px",marginLeft:"2%"}}  class="ant-input ant-input-sm style_input__2eu5h style_small__1qEDn" type="text" value=""/></div>
         */}
        <div >
        
        <div style={{display:"inline-block"}}>
        
       
       
        <Profiledaterange3 />
        </div>

        {/* <div>
     
        <div style={{display:"inline-block",marginTop:"-35%"}} >
       
        <b style={{marginLeft:"85%"}}>Start Time</b>
        <input type="time" placeholder="7:30" style={{width:"250px",padding:"0.4rem",marginLeft:"95%",borderRadius:"3px",borderColor:"gray",marginTop:"5%"}}></input>
        </div>
        
        
        <div style={{display:"inline-block",marginLeft:"1.5%"}} >
       
        <b>End Time</b>
        <input type="time" placeholder="7:30" style={{width:"250px",padding:"0.4rem",marginLeft:"95%",borderRadius:"3px",borderColor:"gray",marginTop:"5%"}}></input>
       
        </div></div> */}
        
        </div>
       
        
       
        
        


        <div style={{ display: "inline-block", marginLeft: "18%", }} className='col-lg-3 row'><ButtonComponent className="e-control e-btn " disabled="true" onClick={handleClickOpen} style={{ marginLeft: "-85px",marginTop:"25%", backgroundColor: "#16b396", boxShadow: "0 2px 5px rgb(0 18 71 / 20%)", color: "white" }}>Create Manual Trip</ButtonComponent></div>
     
        {/* <div>
        <div class="ant-picker" style="width: 100%;"><div class="ant-picker-input"><input readonly="" placeholder="Select date" title="" size="12" value=""/><span class="ant-picker-suffix"><span role="img" aria-label="calendar" class="anticon anticon-calendar"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path></svg></span></span></div></div>
        </div> */}
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
