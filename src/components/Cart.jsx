import { useContext, useEffect, useRef } from "react";
import CartContext from "../contexts/CartContext";
import styled from "styled-components";
import formatCurrency from "../utils/formatCurrency";
import { Trash, X } from "lucide-react";

const Cart = () => {
  const { cartVisibility, setCartVisibility, cartProducts, setCartProducts } = useContext(CartContext);

  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartVisibility(false);
      }
    };

    if (cartVisibility) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [cartVisibility, setCartVisibility]);

  const totalPrice = cartProducts.reduce((acc, item) => item.price * item.quantity + acc, 0);
  const productQuantity = cartProducts.reduce((acc, item) => item.quantity + acc, 0);

  /* console.log('cartProducts: ', cartProducts); */

  return (
    <>
      {cartVisibility && 
        <StyledCart ref={cartRef}>

          <StyledItemsQuantity>
            <div>Carrinho de compras: ({productQuantity} {productQuantity === 1 ? 'item' : 'itens'})</div>
            <button  onClick={() => setCartVisibility(false)}><X /></button>
          </StyledItemsQuantity>

          {cartProducts.length === 0
            ? <StyledEmptyCart>Seu carrinho está vazio</StyledEmptyCart>
            : 
            <>
              <StyledProducts>
                {cartProducts.map(prod => (
                  <StyledProduct key={prod.variantId}>

                    <img src={prod.image} alt="Imagem do Produto" />

                    <RightSideProd>

                      <p>{prod.title} {prod.colorName} {prod.size}</p>
                      <p>{formatCurrency(prod.price, 'BRL')}</p>

                      <StyledQntAndDelete>
                        <StyledForm>
                          <input 
                            type="number" 
                            value={prod.quantity}
                            onChange={e => setCartProducts(prevState => prevState.map(item =>
                              item.variantId === prod.variantId ? { ...item, quantity: e.target.value } : item
                            ))}
                            min={prod.inStock === 0 ? 0 : 1}
                            max={prod.inStock}
                          />

                          <FormButtons>

                            {/* Minus button */}
                            <button 
                              type='button'
                              // Math.max returns the greater of two numbers, so the number can't go below 0 or 1, in this case
                              onClick={() => {
                                const minValue = prod.inStock === 0 ? 0 : 1;
                              
                                setCartProducts(prev =>
                                  prev.map(item =>
                                    item.variantId === prod.variantId
                                      ? {
                                          ...item,
                                          quantity: Math.max(item.quantity - 1, minValue),
                                          ...(item.noStock && { noStock: false }),
                                        }
                                      : item
                                  )
                                );
                              }}
                            >
                              <ion-icon name="remove-outline" />
                            </button>

                            {/* Plus button */}
                            <button 
                              type='button'
                              //  Math.min returns the lesser of two numbers, so the number can't go above currentProduct.quantity
                                  onClick={() => {
                                    setCartProducts(prev =>
                                      prev.map(item =>
                                        item.variantId === prod.variantId
                                          ? {
                                              ...item,
                                              quantity: Math.min(item.quantity + 1, item.inStock),
                                              noStock: item.quantity === item.inStock,
                                            }
                                          : item
                                      )
                                    );
                                  }}
                            > 
                              <ion-icon name="add-outline" />
                            </button>
                          </FormButtons>
                        </StyledForm>

                        <DeleteButton
                          onClick={() => {
                            setCartProducts(prev =>
                              prev.filter(item => 
                                prod.variantId != item.variantId
                              )
                            )
                          }}
                        >
                          <Trash />
                        </DeleteButton>
                      </StyledQntAndDelete>

                      {prod.noStock &&
                        <StyledNoStock>
                          <p>Quantidade máxima em estoque</p>
                        </StyledNoStock>
                      }
                    </RightSideProd>
                  </StyledProduct>
                ))}
              </StyledProducts>

              <CheckOutSection>
                <StyledSubtotal>
                  <p>Subtotal</p>
                  <div>
                    <p>{formatCurrency(totalPrice, 'BRL')}</p>
                    <p>ou 10x de {formatCurrency(totalPrice / 10, 'BRL')}</p>
                  </div>
                </StyledSubtotal>
                <CheckOutButtonDiv><button>FINALIZAR PEDIDO</button></CheckOutButtonDiv>
                <KeepShoppingButton onClick={() => setCartVisibility(false)}>Continuar comprando</KeepShoppingButton>
              </CheckOutSection>
            </>
          }
        </StyledCart>
      }
    </>
  )
}

export default Cart;

const StyledCart = styled.div`
  background-color: #f0f0f0;
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const StyledItemsQuantity = styled.div`
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  button {
    all: unset;
    cursor: pointer;
  }

  svg {
    color: #000000;
    stroke-width: 1.5;
    display: flex;
    width: 20px;
    height: 20px;
  }
`

const StyledEmptyCart = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`

const StyledProducts = styled.div`
  flex-grow: 1; 
  overflow-y: auto;
  max-height: calc(100% - 250px);
  display: flex;
  flex-direction: column;
  padding: 0 15px;

  div:last-of-type {
    margin-bottom: 15px;
  }
`

const StyledProduct = styled.div`
  background-color: #FFFFFF;
  display: flex;
  width: 100%;
  margin-top: 15px;
  border-radius: 5px;

  img {
    width: 20%;
    height: auto;
  }
`

const RightSideProd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 100%;
  padding: 0 20px;
  height: 100%;
`

const StyledForm = styled.form`
  position: relative;
  width: 100%;
  height: 100%;

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
    height: 25px;
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

const StyledNoStock = styled.div`
  background-color: red;
  height: 25px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    font-size: 12px;
  }
`

const StyledQntAndDelete = styled.div`
  display: flex;
  gap: 10px;
`

const DeleteButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    display: flex;
  }
`

const CheckOutSection = styled.div`
  z-index: 1;
  position: fixed;
  bottom: 0;
  right: 0;
  height: 200px;
  width: 100%;
  max-width: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledSubtotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`

const CheckOutButtonDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;

  button {
    all: unset;
    cursor: pointer;
    color: white;
    background-color: black;
    height: 40px;
    padding: 0 10px;
    width: 100%;
    margin: 0 15px;
    border-radius: 5px;
  }
`

const KeepShoppingButton = styled.button`
  all: unset;
  cursor: pointer;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  padding-top: 15px;
`
