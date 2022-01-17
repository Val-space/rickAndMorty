import { Character } from '../Character/Character';
import List from '@mui/material/List';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './characterList.css';

export const CharactersList = ({ characters, addToFav }) => {
  const navigate = useNavigate();
  const routeChange = (id) => {
    navigate(`/${id}`);
  }

  return (
    <>
      <section className="characters-section">
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {characters.map(character => (
            <Character key={character.id} character={character} addToFav={addToFav} />
          ))}
        </List>
        <div className="select-field">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            getOptionLabel={(option) => option.name}
            value={(option) => option.name}
            options={characters}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="character" />}
            onChange={(event, value) => routeChange(value.id)}
          />
        </div>
        <Link to="/favs">
          <Button sx={{ mt: 6 }} variant="contained" color="success">See characters you like</Button>
        </Link>
      </section>
    </>
  )
}
