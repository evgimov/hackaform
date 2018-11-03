import React from "react";
import styled from "styled-components";

const SignupHeaderGroup = styled.div`
    background-color: #2D2D2D;
    width: 100%;

`
const NavigationGroup = styled.div`
`
const SignupTitleGroup = styled.div`
`
const SignupTitle = styled.h1`
    color: white;
`
const SignupSubtitle = styled.h3`
    color: white;
`

const SignupHeader = props => (
    <SignupHeaderGroup>
        <NavigationGroup></NavigationGroup>
        <SignupTitleGroup>
            <SignupTitle>Hackaform</SignupTitle>
            <SignupSubtitle>Build your dream team</SignupSubtitle>
        </SignupTitleGroup>
    </SignupHeaderGroup>
)

export default SignupHeader;