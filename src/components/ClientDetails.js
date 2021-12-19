import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ClientDetails = () => {
  const { id } = useParams();
  const [clientName, setClientName] = useState('');
  const [measurements, setMeasurements] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);

  const deleteClient = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(
        `https://measure-client-api.herokuapp.com/api/v1/clients/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDeleteModal(false);
      window.history.back();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchClientDetails = async () => {
      const token = localStorage.getItem('token');
      try {
        const {
          data: {
            client: { name, measurements },
          },
        } = await axios.get(
          `https://measure-client-api.herokuapp.com/api/v1/clients/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setClientName(name);
        setMeasurements(measurements);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchClientDetails();
  }, [id]);

  return (
    <ClientDetailsStyled>
      <>
        <h1>Client's measurements</h1>

        {isLoading ? (
          <div className="loading">Fetching measurements...</div>
        ) : (
          <>
            {clientName && <h3>{clientName}</h3>}

            <div className="measurements">
              <div className="single-measurement">
                <p>Dress length</p>{' '}
                <span>
                  {measurements.lengthOfDress
                    ? measurements.lengthOfDress + '"'
                    : 'N/A'}
                </span>
              </div>
              <div className="single-measurement">
                <p> Bust</p>{' '}
                <span>
                  {measurements.bust ? measurements.bust + '"' : 'N/A'}
                </span>
              </div>
              <div className="single-measurement">
                <p>Hips</p>{' '}
                <span>
                  {measurements.hips ? measurements.hips + '"' : 'N/A'}
                </span>
              </div>
              <div className="single-measurement">
                <p>Waist</p>{' '}
                <span>
                  {measurements.waist ? measurements.waist + '"' : 'N/A'}
                </span>
              </div>
              <div className="single-measurement">
                <p>Underbust length</p>
                <span>
                  {measurements.underbustLength
                    ? measurements.underbustLength + '"'
                    : 'N/A'}
                </span>
              </div>
              <div className="single-measurement">
                <p>Underbust circumference</p>
                <span>
                  {measurements.underbustCircumference
                    ? measurements.underbustCircumference + '"'
                    : 'N/A'}
                </span>
              </div>
              <div className="single-measurement">
                <p> Shoulder </p>
                <span>
                  {measurements.shoulder ? measurements.shoulder + '"' : 'N/A'}
                </span>
              </div>
              <div className="single-measurement">
                <p>Sleeve</p>{' '}
                <span>
                  {measurements.sleeve ? measurements.sleeve + '"' : 'N/A'}
                </span>
              </div>
              <div className="single-measurement">
                <p>Arm</p>{' '}
                <span>{measurements.arm ? measurements.arm + '"' : 'N/A'}</span>
              </div>
              <div className="single-measurement">
                <p>Crotch</p>{' '}
                <span>
                  {measurements.crotch ? measurements.crotch + '"' : 'N/A'}
                </span>
              </div>
              <div className="single-measurement">
                <p>Skirt/Pant length</p>
                <span>
                  {measurements.skirtOrPantLength
                    ? measurements.skirtOrPantLength + '"'
                    : 'N/A'}
                </span>
              </div>
              <div className="single-measurement">
                <p>Band</p>{' '}
                <span>
                  {measurements.band ? measurements.band + '"' : 'N/A'}
                </span>{' '}
              </div>
              <div className="single-measurement">
                <p> Bust point</p>{' '}
                <span>
                  {measurements.bustPoint
                    ? measurements.bustPoint + '"'
                    : 'N/A'}
                </span>{' '}
              </div>
              <div className="single-measurement">
                <p>Shoulder-knee</p>{' '}
                <span>
                  {measurements.shoulderToKnee
                    ? measurements.shoulderToKnee + '"'
                    : 'N/A'}
                </span>
              </div>
            </div>

            <div className="actions">
              <Link to={`/edit-client/${id}`}>
                <ion-icon name="create-outline"></ion-icon>
              </Link>

              <ion-icon
                name="trash-outline"
                onClick={() => {
                  window.scrollTo(0, 0);
                  setDeleteModal(true);
                }}
              ></ion-icon>
            </div>
          </>
        )}
      </>

      {deleteModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h1>Are you sure you want to delete this client?</h1>
            <div className="btns">
              <button
                onClick={() => {
                  setDeleteModal(false);
                }}
              >
                Cancel
              </button>
              <button className="delete-btn" onClick={deleteClient}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </ClientDetailsStyled>
  );
};

export default ClientDetails;

const ClientDetailsStyled = styled.div`
  background-color: var(--bgColor);
  backdrop-filter: blur(0.1rem);
  width: 95vw;
  margin-inline: auto;

  padding: 5rem 2rem;
  padding-bottom: 2rem;
  min-height: 100vh;

  h1,
  .loading {
    font-size: clamp(1.3rem, 2vw, 3rem);
    color: var(--darkColor);
    text-align: center;
    margin-bottom: 1rem;
  }

  .loading {
    font-size: clamp(1rem, 1.3vw, 2rem);
    color: var(--darkColorTrans);
  }

  h3 {
    font-size: clamp(1rem, 1.6vw, 2.5rem);
    margin-bottom: 0.6rem;
    color: var(--darkColor);
    font-weight: 700;
    text-align: center;
  }
  .measurements {
    border-radius: 6px;
    background-color: #faf8ff;
  }
  .single-measurement {
    font-size: clamp(0.9rem, 1.5vw, 2.5rem);
    margin-bottom: 0.4rem;
    color: var(--darkColorTrans);
    padding: 0.5rem;
    border-bottom: 1px solid var(--darkColorTrans);
    display: flex;
    justify-content: space-between;

    span {
      color: var(--darkColor);
      font-weight: 500;
    }
  }
  .single-measurement:last-child {
    border: none;
  }

  .actions {
    margin: 1.5rem 0;
    display: flex;
    justify-content: space-around;

    ion-icon:nth-child(2) {
      color: red;
    }
  }

  .modal-overlay {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    min-height: 100vh;
    inset: 0 -5%;
    z-index: 1;
  }
  .modal {
    position: relative;
    top: 40vh;
    width: 85%;
    margin-inline: auto;
    border-radius: 8px;
    background-color: #fff;
    padding: 2rem;

    h1 {
      font-size: clamp(1.3rem, 2vw, 3rem);
    }

    .btns {
      display: flex;
      justify-content: space-around;

      button {
        padding: 0.3rem 0.8rem;
        border: none;
        border-radius: 5px;
        font-size: clamp(0.9rem, 1.5vw, 2.5rem);
        font-weight: 500;
        color: var(--darkColor);
      }

      .delete-btn {
        background-color: red;
        color: #fff;
      }
    }
  }
`;
