import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ClientDetailsStyled from './styles/ClientDetailsStyled';

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
              <Link to={`/edit-client/${id}`} className="edit-client-btn">
                <ion-icon name="create-outline"></ion-icon>
                <p>Edit client</p>
              </Link>

              <div
                className="delete-client-btn"
                onClick={() => {
                  window.scrollTo(0, 0);
                  setDeleteModal(true);
                }}
              >
                <ion-icon name="trash-outline"></ion-icon>
                <p>Delete Client</p>
              </div>
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
