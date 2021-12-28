import ClientListContainerStyled from './styles/ClientListStyled';
import { useContext, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DataContext from '../context/DataContext';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const { showSearchBar } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);

  const filterList = (e) => {
    setSearchValue(e.target.value);
  };

  const fetchClients = async () => {
    const token = localStorage.getItem('token');
    try {
      const {
        data: { clients },
      } = await axios.get(
        'https://measure-client-api.herokuapp.com/api/v1/clients',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsLoading(false);
      setClients(clients);
    } catch (error) {
      localStorage.removeItem('token');
      console.log(error);
    }
  };
  useLayoutEffect(() => {
    fetchClients();
  }, []);

  return (
    <ClientListContainerStyled>
      {showSearchBar && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search client"
            value={searchValue}
            onChange={filterList}
          />
          <ion-icon name="search"></ion-icon>
        </div>
      )}

      {isLoading ? (
        <h3>Loading clients...</h3>
      ) : clients.length === 0 ? (
        <>
          <h2>No clients... &#128064;</h2>
          <Link to="/add-client" className="add-client-link">
            <p>
              Add new client <ion-icon name="add-circle-outline"></ion-icon>
            </p>
          </Link>
        </>
      ) : (
        <h3>All Clients</h3>
      )}

      <ul>
        {clients
          // eslint-disable-next-line array-callback-return
          .filter((client) => {
            // eslint-disable-next-line eqeqeq
            if (searchValue == '') {
              return client;
            } else if (
              client.name.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return client;
            }
          })
          .map((client) => {
            return (
              <ul>
                <li key={client._id}>
                  <Link to={`/clients/${client._id}`}>
                    <p>{client.name}</p>
                  </Link>
                  <span>
                    <Link to={`/edit-client/${client._id}`}>
                      <ion-icon name="create-outline"></ion-icon>
                    </Link>
                  </span>
                </li>
              </ul>
            );
          })}
      </ul>
    </ClientListContainerStyled>
  );
};

export default ClientList;
