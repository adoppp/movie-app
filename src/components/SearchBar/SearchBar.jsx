import Notiflix from "notiflix";
import { useDispatch } from "react-redux";
import { getByQuery } from "redux/operations/filmsThunk";
import { useState } from "react";
import classNames from "classnames/bind";

import styles from './SearchBar.module.scss';

const cn = classNames.bind(styles);

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleChange = (value) => {
        setQuery(value.target.value.trim().toLowerCase());
    }

    const handleSumbit = (form) => {
        form.preventDefault();

        if (query === '') {
           return Notiflix.Notify.warning('Enter a movie name!')
        }
        
        console.log(query)
        dispatch(getByQuery(query))
    }

    return (
        <form onSubmit={handleSumbit} className={cn('form')}>
            <input
                type="text"
                name="search"
                value={query}
                onChange={handleChange}
                placeholder="movie"
            />
            <button type="Sumbit">Search!(make svg)</button>
        </form>
    )
}

export { SearchBar };