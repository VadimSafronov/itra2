import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { registration } from '../../Redux/authReducer'
import { withLoginRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import Typography from '@material-ui/core/Typography';
import translate from '../../localizations/translate'
import SignUp from './SignUp'



const Registration = (props) => {


    return (
       
                <SignUp onSubmit={props.registration} />
            
    )
}

export default compose(connect(null, { registration }), withLoginRedirect)(Registration)