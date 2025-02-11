import styled from "styled-components";

export default function NavBar() {

  return (
    <StyledNavWrapper>

      <StyledMobile>
        <MobileLeftSide>
          <button>
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </MobileLeftSide>

        <MobileRightSide>
          <button>Brasil</button>
          <button>
            <ion-icon name="person-outline"></ion-icon>
          </button>
          <button>
            <ion-icon name="bag-outline"></ion-icon>
          </button>
          <button>
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </MobileRightSide>
      </StyledMobile>

      <StyledDesktop>
        <DesktopLeftSide>
          <button>Mulher</button>
          <button>Homem</button>
          <button>Bolsas</button>
          <button>Acessórios</button>
          <button>Casa</button>
          <button>Explorar</button>
        </DesktopLeftSide>

        <DesktopRightSide>
          <button>Buscar</button>
          <button>Brasil</button>
          <button>Conta</button>
          <button>Carrinho</button>
        </DesktopRightSide>
      </StyledDesktop>

    </StyledNavWrapper>
  );
}

const StyledNavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  background-color: #FAF5F0;
  z-index: 1;
  button {
    all: unset;
    cursor: pointer;
  }
`

const StyledMobile = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%); 
  ion-icon {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`

const MobileLeftSide = styled.div`

`

const MobileRightSide = styled.div`
  display: flex;
  gap: 30px;
`

const StyledDesktop = styled.div`
  display: none; 

  @media (min-width: 1024px) {
    display: block;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%); 
  }
`

const DesktopLeftSide = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`

const DesktopRightSide = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`
