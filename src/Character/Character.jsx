import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import './character.css';

export const Character = React.memo(({ character, updateFavs, favCharacters }) => {

  return (
    <ListItem
      secondaryAction={
        <div className="like-btn" onClick={() => updateFavs(character.id)} >
          {favCharacters.find(char => char.id === character.id) ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart style={{ color: 'red' }} />}
        </div>
      }
      disablePadding
    >
      <Link to={`/rickAndMorty/${character.id}`} key={character.id}>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              alt={`Avatar image`}
              src={`${character.image}`}
            />
          </ListItemAvatar>
          <ListItemText id={character.id} primary={character.name} secondary={character.status} />
        </ListItemButton>
      </Link>

    </ListItem>
  )
})
