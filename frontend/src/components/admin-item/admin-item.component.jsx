import React from 'react'
import {useDispatch, useSelector} from "react-redux";

import { startRemoveProduct } from "../../redux/products/products.actions";
import { AdminItemContainer, ImageContainer, ItemNameContainer } from "./admin-item.styles";

const AdminItem = ({item}) => {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.user)
    return (
        <AdminItemContainer>
            <ImageContainer>
                <img src={item.image} alt=""/>
            </ImageContainer>
            <ItemNameContainer>{item.name}</ItemNameContainer>
            <ItemNameContainer>$ {item.price}</ItemNameContainer>
            <ItemNameContainer onClick={() => dispatch(startRemoveProduct(item._id, user.token))}><i className="fas fa-trash" /></ItemNameContainer>
        </AdminItemContainer>
    )
}

export default AdminItem