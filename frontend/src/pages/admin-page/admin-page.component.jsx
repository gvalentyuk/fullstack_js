import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'

import { startFetchingProductsAsync } from "../../redux/products/products.actions";
import AdminProductList from "../../components/admin-product-list/admin-product-list.component";
import {AdminHeaderContainer} from "./admin-page.styles";

const AdminPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { user } = useSelector(state => state.user)

    useEffect(()=>{
        dispatch(startFetchingProductsAsync())
    }, [dispatch])

    if(!user.isAdmin) {
        return history.push('/')
    }

    return (
        <>
            <AdminHeaderContainer>Панель администратора</AdminHeaderContainer>
            <AdminProductList />
        </>
    )
}

export default AdminPage