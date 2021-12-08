import styled from 'styled-components';
import { useState } from 'react';

const ClientList = ({ showSearchBar }) => {
  const clients = [
    { name: 'Puleng', id: 1 },
    { name: 'Fikile', id: 2 },
    { name: 'Mauve', id: 3 },
    { name: 'Hazelgrace', id: 4 },
    { name: 'Fatima', id: 5 },
    { name: 'Mrs Coconuthead', id: 6 },
    { name: 'Rabia', id: 7 },
    { name: 'Ganiyu', id: 8 },
    { name: 'Ademola', id: 9 },
    { name: 'Maryam', id: 10 },
  ];

  const [searchValue, setSearchValue] = useState('');

  const filterList = (e) => {
    setSearchValue(e.target.value);
  };

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

      <h3>All Clients</h3>
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
              <li key={client.id}>
                {client.name}
                <span>
                  <ion-icon name="pencil-sharp"></ion-icon>
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
  h3 {
    text-align: center;
    margin-block: 0.8rem;
    color: var(--darkColor);
  }
  ul {
    padding: 0;

    li {
      background-color: var(--darkColor);
      padding: 0.3rem 0.8rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 7px;
      font-size: clamp(0.9rem, 0.8vw, 1.4rem);

      color: var(--lightColor);
      box-shadow: 0 0 4px 2px var(--lightColor);

      ion-icon {
        background-color: var(--listColor);
        color: var(--darkColor);
        border-radius: 6px;
        padding: 0.2rem;
        position: relative;
        top: 0.2rem;
        font-size: 0.8rem;
        z-index: 1;
      }
    }
  }
`;
