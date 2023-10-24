import { Link } from "./NavLink.styled";
import classNames from "classnames/bind";
import styles from './Header.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { deleteActors, deleteReviews } from "redux/reducers/filmReducer";

const cn = classNames.bind(styles);


const Header = () => {
    const dispatch = useDispatch();

    // const handleClear = () => {
    //         if (actors) {
    //             dispatch(deleteActors())
    //         } 
            
    //         dispatch(deleteReviews())
    //     }
    return (
        <header>
            <div className={cn('container')}>
                <nav>
                    <ul className={cn('container__list')}>
                        <li>
                            <Link to='/' className={cn('link')}
                            // onClick={handleClear}
                            >
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/search'
                                // onClick={handleClear}
                            >
                                <span>Search</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export { Header };