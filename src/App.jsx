import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import Account from "./pages/account";
import Product from "./pages/product";
import TopBar from "./components/topbar";
import UserContext from "./components/usercontext";

export default function App() {
    const [userData, setUserData] = useState(null);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </UserContext.Provider>
    );
}

function AppContent() {
    const location = useLocation();
    const hideBar =
        ["/signup"].includes(location.pathname) ||
        ["/"].includes(location.pathname);

    return (
        <>
            {!hideBar && <TopBar />}
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/produto/:id" element={<Product />} />
                <Route path="/account" element={<Account />} />
            </Routes>
        </>
    );
}

export const PagesContainer = styled.main`
    background-color: #021419;
    width: calc(100vw - 50px);
    min-height: 100vh;
    padding: 0 25px;
    input {
        height: 52px;
        border-radius: 8px;
        padding-left: 14px;
        border: none;
        background-color: white;
    }
    a {
        text-decoration: underline;
        color: white;
        font-size: 14px;
        font-weight: 400;
    }
`;
