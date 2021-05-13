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
import "./css/style.css";


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
              <div style={{marginLeft:"-100%"}}>   <b >First Name<span style={{color:"red"}}>*</span></b></div>
           
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                
                autoFocus
                style={{width:"200%",height:"20%",marginLeft:"-100%",placeholder:"1px"}}
                placeholder="Sathi"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <div style={{marginLeft:"10%"}}>   <b >Last Name<span style={{color:"red"}}>*</span></b></div>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                
                name="lastName"
                autoComplete="lname"
                style={{width:"200%",height:"20%",marginLeft:"10%"}}
                placeholder="New"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <div style={{marginLeft:"-100%"}}>   <b >Email<span style={{color:"red"}}>*</span></b></div>
              <TextField
              
                autoComplete="Email"
                name="Email"
                variant="outlined"
                required
                fullWidth
                id="Email"
                
                autoFocus
                style={{width:"200%",height:"20%",marginLeft:"-100%",marginTop:"5%", fontSize:"1px"}}
                placeholder="sathi.new.kliks@gmail.com"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <div style={{marginLeft:"10%"}}>   <b >Phone<span style={{color:"red"}}>*</span></b></div>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Phone"
              
                name="Phone"
                autoComplete="Phone"
                style={{width:"200%",height:"20%",marginLeft:"10%",marginTop:"5%",fontSize:"1px" }}
                placeholder="+919891929322"
                
              />
            </Grid>
            <FormControl variant="outlined" className={classes.formControl}>
            <div><b style={{marginLeft:"-193%"}}>Time zone<span style={{color:"red"}}>*</span></b></div>
        <InputLabel id="demo-simple-select-outlined-label"style={{marginLeft:"-150%",marginTop:"40%",fontSize:"1px"}}>Asia/Dubai(+04:00)</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          
          style={{width:"415%",marginLeft:"-195%",marginTop:"15%"}}
                
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
        <Grid item xs={6}>
        <div style={{marginLeft:"80%",marginBottom:"5%"}}>   <b  style={{marginLeft:"-40%",marginBottom:"10%"}}>Department<span style={{color:"red"}}>*</span></b></div>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Department"
                
                name="email"
                autoComplete="email"
                style={{width:"200%",marginLeft:"72%",marginTop:""}}
              />
            </Grid> 
            <Grid item xs={6}>
            <div style={{marginLeft:"-100%",marginBottom:"5%"}}>   <b >Employee<span style={{color:"red"}}>*</span></b></div>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Department"
                
                name="email"
                // autoComplete="email"
                style={{width:"202%",marginLeft:"-100%",marginTop:""}}
              />
            </Grid> 
            
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