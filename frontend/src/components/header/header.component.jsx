import React from 'react'
import { useSelector } from "react-redux";

import SearchInput from "../search-input/search-input.component";
import UserAlt from "../user-alt/user-alt.component";

import { HeaderContainer } from './header.styles'

const Header = () => {
    const {user} = useSelector(state => state.user)
    return (
        <HeaderContainer>
            <SearchInput />
            <UserAlt user={user}/>
        </HeaderContainer>
    )
}

export default Header