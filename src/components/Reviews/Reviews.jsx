import { useSelector } from 'react-redux';
import styles from './Reviews.module.scss';
import classNames from 'classnames/bind';
import { reviewsSelector } from 'redux/selectors/selectors';
import { Notify } from 'notiflix';

const cn = classNames.bind(styles);

const Reviews = () => {
    const reviews = useSelector(reviewsSelector);

    const item = reviews.map(({
        author_details, avatar_path, content, created_at, id
    }) => 
        <li key={id}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200${avatar_path}`} alt={author_details.username} />
                <h3>{author_details.username}</h3>
            </div>
            <p>{content}</p>
            <span>{created_at}</span>
        </li>
    )

    return item ? <ul>{item}</ul> : <div>{Notify.warning('Not found any review')}</div>;
}

export { Reviews };