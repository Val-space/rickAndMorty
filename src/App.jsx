import { Route, Routes } from 'react-router-dom';
import './App.css';
import { getCharacters } from './api/api';
import { useEffect, useState } from 'react';
import { CharactersList } from './CharactersList/CharactersList';
import { CharacterInformation } from './CharacterInformation/CharacterInformation';
import { LikedCharacters } from './LikedCharacters/LikedCharacters';

function App() {
  const [characters, setCharacters] = useState(null);
  const [favCharacters, setFavCharacters] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const charactersFromServer = await getCharacters().then(res => res.results);
        setCharacters(charactersFromServer);
        setError(false);
      } catch (error) {
        setError(true);
      }
    }

    getData();

    const localData = localStorage.getItem('favCharacters');

    if (localData) {
      setFavCharacters(JSON.parse(localData));
    }
  }, []);

  const updateFavs = (charID) => {
    const favoriteChar = characters.filter(char => char.id === charID);

    if (favCharacters.length === 0) {
      setFavCharacters(favoriteChar);
    } else {

      if (favCharacters.find(char => char.id === charID)) {
        setFavCharacters(favCharacters.filter(char => char.id !== charID));
      } else {
        setFavCharacters([...favCharacters, ...characters.filter(char => char.id === charID)]);
      }
    }

    localStorage.setItem('favCharacters', JSON.stringify(favCharacters));
  };

  return (
    <div className="App">
      {!error &&
        <Routes>
          {characters && (
            <>
              <Route path="/" element={
                <CharactersList
                  characters={characters}
                  updateFavs={updateFavs}
                  favCharacters={favCharacters}
                />}
              />
              <Route path="/:id" element={<CharacterInformation characters={characters} />} />
              <Route path="/favs" element={<LikedCharacters favCharacters={favCharacters} />} />
            </>)}
        </Routes>
      }
    </div>
  );
}

export default App;
