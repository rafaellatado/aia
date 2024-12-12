import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <OuterContainer>
      <h3>Estou fazendo, otaros 😊</h3>

      <button
        onClick={() => navigate('/')}
      >
        HOME
      </button>
    </OuterContainer>
  )
}

export default Cart;

const OuterContainer = styled.h1`
  /* margin-top: 45px; */
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    all: unset;
    cursor: pointer;
    margin-top: 30px;
    background-color: black;
    color: white;
    font-size: 15px;
    padding: 10px 30px;
    border-radius: 15px;
  }
`
