import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "./usercontext";
import dplus from "../assets/driven.svg";

export default function TopBar() {
    const { userData } = useContext(UserContext);
    return (
        <TopContainer>
            <div>
                <Logo>
                    <p>
                        Level-Driven <br /> Games
                    </p>
                    <img src={dplus} alt="" />
                </Logo>
                <Form>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Pesquisar..."
                    ></input>
                    <ion-icon name="search-outline"></ion-icon>
                </Form>
                <article>
                    <ion-icon name="cart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </article>
            </div>
        </TopContainer>
    );
}

const TopContainer = styled.nav`
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #082d3a;
    font-size: 25px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    div {
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    img {
        margin-right: 18px;
        border-radius: 50px;
        height: 51px;
        width: 51px;
    }

    article {
        height: 30px;
        gap: 10px;
        display: flex;
        align-items: center;

        ion-icon {
            size: 100%;
        }
    }
`;

const Logo = styled.div`
    max-width: 215px;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    p {
        color: white;
        text-align: center;
        font-family: "Oswald";
        font-size: 24px;
        font-weight: 600;
    }
    img {
        width: 90px;
        margin-right: 0px;
        border-radius: 0px;
    }
`;

const Form = styled.form`
    width: auto;
    height: 30px;
    gap: 5px;

    display: flex;
    align-items: center;

    input {
        width: 300px;
        height: 100%;
        border: none;
        border-radius: 5px;
        padding-left: 5px;

        font-size: 15px;
        color: #000;
    }

    ion-icon {
        size: 100%;
    }
`;
