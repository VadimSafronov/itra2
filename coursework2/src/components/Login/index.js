import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SignIn from './SignIn'
import { connect } from 'react-redux'
import { login } from '../../Redux/authReducer'
import { withLoginRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

const Login = (props) => {
    

    return (
        
            
            

                

                <SignIn onSubmit={props.login} />
        
        
    )
}

export default compose(connect(null, { login }), withLoginRedirect)(Login)