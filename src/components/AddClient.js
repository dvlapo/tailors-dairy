import { useState } from 'react';
import ClientFormStyled from './styles/ClientFormStyled';
import axios from 'axios';

const AddClient = () => {
  const [name, setName] = useState('');
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
  const [crotch, setCrotch] = useState('');
  const [skirtOrPantLength, setSkirtOrPantLength] = useState('');
  const [band, setBand] = useState('');
  const [bustPoint, setBustPoint] = useState('');
  const [shoulderToKnee, setShoulderToKnee] = useState('');

  let measurements = {
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

  const token = localStorage.getItem('token');

  const addClient = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'https://measure-client-api.herokuapp.com/api/v1/clients',
        // eslint-disable-next-line no-undef
        {
          name,
          measurements,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data) {
        window.history.back();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClientFormStyled>
      <h2>Add new client</h2>
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
        <button onClick={addClient}>Add Client</button>
      </form>
    </ClientFormStyled>
  );
};

export default AddClient;
