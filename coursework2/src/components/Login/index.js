import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "./SignIn";
import { connect } from "react-redux";
import { login } from "../../Redux/authReducer";
import { withLoginRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import GoogleAuth from "./GoogleAuth";
import FacebookAuth from './FacebookAuth';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 64px)",
    minHeight: 305,
    marginTop: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      height: "calc(100vh - 128px)",
      marginTop: 113,
    },
  },
  loginContainer: {
    width: 362,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: "0 30px",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  socialGroup: {
    marginRight: 18,
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Login = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.loginContainer}>
      <Typography component="h1" variant="h5">
        {translate('sign.logo')}
        </Typography>
      <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
      <div className={classes.socialGroup}>
          <GoogleAuth />
          <FacebookAuth />
        </div>
      
        <SignIn onSubmit={props.login} />
       
      </div>
      
   </div> 
    
  );
};

export default compose(connect(null, { login }), withLoginRedirect)(Login);
