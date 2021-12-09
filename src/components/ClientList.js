import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ClientList = ({ showSearchBar }) => {
  const [clients, setClients] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const filterList = (e) => {
    setSearchValue(e.target.value);
  };

  const showDetails = (e) => {
    console.log(e.target._id);
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
      setClients(clients);
    } catch (error) {
      localStorage.removeItem('token');
      console.log(error);
    }
  };
  useEffect(() => {
    fetchClients();
  }, [clients]);

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

      {clients.length === 0 ? (
        <>
          <h2>No clients... &#128064;</h2>
          <p>
            Add new client <ion-icon name="add-circle-outline"></ion-icon>
          </p>
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
              <li key={client._id} onClick={showDetails}>
                {client.name}
                <span>
                  <i class="fa fa-pencil"></i>
                </span>
              </li>
            );
          })}
      </ul>
    </ClientListContainerStyled>
  );
};

export default ClientList;

// styled components

const ClientListContainerStyled = styled.main`
  max-width: 90vw;
  margin-inline: auto;
  margin-top: 20%;

  .search-bar {
    border: 1px solid var(--lightColor);
    border-radius: 10px;
    font-size: clamp(0.8rem, 0.8vw, 1.4rem);
    font-weight: 500;
    padding: 0.2rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:focus-within {
      border: 2px solid var(--lightColor);
      outline: none;
    }

    ion-icon {
      color: var(--lightColor);
      z-index: -1;
    }

    input {
      border: none;
      width: 100%;
      color: var(--darkColor);
      caret-color: var(--lightColor);
      background-color: var(--bgColor);

      &:focus {
        outline: none;
      }
    }
  }
  h3,
  h2 {
    text-align: center;
    margin-block: 0.8rem;
    color: var(--darkColor);
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    ion-icon {
      font-size: 1.3rem;
    }
  }
  .no-clients,
  p {
    font-size: clamp(1rem, 0.9vw, 1.4rem);
    color: var(--darkColor);
    font-weight: 500;
  }
  ul {
    padding: 0;

    li {
      background-color: #fff;
      padding: 0.3rem 0.8rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 7px;
      font-size: clamp(0.9rem, 0.8vw, 1.4rem);
      color: var(--darkColor);
      font-weight: 500;
      box-shadow: 0 2px 3px -2px var(--lightColor);
      cursor: pointer;

      .fa {
        background-color: #fff;
        color: var(--darkColor);
        font-weight: 500;
        font-size: 1.1rem;
        position: relative;
        top: 2px;
        z-index: 1;
      }
    }
  }
`;
