import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SignIn from './SignIn'
import { connect } from 'react-redux'
import { login } from '../../Redux/authReducer'
import { withLoginRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import GoogleAuth from './GoogleAuth'


const useStyles = makeStyles((theme) => ({
socialGroup: {
    marginBottom: 31,
    display: 'flex',
    justifyContent: 'space-between',
},
}))

const Login = (props) => {
    const classes = useStyles()

    return (
        
            <div>
            

                

            

                <div className={classes.socialGroup}>
                <GoogleAuth />
                </div>
                <SignIn onSubmit={props.login} />
                </div>
        
        
    )
}

export default compose(connect(null, { login }), withLoginRedirect)(Login)