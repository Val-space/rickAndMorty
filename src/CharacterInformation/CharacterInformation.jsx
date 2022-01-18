import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import './characterPage.css';

export const CharacterInformation = ({ characters }) => {
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const current = characters.filter(char => char.id === parseInt(id))[0];

    setCurrentCharacter(current);
  }, [id, characters])

  const handleEpisodeDisplay = (episodes) => {
    const getEpisodeNumber = episodes.map(episode => {
      const indexSlash = episode.lastIndexOf('/');

      return episode.slice(indexSlash + 1);
    })

    return getEpisodeNumber.join(', ');
  }


  return (
    <>
    {currentCharacter &&
      <div className="container">
        <section className="profile">
          <div className="profile__avatar">
            <img src={currentCharacter.image} alt="avatar" className="profile__img" />
          </div>
          <div className="profile-info">
            <div className="profile-info__row">
              Name: <span>{currentCharacter.name}</span>
            </div>
            <div className="profile-info__row">
              Species: <span>{currentCharacter.species}</span>
            </div>
            <div className="profile-info__row">
              Gender: <span>{currentCharacter.gender}</span>
            </div>
            <div className="profile-info__row">
              Episode appearance: <br /> <span>{handleEpisodeDisplay(currentCharacter.episode)}.</span>
            </div>
            <div className="profile-info__row">
              Status: <span>{currentCharacter.status}</span>
            </div>
            <div className="profile-info__row">
              Location: <span>{currentCharacter.location.name}</span>
            </div>
            <div className="profile-info__row">
              Created: <span>{new Date(currentCharacter.created).toLocaleDateString()}</span>
            </div>
          </div>
        </section>
        <Link to="/">
          <Button sx={{ mt: 6 }} variant="contained" color="success">Go back to the main page</Button>
        </Link>
      </div>
      }
    </>
  )
}
