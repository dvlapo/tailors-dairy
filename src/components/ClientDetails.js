import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ClientDetails = () => {
  const { id } = useParams();
  const [client, setClient] = useState([]);

  useEffect(() => {
    const fetchClientDetails = async () => {
      const token = localStorage.getItem('token');
      try {
        const {
          data: { client },
        } = await axios.get(
          `https://measure-client-api.herokuapp.com/api/v1/clients/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setClient(client);
        console.log(client.measurements);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClientDetails();
  }, [id]);

  return (
    <ClientDetailsStyled>
      {client && (
        <>
          <h1>Client's measurements</h1>
          <h3>Name: {client.name}</h3>

          {client.measurements.lengthOfDress && (
            <p>Dress length: {client.measurements.lengthOfDress} </p>
          )}

          {client.measurements.bust && <p>Bust: {client.measurements.bust}</p>}

          {client.measurements.hips && <p>Hips: {client.measurements.hips}</p>}

          {client.measurements.waist && (
            <p>Waist: {client.measurements.waist}</p>
          )}

          {client.measurements.underbustLength && (
            <p>Underbust length: {client.measurements.underbustLength}</p>
          )}

          {client.measurements.underbustCircumference && (
            <p>
              Underbust circ:
              {client.measurements.underbustCircumference}
            </p>
          )}

          {client.measurements.shoulder && (
            <p>Shoulder: {client.measurements.shoulder} </p>
          )}

          {client.measurements.sleeve && (
            <p>Sleeve: {client.measurements.sleeve}</p>
          )}

          {client.measurements.arm && <p>Arm: {client.measurements.arm}</p>}

          {client.measurements.crotch && (
            <p>Crotch: {client.measurements.crotch}</p>
          )}

          {client.measurements.skirtOrPantLength && (
            <p>Skirt/Pant length: {client.measurements.skirtOrPantLength}</p>
          )}

          {client.measurements.band && <p>Band: {client.measurements.band} </p>}

          {client.measurements.bustPoint && (
            <p>Bust point: {client.measurements.bustPoint} </p>
          )}

          {client.measurements.shoulderToKnee && (
            <p>Shoulder-knee: {client.measurements.shoulderToKnee}</p>
          )}
        </>
      )}
    </ClientDetailsStyled>
  );
};

export default ClientDetails;

const ClientDetailsStyled = styled.div`
  background-color: var(--bgColor);
  backdrop-filter: blur(0.1rem);
  width: 93vw;
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
