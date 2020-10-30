import React from 'react'

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {PageNameContainer} from "./sign-up-page.styles";

const SignUpPage = () => {
    return (
        <div>
            <PageNameContainer>ЗАРЕГИСТРИРОВАТЬСЯ</PageNameContainer>
            <SignUpForm/>
        </div>
    )
}

export default SignUpPage