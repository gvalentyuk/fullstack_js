import React from 'react'

import ProductItem from "../product-item/product-item.component";
import { ProductListContainer } from "./product-list.styles";

const ProductList = ({products}) => {
    return (
        <ProductListContainer>
            {
                products.map(product => <ProductItem key={product._id} item={product} />)
            }
        </ProductListContainer>
    )
}

export default ProductList