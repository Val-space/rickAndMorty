import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './likedCharacters.css';

export const LikedCharacters = ({ favCharacters }) => {
  return (
    <>
      <Link to="/">
        <Button sx={{ mt: 6 }} variant="contained" color="success">Go back to the main page</Button>
      </Link>
      <div className="favCharacters-container">
        {favCharacters.length > 0
          ? favCharacters.map(person => (
            <Card
              key={person.id}
              sx={{ width: 209 }}
            >
              <CardMedia
                component="img"
                height="140"
                image={person.image}
                style={{ width: '50%', margin: '0 auto', objectFit: 'contain' }}
                alt="person avatar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {person.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {person.type}
                </Typography>
              </CardContent>
            </Card>
          ))
          : <p className="empty-list-info">You didnt like any character</p>}
      </div>
    </>
  )
}
