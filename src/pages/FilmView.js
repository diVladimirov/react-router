import { useState, useEffect } from 'react';
import { fetchFilms } from '../services/api';
import mapper from '../helpers/GetPop';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

const FilmView = () => {
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { url } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    fetchFilms(page)
      .then(({ data }) => {
        setFilms(prevFilms => [...prevFilms, ...mapper(data.results)]);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, [page]);

  return (
    <>
      <h1>View</h1>
      <ul>
        {films.map(({ id, title, backdrop_path }) => (
          <li key={id}>
            <h2>{title}</h2>
            <img src={`https://image.tmdb.org/t/p/w400/${backdrop_path}`} alt={title} />
            <Link
              to={{
                pathname: `${url}/${id}`,
                state: { from: location },
              }}
            >
              About film
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          setPage(prevPage => prevPage + 1);
        }}
      >
        Add
      </button>
    </>
  );
};

export default FilmView;
