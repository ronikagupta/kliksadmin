import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#16B396',
    borderColor: '#16B396',
    marginTop:'10%',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#16B396',
      borderColor: '#16B396',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#16B396',
      borderColor: '#16B396',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      {/* <ColorButton variant="contained" color="primary" className={classes.margin}>
        Custom CSS
      </ColorButton> */}
      <ThemeProvider theme={theme}>
        <Button style={{backgroundColor:"#16b363"}} variant="contained" color="" className={classes.margin}>
          Update Profile
        </Button>
      </ThemeProvider>
      {/* <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
        Bootstrap
      </BootstrapButton> */}
    </div>
  );
}