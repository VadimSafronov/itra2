import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../validation/validator'
import { renderField } from '../../validation/Fields'
import translate from '../../localizations/translate'
import MuiAlert from '@material-ui/lab/Alert'
import { ErrorAlert } from '../../validation/ErrorAlert'
import Snackbar from '@material-ui/core/Snackbar'
import { compose } from 'redux'
import { connect } from 'react-redux'


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
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const errorsCode = [500, 204]
const maxLength20 = maxLengthCreator(20)

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const SignUp = (props) => {
  const classes = useStyles()
    const errorCode = errorsCode.find((error) => error === props.error)

  return (
    <Container onSubmit={props.handleSubmit} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        {translate('signup.logo')}
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <Field
                variant="outlined"
                required
                fullWidth
                id="login"
                component={renderField}
                label={translate('sign.login')}
                validate={[required, maxLength20]}
                name="login"
                autoComplete="login"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                variant="outlined"
                required
                fullWidth
                name="password"
                component={renderField}
                label={translate('sign.password')}
                type="password"
                id="password"
                validate={[required, maxLength20]}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={props.isFetching}
          >
            {translate('signup.logo')}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/login" variant="body2" disabled={props.isFetching}>
              
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        
      </Box>
      

        {errorCode && <ErrorAlert error={'signup.error' + errorCode} />}
    </Container>
  );
}
const mapStateToProps = (state) => ({
  isFetching: state.auth.isFetching,
})


export default compose(
  connect(mapStateToProps),
  reduxForm({ form: 'registration' })
)(SignUp)
