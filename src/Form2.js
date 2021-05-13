import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    height: "20",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        {/* <Typography component="h1" variant="h5">
          Sign up
        </Typography> */}
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div style={{marginLeft:"-100%"}}>
              <b >Address <snap style={{color:"red"}}>*</snap></b>
              </div>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                
                autoFocus
                style={{width:"200%",height:"20%",marginLeft:"-100%",placeholder:"1px"}}
                placeholder="S Shore Rd"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <b style={{marginLeft:"10%",marginBottom:"-10%"}}>Address2<span style={{color:"red"}}>*</span></b>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
               
              
                name="lastName"
                autoComplete="lname"
                style={{width:"200%",height:"20%",marginLeft:"10%"}}
                placeholder="Ohio Ave"
              />
            </Grid>
           
            
            <FormControl  style={{marginTop:"3%"}} variant="outlined" className={classes.formControl}>
              <div style={{marginBottom:"-10%"}}>
              <b style={{marginLeft:"-230%"}}>Country<span style={{color:"red"}}>*</span></b>
              </div>
        <InputLabel id="demo-simple-select-outlined-label"style={{marginLeft:"-220%",marginTop:"60%"}}>Canada</InputLabel>

        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          
          style={{width:"489%",marginLeft:"-233%",marginTop:"29%"}}
                
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
       
            <Grid item xs={12} sm={6}>
            
              <div style={{marginLeft:"80%"}}>
                <b>State<spna style={{color:"red"}} >*</spna></b>
              </div>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
              
                autoFocus
                style={{width:"200%",height:"20%",marginLeft:"80%",placeholder:"1px",marginTop:"8%"}}
                placeholder="New Jersey"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{marginLeft:"-100%"}}> <b>City<span style={{color:"red"}}> *</span></b></div>
           
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                
                autoFocus
                style={{width:"200%",height:"20%",marginLeft:"-100%",placeholder:"1px",marginTop:"8%"}}
                placeholder="Canada"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <b style={{marginLeft:"10%"}}>Zip Code <span style={{color:"red"}}> *</span></b>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label=""
                autoFocus
                style={{width:"200%",height:"20%",marginLeft:"10%",placeholder:"1px",marginTop:"8%"}}
                placeholder="028021"
              />
            </Grid>
            

            {/* {/* <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="State"
                name="lastName"
                autoComplete="lname"
                style={{width:"200%",height:"20%",marginLeft:"10%",marginTop:"8%"}}
                placeholder="New jersey"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="City"
                autoFocus
                style={{width:"200%",height:"20%",marginLeft:"-100%",placeholder:"1px",marginTop:"8%"}}
                placeholder="New Jersey"
              />
            </Grid> 
            
            
            {/* <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Phone"
                label="State"
                name="Phone"
                autoComplete="Phone"
                style={{width:"200%",height:"20%",marginLeft:"10%",marginTop:"5%"}}
                placeholder="New Jersey"
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="City"
                label="State"
                name="Phone"
                autoComplete="Phone"
                style={{width:"200%",height:"20%",marginLeft:"-10%",marginTop:"5%"}}
                placeholder="Kanpur"
                
              />
               <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Phone"
                label="Zip code"
                name="Phone"
                autoComplete="Phone"
                style={{width:"200%",height:"20%",marginLeft:"10%",marginTop:"5%"}}
                placeholder="08201"
                
              />
            </Grid>
            </Grid> */}
            {/* <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label"style={{marginLeft:"-220%",marginTop:"20%"}}>Asia/Dubai(+04:00)</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Time Zone"
          style={{width:"489%",marginLeft:"-230%",marginTop:"15%"}}
                
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Department"
                label="Department"
                name="email"
                autoComplete="email"
                style={{width:"200%",marginLeft:"80%",marginTop:""}}
              />
            </Grid>  */}
            {/* <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Department"
                label="Employee No"
                name="email"
                // autoComplete="email"
                style={{width:"202%",marginLeft:"-100%",marginTop:""}}
              />
            </Grid>  */}
            
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid> */}
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid> */}
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button> */}
          <Grid container justify="flex-end">
            <Grid item>
              {/* <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}