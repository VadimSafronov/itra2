import React from 'react'
import GoogleLogin from 'react-google-login'
import GoogleButton from './GoogleButton'
import { connect } from 'react-redux'
import { socialLogin } from '../../../Redux/authReducer'

const GoogleAuth = (props) => {
    const responseGoogle = (response) => {
        const socialId = response.profileObj.googleId
        const name = response.profileObj.givenName
        props.socialLogin(socialId, name)
    }

    return (
        <GoogleLogin
            clientId='211266093621-09s90npl4pu6ruv3hrvvc3v9ttqh1q5g.apps.googleusercontent.com'
            render={(renderProps) => <GoogleButton {...renderProps} />}
            onSuccess={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}
export default connect(null, { socialLogin })(GoogleAuth)