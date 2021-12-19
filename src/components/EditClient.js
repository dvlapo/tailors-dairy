import { useLayoutEffect, useState } from 'react';
import { ClientFormStyled } from './AddClient';
import { useParams } from 'react-router-dom';

import axios from 'axios';

const EditClient = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const [name, setName] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [measurements, setMeasurements] = useState({});

  useLayoutEffect(() => {
    const fetchClientDetails = async () => {
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
        setName(name);
        setMeasurements(measurements);
        setDressLength(measurements.lengthOfDress);
        setBust(measurements.bust);
        setHalfLength(measurements.halfLength);
        setHips(measurements.hips);
        setWaist(measurements.waist);
        setUnderbustLength(measurements.underbustLength);
        setUnderbustCirc(measurements.underbustCircumference);
        setShoulder(measurements.shoulder);
        setSleeve(measurements.sleeve);
        setArm(measurements.arm);
        setCrotch(measurements.crotch);
        setSkirtOrPantLength(measurements.skirtOrPantLength);
        setBand(measurements.band);
        setBustPoint(measurements.bustPoint);
        setShoulderToKnee(measurements.shoulderToKnee);
      } catch (error) {
        console.log(error);
      }
    };

    fetchClientDetails();
  }, [id, token]);

  const [dressLength, setDressLength] = useState('');
  const [bust, setBust] = useState('');
  const [halfLength, setHalfLength] = useState('');
  const [hips, setHips] = useState('');
  const [waist, setWaist] = useState('');
  const [underbustLength, setUnderbustLength] = useState('');
  const [underbustCirc, setUnderbustCirc] = useState('');
  const [shoulder, setShoulder] = useState('');
  const [sleeve, setSleeve] = useState('');
  const [arm, setArm] = useState('');
  const [crotch, setCrotch] = useState();
  const [skirtOrPantLength, setSkirtOrPantLength] = useState('');
  const [band, setBand] = useState('');
  const [bustPoint, setBustPoint] = useState('');
  const [shoulderToKnee, setShoulderToKnee] = useState('');

  let newMeasurements = {
    lengthOfDress: dressLength,
    bust,
    halfLength,
    hips,
    waist,
    underbustLength,
    underbustCircumference: underbustCirc,
    shoulder,
    sleeve,
    arm,
    crotch,
    skirtOrPantLength,
    band,
    bustPoint,
    shoulderToKnee,
  };

  const updateClient = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(
        `https://measure-client-api.herokuapp.com/api/v1/clients/${id}`,
        // eslint-disable-next-line no-undef
        {
          name,
          measurements: newMeasurements,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data) {
        window.history.back();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClientFormStyled>
      <h2>Editing client details</h2>
      <form>
        <div className="flex name-field">
          <label>Name:</label>
          <input
            type="text"
            className="name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex">
          <label>Dress length:</label>
          <input
            type="number"
            className="measurement-input"
            value={dressLength}
            onChange={(e) => setDressLength(e.target.value)}
          />
        </div>
        <div className="flex">
          <label>Bust:</label>
          <input
            type="number"
            className="measurement-input"
            value={bust}
            onChange={(e) => setBust(e.target.value)}
          />
        </div>
        <div className="flex">
          <label>Half length:</label>
          <input
            type="number"
            className="measurement-input"
            value={halfLength}
            onChange={(e) => setHalfLength(e.target.value)}
          />
        </div>
        <div className="flex">
          <label>Hips:</label>
          <input
            type="number"
            className="measurement-input"
            value={hips}
            onChange={(e) => setHips(e.target.value)}
          />
        </div>
        <div className="flex">
          <label>Waist:</label>
          <input
            type="number"
            className="measurement-input"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
          />
        </div>
        <div className="flex">
          <label>Underbust length:</label>
          <input
            type="number"
            className="measurement-input"
            value={underbustLength}
            onChange={(e) => setUnderbustLength(e.target.value)}
          />
        </div>
        <div className="flex">
          <label>Underbust circ:</label>
          <input
            type="number"
            className="measurement-input"
            value={underbustCirc}
            onChange={(e) => setUnderbustCirc(e.target.value)}
          />
        </div>
        <div className="flex">
          <label>Shoulder:</label>
          <input
            type="number"
            className="measurement-input"
            value={shoulder}
            onChange={(e) => setShoulder(e.target.value)}
          />
        </div>
        <div className="flex">
          <label>Sleeve:</label>
          <input
            type="number"
            className="measurement-input"
            value={sleeve}
            onChange={(e) => setSleeve(e.target.value)}
          />
        </div>
        <div className="flex">
          <label>Arm:</label>
          <input
            type="number"
            className="measurement-input"
            value={arm}
            onChange={(e) => setArm(e.target.value)}
          />
        </div>
        <div className="flex">
          <label>Crotch:</label>
          <input
            type="number"
            className="measurement-input"
            value={crotch}
            onChange={(e) => setCrotch(e.target.value)}
          />
        </div>
        <div className="flex">
          <label>Skirt/pant length:</label>
          <input
            type="number"
            className="measurement-input"
            value={skirtOrPantLength}
            onChange={(e) => setSkirtOrPantLength(e.target.value)}
          />
        </div>
        <div className="flex">
          <label>Band:</label>
          <input
            type="number"
            className="measurement-input"
            value={band}
            onChange={(e) => setBand(e.target.value)}
          />
        </div>
        <div className="flex">
          <label>Bust point:</label>
          <input
            type="number"
            className="measurement-input"
            value={bustPoint}
            onChange={(e) => setBustPoint(e.target.value)}
          />
        </div>
        <div className="flex">
          <label>Shoulder to knee:</label>
          <input
            type="number"
            className="measurement-input"
            value={shoulderToKnee}
            onChange={(e) => setShoulderToKnee(e.target.value)}
          />
        </div>
        <button onClick={updateClient}>Done</button>
      </form>
    </ClientFormStyled>
  );
};

export default EditClient;
