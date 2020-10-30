import React from 'react'
import { useHistory } from 'react-router-dom'

import { ProfileItemContainer, ButtonContainer } from "./ProfileItem.styles";

const ProfileItem = ({order}) => {
    const history = useHistory()
    return (
        <ProfileItemContainer>
            <p>{order._id}</p>
            <p>{order.paymentMethod}</p>
            <p>$ {order.totalPrice}</p>
            <ButtonContainer onClick={() => history.push(`/order/${order._id}`)}>Подробнее</ButtonContainer>
        </ProfileItemContainer>
    )
}

export default ProfileItem