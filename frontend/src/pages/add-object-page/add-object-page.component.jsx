import React from 'react'

import AddProductForm from "../../components/add-product-form/add-product-form.component";
import { AddObjectContainer } from "./add-object-page.styles";

const AddObjectPage = () => {
    return (
        <div>
            <AddObjectContainer>Добавление продукта</AddObjectContainer>
            <AddProductForm />
        </div>
    )
}

export default AddObjectPage