import { styled } from "styled-components";

export default function Game(props) {
  const { name, price, img } = props.game;
  return (
    <>
      <Container>
        <section>
          <figure>
            <img src={img} alt={name}></img>
          </figure>
          <h2>{name}</h2>
          <h2>{price}</h2>
        </section>
        <button>Adicionar ao Carrinho</button>
      </Container>
    </>
  );
}

const Container = styled.li`
  width: 140px;
  min-height: 250px;
  gap: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 8px;
  background-color: #03282f;

  img {
    width: 100%;
    height: 140px;
    border-radius: 8px;
  }

  h2 {
    font-family: "Oswald", "Times New Roman";
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    text-align: left;
    margin: 10px 0 0 10px;
    letter-spacing: 1px;
  }
  button {
    display: none;
  }
  &:hover {
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 140px;
      height: 40px;

      border: 3px solid #fff;
      border-radius: 8px;
      background: #03282f;
      cursor: pointer;

      color: #fff;
      font-family: "Oswald", "sans-serif";
      font-size: 12px;
      font-weight: 600;
    }
  }
`;
