import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import './characterPage.css';


export const CharacterInformation = ({ characters }) => {
  // const [currentCaracter, setCurrentCharacter] = useState(null);
  const { id } = useParams();

  // console.log(characters.filter(char => char.id === parseInt(id))[0]);
  const currentCaracter = characters.filter(char => char.id === parseInt(id))[0];
  // useEffect(() => {
  //   setCurrentCharacter(characters.filter(char => char.id === id))
  // },[]);

  return (
    <>
       <div className="container">
        <section className="profile">
          <img src={currentCaracter.image} />
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
              {/* {currentCaracter.episode} */}
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
