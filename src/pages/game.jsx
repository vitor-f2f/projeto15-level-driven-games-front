import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function Game(props) {
  const [added, setAdded] = useState(false);

  const { name, price, picture,_id } = props.game;
  const navigate = useNavigate();

  const gamePage = () => {
    navigate(`/game/${_id}`);
  };

  function addtocart() {
    const obj = { productId: _id, name, price, picture };
    const authorization = "Bearer " + localStorage.getItem("userToken");

    const promise = axios.post(`${import.meta.env.VITE_API_URL}/cart`, obj, {
      headers: { authorization },
    });

    promise.then((res) => {
      console.log(res.data);
      setAdded(true);
    });

    promise.catch((err) => {
      alert(err.response.data);
    });
  }
  return (
    <Container added={added}>
      <section>
        <figure>
          <img onClick={gamePage} src={picture} alt={name}></img>
        </figure>
        <h2 onClick={gamePage}>{name}</h2>
        <h3>{price}</h3>
      </section>
      <button onClick={() => addtocart()} >
        {added ? "Produto adcionado ao carrinho" : "Adicionar ao Carrinho"}
      </button>
    </Container>
  );
}

const Container = styled.li`
  width: 140px;
  height: 270px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 8px;
  background-color: #03282f;

  img {
    width: 100%;
    height: 140px;
    border-radius: 8px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  h2 {
    cursor: pointer;
  }

  h2,
  h3 {
    font-family: "Oswald", "Times New Roman";
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    text-align: left;
    margin: 10px 0 0 10px;
    letter-spacing: 1px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    min-height: 40px;

    border: none;
    border-radius: 8px;
    background: ${(props) => (props.added ? "#a0a0a0" : "#ff4791")};
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
