import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PagesContainer } from "../App";
import styled from "styled-components";
import UserContext from "../components/usercontext";

export default function Product() {
  const userToken = localStorage.getItem("userToken");
  const params = useParams();
  const { game, setGame } = useContext(UserContext);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    console.log(params);
    getGame(params.id)
  }, []);

  function getGame(id) {
    axios
      .get(`${import.meta.env.VITE_API_URL}/game/:${id}`, {
        headers: {
          authorization: `Bearer ${userToken}`,
        },
      })
      .then((answer) => {
        setGame(answer.data);
        setTags(answer.data.tags);
        console.log(answer.data);
      })
      .catch((answer) => console.log(answer));
  };

  if (game.length !== 0) {
    return (
      <PagesContainer>
        <Container>
          <div>
            <Content>
              <figure>
                <img src={game.picture} alt={game.name} />
              </figure>
              <div>
                <h1>{game.name}</h1>
                <p>Data de lançamento: {game.date}</p>
                <p>Descrição: {game.description}</p>
                <p>Gêneros: {tags.join(", ")}</p>
              </div>
            </Content>
            <BuyContainer>
              <div>
                <h3>{game.price}</h3>
                <p>À vista ou Parcelado</p>
              </div>
              <button>Adicionar ao Carrinho</button>
            </BuyContainer>
          </div>
          <Requirements>
            <h2>Requisitos do Sistema</h2>
            <article>
              <p>Processador</p>
              <p>Placa de Vídeo</p>
              <p>Memória RAM</p>
              <p>Espaço em disco</p>
            </article>
            <div></div>
            <article>
              <p>{game.requirements.cpu}</p>
              <p>{game.requirements.gpu}</p>
              <p>{game.requirements.ram}</p>
              <p>{game.requirements.mb}</p>
            </article>
          </Requirements>
        </Container>
      </PagesContainer>
    );
  }
}

const Container = styled.section`
  width: 100%;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
  }
`;

const Content = styled.article`
  width: 70%;
  height: 300px;
  display: flex;
  gap: 20px;

  border: 1px solid #0e3b4a;
  border-radius: 10px;
  box-shadow: 0px 0px 300px (#02141a, 0px 0px 10px #0e3b4a inset);
  background: linear-gradient(#021419, #082d3a);

  figure {
    width: 300px;
    height: 100%;
    img {
      height: 100%;
      border-radius: 10px;
    }
  }

  div {
    width: 50%;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    h1 {
      font-family: "Oswald", "Times New Roman";
      font-size: 30px;
      font-weight: 600;
      color: #fff;
      text-align: left;
      letter-spacing: 1px;
    }
    p {
      font-family: "Oswald", "Times New Roman";
      font-size: 15px;
      font-weight: 400;
      color: #fff;
      text-align: left;
      letter-spacing: 1px;
    }
  }
`;

const BuyContainer = styled.article`
  width: 300px;
  height: 300px;
  padding: 50px 20px 50px 20px;
  gap: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 1px solid #0e3b4a;
  box-shadow: 0px 0px 300px (#02141a, 0px 0px 10px #0e3b4a inset);
  background: linear-gradient(#021419, #082d3a);
  border-radius: 10px;

  h3 {
    font-family: "Oswald", "Times New Roman";
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    text-align: left;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  p {
    font-family: "Oswald", "Times New Roman";
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    text-align: left;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    min-height: 40px;

    border: none;
    border-radius: 8px;
    background: #ff4791;
    cursor: pointer;

    color: #fff;
    font-family: "Oswald", "sans-serif";
    font-size: 12px;
    font-weight: 600;
    &:hover {
      border: 3px solid #ff4691;
      background-color: #082d3a;
    }
  }
`;

const Requirements = styled.section`
  width: 100%;
  height: 200px;
  padding: 15px 30px 15px 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  border: 1px solid #0e3b4a;
  border-radius: 10px;
  box-shadow: 0px 0px 300px (#02141a, 0px 0px 10px #0e3b4a inset);
  background: linear-gradient(#021419, #082d3a);

  h2 {
    font-family: "Oswald", "Times New Roman";
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    text-align: left;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  article {
    width: 100%;
    display: flex;
    gap: 160px;
    p {
      width: 230px;
      font-family: "Oswald", "Times New Roman";
      font-size: 17px;
      font-weight: 400;
      color: #fff;
      text-align: left;
      letter-spacing: 1px;
    }
  }

  div {
    width: 100%;
    height: 3px;

    background-color: #fff;
  }
`;
