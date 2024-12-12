import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import tinycolor from "tinycolor2";

const ProductPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { prod } = state || {};
  const variants = prod.variants;

  const uniqueSizes = variants
    .map(variant => variant.size)
    .filter((size, index, array) => array.indexOf(size) === index)
    .sort((a, b) => a - b);

  const firstColor = variants
    .find(variant => variant.size === uniqueSizes[0]).color;

  const [selectedSize, setSelectedSize] = useState(uniqueSizes[0]);
  const [selectedColor, setSelectedColor] = useState(firstColor);
  const [userInputQuantity, setUserInputQuantity] = useState(1);
  
  const currentProduct = variants.find(variant => variant.size === selectedSize && variant.color === selectedColor);

  // Reset quantity to min value when size or color changes
  useEffect(() => {
    setUserInputQuantity(currentProduct.quantity === 0 ? 0 : 1);
  }, [selectedSize, selectedColor, currentProduct.quantity]);

  return (
    <OuterContainer>

      <StyledImages>
        <img src={prod.primaryImage} alt={prod.altText} />
        <img src={prod.secondaryImage} alt={prod.altText} />
      </StyledImages>

      <DesktopRightSide>
        <StyledHomeName>
          <Link to='/'>
            <button>HOME</button>
          </Link>
          <p>{prod.name}</p>
        </StyledHomeName>

        <StyledProductInfo>
          <h3>{prod.name}</h3>
          <h3>{prod.price}</h3>
          <p>Parcele em {prod.installments} sem juros</p>

          <p>TAMANHO</p>

          <SizeButtons>
          {uniqueSizes.map(size => 
            <SizeButton 
              key={size}
              onClick={() => setSelectedSize(size)}
              disabled={!variants.some(variant => variant.size === size && variant.quantity > 0)}
              $disabled={!variants.some(variant => variant.size === size && variant.quantity > 0)}
              $size={size}
              $selectedSize={selectedSize}
            >
              {size}
            </SizeButton>
          )}
          </SizeButtons>

          <p>COR</p>

          <ColorButtons>
            {variants
              .filter(variant => variant.size === selectedSize)
              .map(variant => (
                <ColorButtonContainer key={variant.color}>
                  <ColorButton 
                    onClick={() => setSelectedColor(variant.color)}
                    disabled={variant.quantity === 0}
                    $disabled={variant.quantity === 0}
                    $selectedColor={selectedColor}
                    $variantColor={variant.color}
                  >
                    {/* {variant.color} */}
                  </ColorButton>
                  {variant.quantity === 0 && (
                  <IonIcon 
                    name="close-outline" 
                    $variantColor={variant.color}
                  />
                )}
                </ColorButtonContainer>
              ))
            }
          </ColorButtons>

          <ProductsAvailableMsg>
            {currentProduct.quantity > 1 
            ? <p>Últimas {currentProduct.quantity} unidades disponíveis</p>
            : currentProduct.quantity === 1
            ? <p>Última unidade disponível</p>
            : <p>Produto esgotado nesta cor</p>
            }
          </ProductsAvailableMsg>

          <StyledForm>
            <input 
              type="number" 
              value={userInputQuantity}
              onChange={e => setUserInputQuantity(e.target.value)}
              min={currentProduct.quantity === 0 ? 0 : 1}
              max={currentProduct.quantity}
            />
            <FormButtons>
              <button 
                type='button'
                // Math.max returns the greater of two numbers, so the number can't go below 0 or 1, in this case
                onClick={() => {
                  const minValue = currentProduct.quantity === 0 ? 0 : 1;
                  setUserInputQuantity((prev) => Math.max(prev - 1, minValue));
                }}
              >
                <ion-icon name="remove-outline" />
              </button>
              <button 
                type='button'
                //  Math.min returns the lesser of two numbers, so the number can't go above currentProduct.quantity
                onClick={() => {
                  setUserInputQuantity((prev) => Math.min(prev + 1, currentProduct.quantity));
                }}
              >
                <ion-icon name="add-outline" />
              </button>
            </FormButtons>
          </StyledForm>

          <CartButton
            onClick={() => navigate('/cart')}
            disabled={currentProduct.quantity === 0}
            $disabled={currentProduct.quantity === 0}
          >
            {currentProduct.quantity === 0
              ? 'INDISPONÍVEL'
              : 'ADICIONAR AO CARRINHO'
            }
          </CartButton>

        </StyledProductInfo>
      </DesktopRightSide>
    </OuterContainer>
  )
}

