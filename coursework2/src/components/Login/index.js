import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "./SignIn";
import { connect } from "react-redux";
import { login } from "../../Redux/authReducer";
import { withLoginRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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
}));

const Login = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.loginContainer}>
      
        <SignIn onSubmit={props.login} />
       
      </div>
      
    </div>
    
  );
};

export default compose(connect(null, { login }), withLoginRedirect)(Login);
