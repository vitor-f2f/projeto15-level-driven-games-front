import React, { useContext, useEffect, useState } from "react";
import Placeholder from "../components/placeholder";
import { PagesContainer } from "../App";
import { styled } from "styled-components";
import Game from "./game";
import axios from "axios";
import Categorie from "./categorie";
import UserContext from "../components//usercontext.js";

export default function Home() {
    const [games, setGames] = useState([]);
    const [backup, setBackup] = useState([]);
    const categories = [
        "Ação",
        "Aventura",
        "RPG",
        "Sandbox",
        "Futurista",
        "Esporte",
        "Simulação",
        "Corrida",
        "Terror",
        "FPS",
        "Estratégia",
    ];
    const [filterSelected, setFilters] = useState([]);

    const userToken = localStorage.getItem("userToken");
    const userName = localStorage.getItem("userName");

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/games`, {
                headers: {
                    authorization: `Bearer ${userToken}`,
                },
            })
            .then((answer) => {
                setGames(answer.data);
                setBackup(answer.data);
            })
            .catch((answer) => {
                console.log(answer);
            });
    }, []);

    const filterGames = () => {
        if (filterSelected.length === 0) return setGames(backup);
        setGames(
            backup.filter((game) =>
                filterSelected.every((tag) => game.tags.includes(tag))
            )
        );
    };
    return (
        <PagesContainer>
            <Content>
                <Filter>
                    <div>
                        <ion-icon name="options-outline"></ion-icon>
                        <p>Filtros</p>
                    </div>
                    <ul>
                        {categories.map((categorie) => (
                            <Categorie
                                key={categorie}
                                categorie={categorie}
                                setFilters={setFilters}
                                filterSelected={filterSelected}
                            />
                        ))}
                    </ul>
                    <button onClick={() => filterGames(filterSelected)}>
                        Filtrar
                    </button>
                </Filter>
                <ProductsContainer>
                    <ul>
                        {games.map((game) => (
                            <Game key={game.id} game={game} />
                        ))}
                    </ul>
                </ProductsContainer>
            </Content>
        </PagesContainer>
    );
}

const Content = styled.section`
    width: 100%;
    padding-top: 150px;
    gap: 5px;

    display: flex;
    justify-content: center;
`;

const ProductsContainer = styled.article`
    width: 60%;
    padding: 30px;

    border: 1px solid #0e3b4a;
    border-radius: 10px;
    box-shadow: 0px 0px 300px (#02141a, 0px 0px 10px #0e3b4a inset);
    background: linear-gradient(#021419, #082d3a);

    ul {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
`;

const Filter = styled.article`
    min-width: 240px;
    max-width: 240px;
    height: 100%;
    margin-left: -240px;
    padding: 15px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border: 1px solid #0e3b4a;
    border-radius: 10px;
    box-shadow: 0px 0px 300px (#02141a, 0px 0px 10px #0e3b4a inset);
    background: linear-gradient(#021419, #082d3a);

    & > div:first-child {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;

        font-family: "Oswald", "Times New Roman";
        font-size: 22px;
        font-weight: bold;
        color: #fff;
        text-align: left;
        letter-spacing: 1px;

        ion-icon {
            font-size: 30px;
            color: #fff;
        }
    }
    ul {
        margin-top: 10px;
        margin-bottom: 10px;
        li {
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 10px;
        }

        font-family: "Oswald", "Times New Roman";
        font-size: 15px;
        font-weight: 600;
        color: #fff;
        text-align: left;
        letter-spacing: 1px;
    }

    button {
        width: 70px;
        height: 30px;

        border: none;
        border-radius: 5px;
        background: #ff4791;

        color: #fff;
        font-family: "Oswald", "sans-serif";
        font-size: 12px;
        font-weight: 600;
        align-self: start;
        &:hover {
            background-color: #ee0060;
            cursor: pointer;
        }
    }
`;
