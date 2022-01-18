import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import './characterPage.css';

export const CharacterInformation = ({ characters }) => {
  const { id } = useParams();
  const currentCaracter = characters.filter(char => char.id === parseInt(id))[0];

  const handleEpisodeDisplay = (episodes) => {
    const getEpisodeNumber = episodes.map(episode => {
      const indexSlash = episode.lastIndexOf('/');

      return episode.slice(indexSlash + 1);
    })

    return getEpisodeNumber.join(', ');
  }

  return (
    <>
      <div className="container">
        <section className="profile">
          <div className="profile__avatar">
            <img src={currentCaracter.image} alt="avatar" className="profile__img" />
          </div>
          <div className="profile-info">
            <div className="profile-info__row">
              Name: <span>{currentCaracter.name}</span>
            </div>
            <div className="profile-info__row">
              Species: <span>{currentCaracter.species}</span>
            </div>
            <div className="profile-info__row">
              Gender: <span>{currentCaracter.gender}</span>
            </div>
            <div className="profile-info__row">
              Episode appearance: <br /> <span>{handleEpisodeDisplay(currentCaracter.episode)}.</span>
            </div>
            <div className="profile-info__row">
              Status: <span>{currentCaracter.status}</span>
            </div>
            <div className="profile-info__row">
              Location: <span>{currentCaracter.location.name}</span>
            </div>
            <div className="profile-info__row">
              Created: <span>{new Date(currentCaracter.created).toLocaleDateString()}</span>
            </div>
          </div>
        </section>
        <Link to="/">
          <Button sx={{ mt: 6 }} variant="contained" color="success">Go back to the main page</Button>
        </Link>
      </div>
    </>
  )
}
