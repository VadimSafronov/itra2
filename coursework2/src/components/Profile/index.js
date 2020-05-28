import React from 'react'
import { withLoginRedirect } from '../../hoc/withAuthRedirect'
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
const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
    isAdmin: state.auth.isAdmin,
})

export default compose(connect(mapStateToProps), withLoginRedirect)(Profile)