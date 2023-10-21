import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';

import styles from './List.module.scss';

const cn = classNames.bind(styles);

const List = ({films}) => {
    const location = useLocation();

    const item = films.map(film =>
        <li key={film.id} className={cn('container__list-item')}>
            <Link to={`/search/${film.id}`} state={{ from: location }} >
                <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={film.title} />
                <div className={cn('background')}>
                    <h2>{film.title}</h2>
                </div>
            </Link>
        </li>
    );

    return <ul className={cn('container__list')}>{item}</ul>
};

export { List };