import React from 'react';

import { Container, Code, QRCode, Nav, NavItem, NavText, SignOutButton, SignOutText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu({translateY}) {
    return (
        <Container style={
            {
                opacity: translateY.interpolate({
                    inputRange: [0, 150],
                    outputRange: [0, 1],

                })
            }
        }>
            <Code>
                <QRCode>Vale um Qrcode</QRCode>
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="attach-money" size={20} color="#FFF" />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="attach-money" size={20} color="#FFF" />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="attach-money" size={20} color="#FFF" />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="attach-money" size={20} color="#FFF" />
                    <NavText>Me ajuda</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {}}>
                <SignOutText>SAIR DO APP</SignOutText>
            </SignOutButton>
        </Container>
    );
}