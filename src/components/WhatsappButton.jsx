import styled from "styled-components";

const WhatsappButton = () => {

  const handleClick = () => {
    window.open("https://wa.me/5521997219895", "_blank");
  };

  return (
    <WhatsappContainer onClick={handleClick}>
      <IonIcon name="logo-whatsapp" />
    </WhatsappContainer>
  );
};

export default WhatsappButton;

const WhatsappContainer = styled.button`
  all: unset;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  background-color: #4e4e4e;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const IonIcon = styled('ion-icon')`
  z-index: 1000;
  font-size: 25px;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
