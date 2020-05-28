import React from 'react'
import { withLoginRedirect } from '../../hoc/withAuthRedirect'

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

export default withLoginRedirect(Profile)