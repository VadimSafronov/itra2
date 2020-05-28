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
            clientId='527766057569-8f4bb7p9vtnj310cno38n0jogvb5fhaj.apps.googleusercontent.com'
            render={(renderProps) => <GoogleButton {...renderProps} />}
            onSuccess={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}
export default connect(null, { socialLogin })(GoogleAuth)