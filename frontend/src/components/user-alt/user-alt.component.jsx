import React from 'react'
import {useHistory} from "react-router-dom";

import { UserAltContainer, UserNameContainer } from './user-alt.styles'

const UserAlt = ({user}) => {
    const history = useHistory()
    return (
        <UserAltContainer>
            <UserNameContainer onClick={() => history.push(user.name?'/profile': '/login')}>
                <i className="fas fa-user-alt" /> {user.name? user.name: ''}
            </UserNameContainer>
        </UserAltContainer>
    )
}

export default UserAlt
