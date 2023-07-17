import { styled } from "styled-components";

export default function Game(props) {
    const { name, price, picture } = props.game;
    const addToCart = async () => {
        const userToken = localStorage.getItem("userToken");
        const body = {
            gameId: props.game.id,
        };

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/cart`,
                body,
                {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    },
                }
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <section>
                <figure>
                    <img src={picture} alt={name}></img>
                </figure>
                <h2>{name}</h2>
                <h2>{price}</h2>
            </section>
            <button onClick={addToCart}>Adicionar ao Carrinho</button>
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
            background-color: #ee0060;
        }
    }
`;
