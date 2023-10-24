import { useDispatch, useSelector } from "react-redux"
import { actorsSelector, detailsSelector, reviewsSelector } from "redux/selectors/selectors"
import classNames from "classnames/bind"

import styles from './MovieDetails.module.scss'
import { Link, useLocation } from "react-router-dom"
import { useRef } from "react"
import { deleteActors, deleteReviews } from "redux/reducers/filmReducer"

const cn = classNames.bind(styles)

const MovieDetails = () => {
    const details = useSelector(detailsSelector)
    const actors = useSelector(actorsSelector);
    const reviews = useSelector(reviewsSelector);
    const dispatch = useDispatch();
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? '/')

    const handleClear = () => {
        if (actors) {
            dispatch(deleteActors())
        } 
        
        dispatch(deleteReviews())
    }

    return (
        <div className={cn('container')}>
            <div>
                <Link to={backLinkRef.current} onClick={handleClear}>
                    <span className={cn('back_link')}>Back</span>
                </Link>
                <div className={cn('poster')}>
                    <img
                        src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}
                        alt={details.title} />
                </div>
            </div>
            <div className={cn('details')}>
                <ul>
                    <li>
                        <h2>{details.title}</h2>
                    </li>
                    <li>
                        <p className={cn('description')}>{details.overview}</p>
                    </li>
                    <li>
                        <p>{details.genres?.map(({ name }) => name).join(', ')}</p>
                    </li>
                    <li>
                        <p>User Score: {Math.round(details.vote_average  * 10)}</p>
                    </li>
                    <li>
                        <p>Vote count: {details.vote_count}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export { MovieDetails };