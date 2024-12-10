import Carousel from './Carousel'
import styled from 'styled-components';
import { mainImage } from '../Products';

const SecondSection = () => {

  return (
    <StyledContainer> 
      <img src={mainImage.url} alt={mainImage.altText} />

      <Carousel />
    </StyledContainer>
  )
}

export default SecondSection;

const StyledContainer = styled.div`
  margin-top: 45px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;

  img {
    width: 100vw;
    height: auto;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    img {
      width: 50vw;
      height: auto;
    }
  }
`
