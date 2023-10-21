import styles from './Trending.module.scss';
import classNames from 'classnames/bind';
import { List } from 'components/List/List';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTrendingMovies } from "redux/operations/filmsThunk";
import { filmSelector } from 'redux/selectors/selectors';

const cn = classNames.bind(styles);

const Trending = () => {
    const films = useSelector(filmSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrendingMovies())
    }, [dispatch])



    return (
        <section className={cn('section')}>
            <div className={cn('container')}>
                <h1>Trending today</h1>
                <List films={films} />
            </div>
        </section>
    )
}

export { Trending };