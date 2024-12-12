import { useState } from 'react';
import styled from 'styled-components';
import { featuredProducts } from '../../Products';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the next button click
  const nextImage = () => {
    if (currentIndex < featuredProducts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle the previous button click
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <StyledContainer>
      <StyledUl style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {featuredProducts.map(prod => (
          <StyledLi key={prod.id}>
            <StyledImageContainer>
              <Link 
                to={`/product/${prod.name}`}
                state={{prod: prod}}
              >
                <button>
                  <img src={prod.primaryImage} alt={prod.altText} className='primary' />
                  <img src={prod.secondaryImage} alt={prod.altText} className='secondary' />
                </button>
              </Link>
            </StyledImageContainer>
            <StyledProductInfo>
              <Link 
                  to={`/product/${prod.name}`}
                  state={{prod: prod}}
              >
              <button>{prod.name}</button>
              </Link>
              <p>{prod.price}</p>
              <p>{prod.installments}</p>
            </StyledProductInfo>
          </StyledLi>
        ))}
      </StyledUl>

      <StyledButtons>
        <StyledButton onClick={prevImage}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </StyledButton>
        <StyledButton onClick={nextImage}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </StyledButton>
      </StyledButtons>
    </StyledContainer>
  );
};

export default Carousel;

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 50vw;
    height: auto;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  height: 100%;
`;

const StyledLi = styled.li`
  list-style: none;
  width: 100%;
  height: auto;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImageContainer = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  justify-content: center;

  button {
    all: unset;
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none; 
    width: 100%;
    height: 100%;
  }

  .primary {
    display: block;
    width: 100%;
    height: auto;
    cursor: pointer;
    opacity: 1;
  }

  .secondary {
    width: 100%;
    height: auto;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  &:hover {
    .primary {
      opacity: 0;
    }

    .secondary {
      opacity: 1;
    }
  }
`;

const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  a {
    all: unset;
    text-decoration: none;
  }

  button {
    all: unset;
    cursor: pointer;
    font-weight: bold;
  }

  & p:first-of-type {
    margin-top: 5px;
  }

  & p:nth-of-type(2) {
    color: #808080;
  }
`

const StyledButtons = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 0;
  pointer-events: none;
`;

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  pointer-events: auto;

  ion-icon {
    color: black;
    font-size: 20px;
    stroke-width: 20px;
  }
`;
