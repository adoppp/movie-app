import styles from './Trending.module.scss';
import classNames from 'classnames/bind';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom';

import { getTrendingMovies } from "redux/operations/filmsThunk";
import { filmSelector } from 'redux/selectors/selectors';

const cn = classNames.bind(styles);

const Trending = () => {
    const films = useSelector(filmSelector);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrendingMovies())
    }, [dispatch])

    const item = films.map(film =>
        <li key={film.id} className={cn('container__list-item')}>
            <Link to={`/search/${film.id}`} state={{ from: location }} >
                <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={film.title} />
                <div className={cn('background')}>
                    <h2>{film.title}</h2>
                </div>
            </Link>
        </li>
    )

    return (
        <section>
            <div className={cn('container')}>
                <h1>Trending today</h1>
                <ul className={cn('container__list')}>
                    {item}
                </ul>
            </div>
        </section>
    )
}

export { Trending };