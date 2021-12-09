import styled from 'styled-components';

const ClientDetails = () => {
  return (
    <>
      <BlurredContainer />
      <ClientDetailsStyled>
        <h1>Client's measurements</h1>
        <h3>Name: Puleng</h3>
        <p>Dress length: </p>
        <p>Bust:</p>
        <p>Hips:</p>
        <p>Underbust length:</p>
        <p>Underbust circ:</p>
        <p>Shoulder:</p>
        <p>Sleeve:</p>
        <p>Arm:</p>
        <p>Crotch:</p>
        <p>Skirt/Pant length:</p>
        <p>Band:</p>
        <p>Bust point:</p>
        <p>Shoulder-knee:</p>
      </ClientDetailsStyled>
    </>
  );
};

export default ClientDetails;

const BlurredContainer = styled.div`
  background-color: rgba(39, 54, 138, 0.3);
  z-index: -1;
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const ClientDetailsStyled = styled.div`
  background-color: var(--bgColor);
  backdrop-filter: blur(0.1rem);
  width: 85vw;
  margin-inline: auto;
  padding: 5rem 2rem;
  height: 100vh;

  h1 {
    font-size: clamp(1.2rem, 2vw, 3rem);
    color: var(--darkColor);
    text-align: center;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: clamp(1rem, 1.6vw, 2.5rem);
    margin-bottom: 0.6rem;
    color: var(--darkColorTrans);
  }
  p {
    font-size: clamp(0.9rem, 1.5vw, 2.5rem);
    margin-bottom: 0.4rem;

    color: var(--darkColorTrans);
  }
`;
