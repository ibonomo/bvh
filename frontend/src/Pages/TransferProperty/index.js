import React from "react";
import {
    Container,
    ButtonMenu,
    TransferText,
    DivCar,
    CarImage,
    NameCar,
    TypeCar,
    DivOwner,
    OwnerText,
    OwnerTextName,
    PlaqueNumber,
    PlaqueText,
    StatsPanel,
    TransferToText,
    DivNewOwner,
    NewOwnerText,
    WalletText,
    AlertText,
    InputConfirmPass,
    ButtonSignUp,
    ButtonGoBack,
} from "./styled";

export const TransferProperty = () => {
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
                <TransferText>TRANSFER PROPERTY</TransferText>
                <DivCar></DivCar>
                <CarImage src="./images/carTerritoryMini.png"></CarImage>
                <NameCar>TERRITORY</NameCar>
                <TypeCar>SEL TURBO ECOBOOST</TypeCar>
                <DivOwner></DivOwner>
                <OwnerText>OWNER:</OwnerText>
                <OwnerTextName>RAPHAEL BRAGA</OwnerTextName>
                <PlaqueNumber></PlaqueNumber>
                <PlaqueText>HHH-0H00</PlaqueText>
                <StatsPanel></StatsPanel>
                <TransferToText>TRANSFER TO:</TransferToText>
                <DivNewOwner></DivNewOwner>
                <NewOwnerText>NEW OWNER:</NewOwnerText>
                <WalletText>WALLET:</WalletText>
                <AlertText>Alert! This Operation is irreversible!!!</AlertText>

                <InputConfirmPass></InputConfirmPass>
                <ButtonSignUp>TRANSFER</ButtonSignUp>
                <ButtonGoBack></ButtonGoBack>
            </Container>
        </div>
    );
};

export default TransferProperty;
