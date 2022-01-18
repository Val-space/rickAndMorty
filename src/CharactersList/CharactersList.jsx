import React from 'react';
import { Character } from '../Character/Character';
import List from '@mui/material/List';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './characterList.css';

export const CharactersList = React.memo(({ characters, updateFavs, favCharacters }) => {
  const navigate = useNavigate();
  const routeChange = (id) => {
    navigate(`/${id}`);
  }

  return (
    <>
      <section className="characters-section">
        <div className="select-field">
          <Autocomplete
            disablePortal
            style={{ color: '#fff' }}
            id="combo-box-demo"
            getOptionLabel={(option) => option.name}
            value={(option) => option.name}
            options={characters}
            renderInput={(params) => <TextField {...params} label="character" />}
            onChange={(event, value) => routeChange(value.id)}
          />
          <Link to="/favs">
            <Button sx={{ mt: 6 }} variant="contained" color="success">See characters you like</Button>
          </Link>
        </div>
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: '#f9f9f947' }}>
          {characters.map(character => (
            <Character
              key={character.id}
              character={character}
              updateFavs={updateFavs}
              favCharacters={favCharacters}
            />
          ))}
        </List>
      </section>
    </>
  )
})
