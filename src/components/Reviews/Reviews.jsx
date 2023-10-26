import { useSelector } from 'react-redux';
import styles from './Reviews.module.scss';
import classNames from 'classnames/bind';
import { reviewsSelector } from 'redux/selectors/selectors';
import { Notify } from 'notiflix';
import img from '../../public/avatar.png'

const cn = classNames.bind(styles);

const Reviews = () => {
    const reviews = useSelector(reviewsSelector);

    const item = reviews.map(({
        author_details, avatar_path, content, created_at, id
    }) => 
        <li key={id} className={cn('container__card')}>
            <div>
                <img src={avatar_path ?
                    `https://image.tmdb.org/t/p/w200${avatar_path}` :
                    img}
                    alt={author_details.username}
                />
                <h3>{author_details.username}</h3>
            </div>
            <p>{content}</p>
            <span>{created_at.replace(new RegExp(`${'T'}.*`), '')}</span>
        </li>
    )

    return item ?
        <>
            <h2 className={cn('title')}>Reviews</h2>
            <ul>
                {item}
            </ul>
        </>
        :
        <div>{Notify.warning('Not found any review')}</div>;
}

export { Reviews };