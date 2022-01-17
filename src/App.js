import { Route, Routes } from 'react-router-dom';
import './App.css';
import { getCharacters } from './api/api';
import { useEffect, useState } from 'react';
import { CharactersList } from './CharactersList/CharactersList';
import { CharacterInformation } from './CharacterInformation/CharacterInformation';
import { LikedCharacters } from './LikedCharacters/LikedCharacters';

function App() {
  const [characters, setCharacters] = useState(null);
  const [favCharacters, setFavCharacters] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const charactersFromServer = await getCharacters().then(res => res.results);
      setCharacters(charactersFromServer);
    }

    getData();
  }, []);

  const addToFav = (charID) => {
    const favoriteChar = characters.filter(char => char.id === charID);
    if (!favCharacters) {
      setFavCharacters(favoriteChar);
    } else {
      if (favCharacters.find(char => char.id === charID)) {
        setFavCharacters(favCharacters.filter(char => char.id !== charID));
      } else {
        setFavCharacters([...favCharacters, ...characters.filter(char => char.id === charID)]);
      }
    }   
    console.log(favCharacters);
  };

  // console.log(characters);
  return (
    <div className="App">
      <Routes>
        {characters && (
          <>
          <Route path="/" element={<CharactersList characters={characters} addToFav={addToFav} />} /> 
          <Route path="/:id" element={<CharacterInformation characters={characters} />} />
          <Route path="/favs" element={<LikedCharacters favCharacters={favCharacters} />} />
        </>)}
      </Routes>
    </div>
  );
}

export default App;
