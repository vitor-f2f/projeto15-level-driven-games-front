import axios from "axios";
import { useState } from "react";
import { styled } from "styled-components";

export default function Game(props) {
const [added,setAdded] = useState(false);

  const { name, price, picture,_id } = props.game;

  function addtocart(){
    //console.log({productId:_id,name,price,picture})

    const obj = {productId:_id,name,price,picture};
    const authorization = 'Bearer '+localStorage.getItem('userToken');
    
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/cart`,obj,{ headers: { authorization } })

    promise.then((res)=>{
      console.log(res.data)
      setAdded(true)
    })

    promise.catch((err)=>{
      alert(err.response.data)
    })
    
  }
  return (
    <Container added={added}>
      <section>
        <figure>
          <img src={picture} alt={name}></img>
        </figure>
        <h2>{name}</h2>
        <h2>{price}</h2>
      </section>
      <button onClick={()=>addtocart()} disabled={added}>{added?('Produto adcionado ao carrinho'):'Adicionar ao Carrinho'}</button>
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
    background: ${props => props.added? "#a0a0a0":'#ff4791'};
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
