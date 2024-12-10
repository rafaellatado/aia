import { moreProducts } from '../Products';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ThirdSection = () => {
  return (
    <StyledUl>
      {moreProducts.map(prod => (
        <StyledLi key={prod.id}>
          <StyledImageButton>
            <Link 
              to={`/product/${prod.name}`}
              state={{prod: prod}}
            >
            <img src={prod.primaryImage} alt={prod.altText} className='primary' />
            <img src={prod.secondaryImage} alt={prod.altText} className='secondary' />
            </Link>
          </StyledImageButton>
          <StyledProdInfo>
            <Link 
              to={`/product/${prod.name}`}
              state={{prod: prod}}
            >
            <button>{prod.name}</button>
            </Link>
            <p>{prod.price}</p>
            <p>{prod.installments}</p>
          </StyledProdInfo>
        </StyledLi>
      ))}
    </StyledUl>
  )
}

export default ThirdSection;

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: calc(100% - 40px);
  height: 100%;
  margin: 20px auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }
`

const StyledProdInfo = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;

  & p:first-of-type {
    margin-top: 5px;
    font-weight: 600;
  }

  & p:nth-of-type(2) {
    color: #808080;
  }

  p {
    text-align: center;
  }

  a {
    all: unset;
    text-decoration: none;
  }

  button {
    all: unset;
    cursor: pointer;
    text-align: center;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    & {
      opacity: 0;
      transition: opacity 0.5s ease;
    }
  }
`

const StyledLi = styled.li`
  all: unset;
  display: grid;
  width: 100%;
  height: 100%;

  &:hover {
    .primary {
      opacity: 0;
    }
    .secondary {
      opacity: 1;
    }
  
  }

  @media (min-width: 768px) {
    &:hover {
      ${StyledProdInfo} {
        opacity: 1;
        transition: opacity 0.5s ease;
      }
    }
  }
`

const StyledImageButton = styled.button`
  all: unset;
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;

  .primary {
    display: block;
    width: 100%;
    height: auto; 
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  .secondary {
    display: block;
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;  
    transition: opacity 0.5s ease;
  }
`
