import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial, sans-serif;
`;

const Message = styled.h1`
    font-size: 24px;
    text-align: center;
`;

export default function Placeholder() {
    return (
        <Container>
            <Message>Pagina em Construção</Message>
        </Container>
    );
}
