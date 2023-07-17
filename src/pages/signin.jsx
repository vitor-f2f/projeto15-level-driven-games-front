import styled from "styled-components";
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import dplus from "../assets/driven.svg";

export default function SignIn() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");

    function validateEmail(email) {
        const emailRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return emailRegex.test(email);
    }

    function sendSignIn() {
        setLoading(true);
        if (userEmail === "" || userPassword === "") {
            alert("Preencha todos os dados para prosseguir.");
            setLoading(false);
            return;
        }
        if (!validateEmail(userEmail)) {
            alert("Endereço de email inválido");
            setLoading(false);
            return;
        }
        const loginObj = {
            email: userEmail,
            password: userPassword,
        };
        console.log(loginObj);
        const promise = axios.post(
            `${import.meta.env.VITE_API_URL}/signin`,
            loginObj
        );
        promise
            .then((res) => {
                const r = res.data;
                console.log(r);
                setUserData({
                    userToken: r.token,
                    userName: r.name,
                });
                const loginData = {
                    savedEmail: userEmail,
                    savedPassword: userPassword,
                };
                localStorage.setItem("loginData", JSON.stringify(loginData));
                localStorage.setItem("userToken", r.token);
                localStorage.setItem("userName", r.name);
                navigate("/home");
            })
            .catch((err) => {
                console.log(err);
                alert(`Erro ${err.response.status}`);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <SignInContainer>
            <Logo>
                <p>
                    Level-Driven <br /> Games
                </p>
                <img src={dplus} alt="" />
            </Logo>
            <Form>
                <input
                    type="text"
                    placeholder="E-mail"
                    onChange={(event) => setEmail(event.target.value)}
                    disabled={loading}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={(event) => setPassword(event.target.value)}
                    disabled={loading}
                />
                <button onClick={sendSignIn}>Entrar</button>
                <Link to={"/signup"}>
                    Ainda não possui uma conta? Cadastre-se!
                </Link>
            </Form>
        </SignInContainer>
    );
}

const SignInContainer = styled.div`
    background-color: #021419;
    width: calc(100vw - 50px);
    min-height: 100vh;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Oswald";
    font-size: 24px;
    font-weight: 600;
    input {
        height: 52px;
        border-radius: 8px;
        padding-left: 14px;
        border: none;
        background-color: white;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: none;
        height: 52px;
        background-color: #ff4791;
        color: white;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
    }
    a {
        text-decoration: none;
        color: white;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
    }
`;
const Logo = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 20px;
    p {
        color: white;
        text-align: center;
    }
    img {
        width: 90px;
    }
`;
const Form = styled.div`
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 16px;
    margin-bottom: 50px;
`;
