import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import FacebookButton from './FacebookButton'
import { connect } from 'react-redux'
import { socialLogin } from '../../../Redux/authReducer'

const FacebookAuth = (props) => {
    const responseFacebook = (response) => {
        const socialId = response.id
        const name = response.name
        props.socialLogin(socialId, name)
    }

    return (
        <FacebookLogin
            appId='2678380369063016'
            fields='name'
            callback={responseFacebook}
            render={(renderProps) => <FacebookButton {...renderProps} />}
        />
    )
}
export default connect(null, { socialLogin })(FacebookAuth)