export default ProductPage;

const OuterContainer = styled.div`
  width: 100%;
  padding: 45px 20px 20px 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
    gap: 50px;
  }
`

const DesktopRightSide = styled.div`
  @media (min-width:1000px) {
    width: 50%;
    position: sticky;
    top: 45px;
    align-self: flex-start;
  }
`

const StyledImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  img {
    width: 100%;
    height: auto;
  }

  @media (min-width:1000px) {
    width: 50%;
  }
`

const StyledHomeName = styled.div`
  display: flex;
  margin-top: 20px;

  a {
    all: unset;
    text-decoration: none;
    display: flex;
  }

  button {
    all: unset;
    cursor: pointer;
    font-size: 12px;
  }

  p {
    font-size: 12px;
  }

  p::before {
    content: '/';
    padding-right: 5px;
    padding-left: 5px;
  }

  @media (min-width: 1000px) {
    margin-top: 0;
  }
`

const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;

  & h3:first-child {
    font-weight: 600;
  }
`

const SizeButtons = styled.div`
  display: flex;
  gap: 10px;
`

const SizeButton = styled.button`
  all: unset;
  cursor: ${props => props.$disabled ? 'default' : 'pointer'};
  border: solid 1px black;
  border-radius: 15px;
  padding: 7px 15px;
  background-color: ${props => props.$selectedSize === props.$size ? '#000000' : '#FFFFFF'};
  color: ${props => props.$selectedSize === props.$size ? '#FFFFFF' : '#000000'};
  opacity: ${props => props.$disabled ? '0.5' : '1'};
`

const ColorButtons = styled.div`
  display: flex;
  gap: 10px;
`

const ColorButtonContainer = styled.div`
  position: relative;
`

const ColorButton = styled.button`
  all: unset;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border: solid 5px #D9D9D9;
  border-radius: 50%;
  background-color: ${props => props.$variantColor};
  box-shadow: ${props => 
    props.$selectedColor === props.$variantColor & props.disabled
    ? '0 0 0 3px #383838'
    : props.$selectedColor === props.$variantColor
    ? '0 0 0 3px #000000' 
    : 'none' 
  };
  opacity: ${props => props.disabled ? '0.5' : '1'};
`

const IonIcon = styled('ion-icon')`
  visibility: visible;
  z-index: 1;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  color: ${props => {
    const isLight = tinycolor(props.$variantColor).isLight();
    return isLight ? '#000000' : '#FFFFFF';
  }};
  font-size: 40px; 
`

const ProductsAvailableMsg = styled.div`
  p {
    display: inline-block;
    background-color: #696d8c;
    color: white;
    font-size: 12px;
    padding: 5px 15px;
    border-radius: 15px;
  }
`

const StyledForm = styled.form`
  position: relative;

  /* Hide arrows from input form: Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide arrows from input form: Firefox */
  input[type=number] {
    appearance: textfield;
  }
  
  input {
    all: unset;
    border: solid 1px black;
    border-radius: 5px;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    text-align: center;
  }
`

const FormButtons = styled.div`
  position: absolute;
  top: 50%; 
  width: 100%;

  button {
    all: unset;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  
  button:first-child {
    left: 15px; 
  }

  button:last-child {
    right: 15px; 
  }
`

const CartButton = styled.button`
 all: unset;
 cursor: ${props => props.disabled ? 'default' : 'pointer'};
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: ${props => props.disabled ? '#c2c2c2' : '#000000'};
 color: ${props => props.disabled ? '#000000' : '#FFFFFF'};
 border-radius: 5px;
 height: 40px;
 box-sizing: border-box;
`
