import { useSelector } from "react-redux";
import { actorsSelector } from "redux/selectors/selectors";
import styles from './Actors.module.scss';
import classNames from "classnames/bind";
import img from '../../../public/Group 1.jpg'

const cn = classNames.bind(styles);

const Actors = () => {
    const actors = useSelector(actorsSelector);

    const item = actors.map(({ profile_path, name, character, cast_id }) => (
        <li key={cast_id} className={cn('item')}>
            <img
                src={
                    profile_path ?
                    `https://image.tmdb.org/t/p/w200${profile_path}` :
                    img
                } 
                alt={name} 
            />
            <h2>{name}</h2>
            <p>{character}</p>
        </li>
    ))

    return (
        <>
            <h2 className={cn('title')}>Actors</h2>
            <ul className={cn('list')}>
                {item}
            </ul>
        </>
    )
}

export default Actors;