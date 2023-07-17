import { useState } from "react";
import { styled } from "styled-components";

export default function Categorie(props) {
  const { categorie, setFilters, filterSelected } = props;
  const [isClicked, setClicked] = useState("false");

  function toggleClick() {
    if (isClicked === "false") {
      let array = [...filterSelected];
      array.push(categorie);
      setFilters(array);
      setClicked("true");
    } else {
      let array = [...filterSelected];
      let index = array.indexOf(categorie);

      array.splice(index, 1);
      setFilters(array);
      setClicked("false");
    }
  }
  return (
    <li>
      <CheckBox onClick={toggleClick} $isclicked={isClicked}>
        <ion-icon name="checkmark"></ion-icon>
      </CheckBox>
      {categorie}
    </li>
  );
}

const CheckBox = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid #fff;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  ion-icon {
    display: ${(props) => (props.$isclicked === "true" ? "flex" : "none")};
    --ionicon-stroke-width: 64px;
    font-size: 25px;
    color: green;
  }
`;
