import React from "react";
import {
    Container,
    ButtonMenu,
    FordLogo,
    SignUpText,
    NameText,
    InputName,
    EmailText,
    InputEmail,
    PassText,
    InputPass,
    ConfirmText,
    InputConfirmPass,
    ButtonSignUp,
    ButtonGoBack,
} from "./styled";

export const SignUp = () => {

    const [name, setName] = React.useState("")
    const [pass, setPass] = React.useState("")
    const [mail, setMail] = React.useState("")
    const [confirmPass, setConfirmPass] = React.useState("")

    const handleSignUp = () => {
        console.log(name)
        console.log(pass)
        console.log(mail)
        console.log(confirmPass)
    }

    return (
        <div
            style={{
                maxWidth: "420px",
                width: "100vw",
                margin: "auto",
                position: "relative",
            }}>
            <Container>
                <ButtonMenu />
                <FordLogo src="./images/FordLogo.png"></FordLogo>
                <SignUpText>SIGN UP</SignUpText>
                <NameText>NAME:</NameText>
                <InputName value={name} onChange={(e) => setName(e.target.value)}></InputName>
                <EmailText>EMAIL:</EmailText>
                <InputEmail value={mail} onChange={(e) => setMail(e.target.value)}></InputEmail>
                <PassText>PASSWORD:</PassText>
                <InputPass value={pass} onChange={(e) => setPass(e.target.value)}></InputPass>
                <ConfirmText>CONFIRM PASSWORD:</ConfirmText>
                <InputConfirmPass value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}></InputConfirmPass>
                <ButtonSignUp onClick={handleSignUp}>SIGN UP</ButtonSignUp>
                <ButtonGoBack></ButtonGoBack>
            </Container>
        </div>
    );
};

export default SignUp;
