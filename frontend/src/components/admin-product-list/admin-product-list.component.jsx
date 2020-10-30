import React from 'react'
import {useSelector} from "react-redux";
import { useHistory } from 'react-router-dom'

import CustomButton from "../custom-button/custom-button.component";
import AdminItem from "../admin-item/admin-item.component";

import { ProductListContainer, AdminListContainer } from "./admin-product-list.styles";

const AdminProductList = () => {
    const history = useHistory()
    const {products} = useSelector(state => state.products)

    return (
        <AdminListContainer>
            <ProductListContainer>
                <p>Список продуктов:</p>
                <CustomButton onClick={() => history.push('/add_object')}>Добавить продукт</CustomButton>
            </ProductListContainer>
            {
                products.map(item => <AdminItem key={item._id} item={item}/>)
            }
        </AdminListContainer>
    )
}

export default AdminProductList