import { useEffect, useState, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getCharacters } from './api/api';
import { CharactersList } from './CharactersList/CharactersList';
import { CharacterInformation } from './CharacterInformation/CharacterInformation';
import { LikedCharacters } from './LikedCharacters/LikedCharacters';
import './App.css';

function App() {
  const [characters, setCharacters] = useState(null);
  const [favCharacters, setFavCharacters] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);


  useEffect(() => {
    const getData = async () => {
      try {
        const charactersFromServer = await getCharacters(1).then(res => res.results);
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

  useEffect(() => {
    localStorage.setItem('favCharacters', JSON.stringify(favCharacters));
  }, [favCharacters]);


  useEffect(() => {
    const getData = async () => {
      try {
        const charactersFromServer = await getCharacters(page).then(res => res.results);
        setCharacters(charactersFromServer);
        setError(false);
      } catch (error) {
        setError(true);
      }
    }

    getData();
  }, [page])

  const updateFavs = useCallback((charID) => {
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
  }, [characters, favCharacters]);

  const changePage = useCallback((pageNum) => {
    setPage(pageNum)
  }, [])

  return (
    <div className="App">
      {!error &&
        <Routes>
          {characters && (
            <>
              <Route exact path="/rickAndMorty" element={
                <CharactersList
                  characters={characters}
                  updateFavs={updateFavs}
                  favCharacters={favCharacters}
                  page={page}
                  changePage={changePage}
                />}
              />
              <Route path="/rickAndMorty/:id" element={<CharacterInformation characters={characters} />} />
              <Route path="/rickAndMorty/favs" element={<LikedCharacters favCharacters={favCharacters} />} />
            </>)}
        </Routes>
      }
    </div>
  );
}

export default App;
