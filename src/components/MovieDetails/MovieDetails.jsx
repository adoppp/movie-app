import { useSelector } from "react-redux"
import { detailsSelector } from "redux/selectors/selectors"
import classNames from "classnames/bind"

import styles from './MovieDetails.module.scss'
import { Link, useLocation } from "react-router-dom"
import { useRef } from "react"

const cn = classNames.bind(styles)

const MovieDetails = () => {
    const details = useSelector(detailsSelector)
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? '/')

    return (
        <div className={cn('container')}>
            <Link to={backLinkRef.current}>
                <span className={cn('back_link')}>Back</span>
            </Link>
            <div className={cn('poster')}>
                <img
                    src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}
                    alt={details.title} />
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