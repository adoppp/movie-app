import styles from './Trending.module.scss';
import classNames from 'classnames/bind';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTrendingMovies } from "redux/operations/filmsThunk";
import { errorSelector, filmSelector, loaderSelector } from 'redux/selectors/selectors';

const cn = classNames.bind(styles);

const Trending = () => {
    const films = useSelector(filmSelector);
    const isLoading = useSelector(loaderSelector);
    const error = useSelector(errorSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrendingMovies())
    }, [dispatch])



    return (
        <section className={cn('section')}>
            <div className={cn('container')}>
                <h1>Trending today</h1>
                {isLoading ? <Loader /> : <List films={films} />}
                {error && <Error message={error} />}
            </div>
        </section>
    )
}

export { Trending };