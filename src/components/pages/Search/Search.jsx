import { useDispatch, useSelector } from "react-redux";
import { errorSelector, loaderSelector, querySelector } from "redux/selectors/selectors";
import classNames from "classnames/bind";

import styles from './Search.module.scss';

import { List } from "components/List/List";
import { SearchBar } from "components/SearchBar";
import { Loader } from "components/Loader";
import { Error } from "components/Error";
import { useEffect } from "react";
import { deleteQuery } from "redux/reducers/filmReducer";

const cn = classNames.bind(styles);

const Search = () => {
    const films = useSelector(querySelector);
    const isLoading = useSelector(loaderSelector)
    const error = useSelector(errorSelector)
    const dispatch = useDispatch();

    useEffect(() => {
        if (films.length > 0)
        dispatch(deleteQuery())
    }, [dispatch])

    return (
        <section className={cn('section')}>
            <SearchBar />
            {
            films.length > 0
                &&
                <div className={cn('container')}>
                        {isLoading ? <Loader /> : <List films={films} />}
                </div>
            }
            {error && (<Error message={error} />)}
        </section>
    )
}

export default Search;