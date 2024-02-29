import React from "react";
import {
    Container,
    ButtonMenu,
    FordLogo,
    SignUpText,
    EmailText,
    InputEmail,
    PassText,
    InputPass,
    ButtonSignUp,
    ButtonGoBack,
} from "./styled";

export const Login = () => {

    const [mail, setMail] = React.useState("")
    const [pass, setPass] = React.useState("")

    const HandleClick = () => {
        console.log(mail)
        console.log(pass)
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
                <SignUpText>LOGIN</SignUpText>
                <EmailText>EMAIL:</EmailText>
                <InputEmail value={mail} onChange={(e) => setMail(e.target.value)}></InputEmail>
                <PassText>PASSWORD:</PassText>
                <InputPass value={pass} onChange={(e) => setPass(e.target.value)}></InputPass>
                <ButtonSignUp onClick={HandleClick}>LOGIN</ButtonSignUp>
                <ButtonGoBack></ButtonGoBack>
            </Container>
        </div>
    );
};

export default Login;
