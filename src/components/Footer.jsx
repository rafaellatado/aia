import { useState } from "react";
import styled from "styled-components";

const Footer = () => {

  const [email, setEmail] = useState('');
  console.log(email);

  return (
    <StyledContainer>
      <h1>AIA</h1>

      <p>Cadastre-se no nosso newsletter</p>
      <p>e fique por dentro de tudo que acontece na AIA</p>

      <StyledForm>
        <input 
          type='email' 
          placeholder='Email'
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button>OK</button>
      </StyledForm>

      <StyledBottom>
        <div>
          <h3>ATENDIMENTO</h3>
          <button>Contatos</button>
          <button>Perguntas Frequentes</button>
          <button>Trocas & Devoluções</button>
          <button>Troque Fácil</button>          
        </div>
        <div>
          <h3>LEGAL</h3>
          <button>Termos de Uso</button>
          <button>Políticas de Privacidade</button>
        </div>
        <div>
          <h3>AIA</h3>
          <button>Sobre a Marca</button>
          <button>Transparência</button>
        </div>
        <div>
          <h3>SIGA</h3>
          <div>
            <button><ion-icon name="logo-instagram"></ion-icon></button>
            <button><ion-icon name="logo-tiktok"></ion-icon></button>
            <button><ion-icon name="logo-youtube"></ion-icon></button>
            <button><ion-icon name="logo-facebook"></ion-icon></button>
          </div>
        </div>
      </StyledBottom>
    </StyledContainer>
  )
}

export default Footer;

const StyledContainer = styled.div`
  margin: 100px 20px 20px 20px;

  & p:nth-of-type(1) {
    font-weight: 600;
    margin-top: 30px;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  h1 {
    text-align: center;
  }

  @media (min-width: 768px) {
    margin: 100px 80px 20px 80px;
  }
`

const StyledForm = styled.form`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  margin-top: 30px;

  input {
    all: unset;
    flex-grow: 1;
  }

  input::placeholder {
    color: #666666;
  }

  input:focus {
    color: #666666;
  }

  button {
    all: unset;
    cursor: pointer;
    background-color: black;
    color: white;
    padding: 7px;
    border-radius: 4px;
    margin-bottom: 5px;
  }
`

const StyledBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 30px;

  & div:nth-of-type(1),
  & div:nth-of-type(2),
  & div:nth-of-type(3) {
    display: flex;
    flex-direction: column;
    h3 {
      margin-bottom: 15px;
    }
  }

  & div:nth-of-type(4) {
    div {
      display: flex;
      flex-direction: row;
      gap: 20px;
      margin-top: 15px;
    }
  }

  ion-icon {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
