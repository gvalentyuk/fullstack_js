import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

import { startRequestProfileAsync } from "../../redux/user/user.actions";
import ProfileItem from "../../components/profile-item/ProfileItem.component";
import LoaderBackdrop from "../../components/loader/loader.component";
import {
    UserProfilePage, ProfileHeaderContainer, InformationContainer,
    UserInformationContainer, UserContainer, OrdersContainer
} from "./user-profile.styles";

const UserProfile = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { profile, profileLoading, user} = useSelector(state => state.user)

    useEffect(() => {
        dispatch(startRequestProfileAsync(user.token))
    }, [dispatch, user.token])

    if(!user.name) {
        history.push('/')
    }

    if(profileLoading) {
        return <LoaderBackdrop />
    }

    return (
        <UserProfilePage>
            <ProfileHeaderContainer>Профиль</ProfileHeaderContainer>
            <InformationContainer>
                <UserContainer>
                    <UserInformationContainer>
                        <h4>Имя:</h4>
                        <p>{profile.profile.name}</p>
                    </UserInformationContainer>
                    <UserInformationContainer>
                        <h4>Электронная почта:</h4>
                        <p>{profile.profile.email}</p>
                    </UserInformationContainer>
                </UserContainer>
                <OrdersContainer>
                    <h3>Заказы:</h3>
                    {
                        profile.orders.map(item => {
                            return <ProfileItem order={item}/>
                        })
                    }
                </OrdersContainer>
            </InformationContainer>
        </UserProfilePage>
    )
}

export default UserProfile