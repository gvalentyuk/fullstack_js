import React from 'react'
import { ReactComponent as Loader } from "../../assets/DarkLoader.svg";
import ReactDOM from 'react-dom'

import { LoaderContainer } from './loader.styles'

const LoaderBackdrop = () => {
    const content = <LoaderContainer>
        <Loader />
    </LoaderContainer>
    return ReactDOM.createPortal(content, document.getElementById('backdrop-hook'))
}

export default LoaderBackdrop