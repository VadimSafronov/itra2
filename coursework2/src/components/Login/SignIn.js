import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Field, reduxForm } from 'redux-form'
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { renderField } from '../../validation/Fields'
import { Link as RouterLink } from 'react-router-dom'
import { required, maxLengthCreator } from '../../validation/validator'
import MuiAlert from '@material-ui/lab/Alert'
import translate from '../../localizations/translate'
import Snackbar from '@material-ui/core/Snackbar'
import { ErrorAlert } from '../../validation/ErrorAlert'
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const errorsCode = [500, 204, 403]
const maxLength20 = maxLengthCreator(20)

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const SignIn = (props) => {
  const classes = useStyles()
  const errorCode = errorsCode.find((error) => error === props.error)

  return (
    <Container onSubmit={props.handleSubmit} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        {/* <Typography component="h1" variant="h5">
        {translate('sign.logo')}
        </Typography> */}
        <form className={classes.form} noValidate>
          <Field
            variant="outlined"
            margin="normal"
            required
            fullWidth
            component={renderField}
            id="login"
            label={translate('sign.login')}
            name="login"
            validate={[required, maxLength20]}
            autoComplete="off"
            autoFocus
          />
          <Field
            variant="outlined"
            margin="normal"
            required
            fullWidth
            component={renderField}
            name="password"
            label={translate('sign.password')}
            type="password"
            id="password"
            validate={[required, maxLength20]}
            autoComplete="off"
          />
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={props.isFetching}
          >
              {translate('sign.logo')}
          </Button>
          
          <Grid container>
            
            <Grid item>
              <Link component={RouterLink} to="/registration" variant="body2" disabled={props.isFetching} >
              {translate('sign.signUp')}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        
      </Box>
      {props.error && (
                <Snackbar open={true} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert severity='error'>{translate('sign.error')}</Alert>
                </Snackbar>
            )}

      {errorCode && <ErrorAlert error={'sign.error' + errorCode} />}
    </Container>
  );
}
const mapStateToProps = (state) => ({
  isFetching: state.auth.isFetching,
})

export default compose(connect(mapStateToProps), reduxForm({ form: 'login' }))(SignIn)