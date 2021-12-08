import styled from 'styled-components';

const ClientDetails = () => {
  return (
    <BlurredContainer>
      <ClientDetailsStyled>
        <h1>Client's measurements</h1>
        <ul>
          <li>bust: 54</li>
          <li>waist: 24</li>
        </ul>
      </ClientDetailsStyled>
    </BlurredContainer>
  );
};

export default ClientDetails;

const BlurredContainer = styled.div`
  background-color: #000;
  /* opacity: 0.7; */
`;

const ClientDetailsStyled = styled.div`
  background-color: var(--darkColorTrans);
  backdrop-filter: blur(0.1rem);
  width: 80vw;
  margin-inline: auto;

  h1 {
    font-size: clamp(1.2rem, 2vw, 3rem);
    color: var(--lightColor);
    text-align: center;
  }
`;
