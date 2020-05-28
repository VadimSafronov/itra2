import React from 'react'
import { withLogoutRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { connect } from 'react-redux'

const Profile = (props) => {
    return (
        <div>
            Profile
            <br />
            Profile
            <br />
            Profile
            <br />
            Profile
            <br />
            Profile
            <br />
            Profile
            <br />
        </div>
    )
}

export default compose(connect(mapStateToProps), withLogoutRedirect)(Profile)