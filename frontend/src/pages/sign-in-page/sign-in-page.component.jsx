import React from 'react'

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {PageNameContainer} from "./sign-in-styles";

const SignInPage = () => {
    return (
        <div>
            <PageNameContainer>ВОЙТИ</PageNameContainer>
            <SignInForm/>
        </div>
    )
}

export default SignInPage