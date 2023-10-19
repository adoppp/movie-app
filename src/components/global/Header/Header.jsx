import { Link } from "./NavLink.styled";
import classNames from "classnames/bind";
import styles from './Header.module.scss';

const cn = classNames.bind(styles);

const Header = () => {
    return (
        <header>
            <div className={cn('container')}>
                <nav>
                    <ul className={cn('container__list')}>
                        <li>
                            <Link to='/' className={cn('link')}>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/search'>
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