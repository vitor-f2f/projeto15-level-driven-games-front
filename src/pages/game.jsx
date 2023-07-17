import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function Game(props) {
  const { name, price, picture, _id } = props.game;
  const navigate = useNavigate();

  const gamePage = () => {
    navigate(`/game/${_id}`);
  };
  return (
    <Container>
      <section>
        <figure>
          <img onClick={gamePage} src={picture} alt={name}></img>
        </figure>
        <h2 onClick={gamePage}>{name}</h2>
        <h3>{price}</h3>
      </section>
      <button>Adicionar ao Carrinho</button>
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
