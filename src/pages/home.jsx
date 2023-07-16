import React, { useContext, useEffect, useState } from "react";
import Placeholder from "../components/placeholder";
import { PagesContainer } from "../App";
import { styled } from "styled-components";
import Game from "./game";

export default function Home() {
  const [games, setGames] = useState([
    {
      name: "The Last of Us I",
      img: "https://jovemnerd.com.br/wp-content/uploads/2022/11/the_last_of_us__2uy7m1.png",
      price: "R$ 200,00",
      id: "1",
    },
    {
      name: "God of War 4",
      img: " https://upload.wikimedia.org/wikipedia/pt/8/82/God_of_War_2018_capa.png",
      price: "R$ 250,00",
      id: "2",
    },
  ]);
  return (
    <PagesContainer>
      <Content>
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

const Content = styled.div`
  width: 100%;
  padding-top: 150px;

  display: flex;
  justify-content: center;
`;

const ProductsContainer = styled.section`
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

//Exemplo de um container de jogos baseado na cor roxa de fundo
const exemple = styled.article`
  width: 40%;
  border: 1px solid #ac1495;
  border-radius: 10px;
  box-shadow: 0px 0px 300px #640f57, 0px 0px 10px #ac1495 inset;
  background: linear-gradient(#640f57, #ac1495);
`;
