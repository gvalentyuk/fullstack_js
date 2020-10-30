import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { logout } from "../../redux/user/user.actions";
import { AsideContainer, NameContainer, LinkContainer, NavContainer, AdminContainer } from './navigation.styles'

const Navigation = ({isDark}) => {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.user)
    return (
        <AsideContainer>
            <NameContainer isdark={isDark} to={'/'}>PROSHOP</NameContainer>
            <NavContainer>
                <LinkContainer to={'/'}><i className="fas fa-home"/>ГЛАВНАЯ</LinkContainer>
                <LinkContainer to={'/cart'}><i className="fas fa-cart-plus"/>КОРЗИНА</LinkContainer>
                {
                    user.name?
                        <LinkContainer to={'/login'} onClick={()=> dispatch(logout())}><i className="fas fa-sign-in-alt"/>ВЫЙТИ</LinkContainer>
                        :
                        <LinkContainer to={'/login'}><i className="fas fa-sign-in-alt"/>ВОЙТИ</LinkContainer>
                }
                {
                    user.isAdmin && <AdminContainer to={'/admin'}><i className="fas fa-lock"/>ADMIN</AdminContainer>
                }
            </NavContainer>
        </AsideContainer>
    )
}

export default Navigation