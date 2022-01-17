import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import './character.css';

export const Character = ({ character, addToFav }) => {
  return (
    <ListItem
    secondaryAction={
      <>
      {/* <Button variant="contained" color="success" onClick={() => addToFav(character.id)}>LIKE</Button> */}
      <div className="like-btn" onClick={() => addToFav(character.id)}>
        like/dislike
      </div>
      </>
    }
    disablePadding
    >
  <Link to={`/${character.id}`} key={character.id}>
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
}
