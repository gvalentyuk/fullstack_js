import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import { startFetchingProductsAsync } from "../../redux/products/products.actions";
import LoaderBackdrop from "../../components/loader/loader.component";
import ProductList from "../../components/product-list/product-list.component";
import { HomepageContainer, PageNameContainer} from "./homepage.styles";

const HomePage = ({match}) => {
    const keyword = match.params.keyword
    const dispatch = useDispatch()
    const { productsLoading, products } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(startFetchingProductsAsync(keyword))
    }, [dispatch, keyword])

    return (
        <HomepageContainer>
            <PageNameContainer>ТОВАРЫ</PageNameContainer>
            {
                productsLoading? <LoaderBackdrop /> : <ProductList products={products}/>
            }
        </HomepageContainer>
    )
}
export default HomePage