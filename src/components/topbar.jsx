import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "./usercontext";
import dplus from "../assets/driven.svg";
import axios from "axios";

export default function TopBar() {
    const { userData, setUserData } = useContext(UserContext);
    const userToken = localStorage.getItem("userToken");
    const userName = localStorage.getItem("userName");

    const [cartItems, setCart] = useState([]);
    const [userBalance, setBalance] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const [showUser, setShowUser] = useState(false);

    useEffect(() => {
        if (userToken) {
            getCart();
        }
    }, [userToken]);

    const getCart = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/cart`,
                { headers: { Authorization: `Bearer ${userToken}` } }
            );
            setCart(response.data.cart);
            setBalance(response.data.balance);
            setUserData({
                ...userData,
                balance: response.data.balance,
                cart: response.data.cart,
            });
        } catch (error) {
            console.log("Erro ao buscar carrinho:", error);
        }
    };

    const hoverOnUser = () => {
        setShowUser(true);
    };

    const hoverOffUser = () => {
        setShowUser(false);
    };

    const hoverOnCart = () => {
        setShowCart(true);
    };

    const hoverOffCart = () => {
        setShowCart(false);
    };

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
                    <ion-icon
                        name="person-outline"
                        onMouseEnter={hoverOnUser}
                        onMouseLeave={hoverOffUser}
                    ></ion-icon>
                    <ion-icon
                        name="cart-outline"
                        onMouseEnter={hoverOnCart}
                        onMouseLeave={hoverOffCart}
                    ></ion-icon>
                </article>
                <UserContainer>
                    {showUser && <UserTooltip></UserTooltip>}
                </UserContainer>
                <CartContainer>
                    {showCart && (
                        <CartTooltip>
                            {cartItems.length === 0 ? (
                                <span>Adicione produtos ao carrinho</span>
                            ) : (
                                cartItems.map((item) => (
                                    <CartItem key={item.id}>
                                        {item.name}
                                    </CartItem>
                                ))
                            )}
                        </CartTooltip>
                    )}
                </CartContainer>
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
        width: 80%;
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
            size: 40px;
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

const CartContainer = styled.article`
    position: absolute;
    top: 0px;
    right: 48px;
    display: flex;
    width: 340px;
    font-family: "Oswald";
`;

const CartTooltip = styled.div`
    position: absolute;
    right: 20px;
    top: 80px;
    color: white;
    border-radius: 4px;
    border: 1px solid #0e3b4a;
    border-radius: 10px;
    box-shadow: 0px 0px 300px (#02141a, 0px 0px 10px #0e3b4a inset);
    background: linear-gradient(#021419, #082d3a);
    padding: 10px;
    z-index: 10;
    span {
        text-align: center;
    }
`;

const CartItem = styled.div``;

const UserContainer = styled.article`
    position: absolute;
    top: 0px;
    right: 120px;
    display: flex;
    width: 250px;
    font-family: "Oswald";
`;

const UserTooltip = styled.div`
    position: absolute;
    right: 20px;
    top: 80px;
    width: 250px;
    color: white;
    border-radius: 4px;
    border: 1px solid #0e3b4a;
    border-radius: 10px;
    box-shadow: 0px 0px 300px (#02141a, 0px 0px 10px #0e3b4a inset);
    background: linear-gradient(#021419, #082d3a);
    padding: 10px;
    z-index: 10;
    span {
        text-align: center;
    }
`;
