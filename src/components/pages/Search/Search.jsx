import { useSelector } from "react-redux";
import { querySelector } from "redux/selectors/selectors";
import classNames from "classnames/bind";

import styles from './Search.module.scss';

import { List } from "components/List/List";
import { SearchBar } from "components/SearchBar";

const cn = classNames.bind(styles);

const Search = () => {
    const films = useSelector(querySelector);

    return (
        <section className={cn('section')}>
            <SearchBar />
            {
            films.length > 0
                &&
                <div className={cn('container')}>
                    <List films={films} />
                </div>
            }
        </section>
    )
}

export default Search;