import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchFilmsDetails } from '../services/api';

const FilmDetails = () => {
  const [film, setFilm] = useState([]);
  const data = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchFilmsDetails(data.filmid)
      .then(({ data }) => {
        setFilm(data);
      })
      .catch(error => console.log(error));
  }, [data.filmid]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/films');
  };

  const { original_title, release_data, overview } = film;

  return (
    <section>
      <h2>{original_title}</h2>
      <p>{release_data}</p>
      <p>{overview}</p>

      <button type="button" onClick={onGoBack}>
        Go back
      </button>
    </section>
  );
};

export default FilmDetails;

// const movieID = useParams();
// const id = Object.values(movieID);
