import { MovieDetails } from "components/MovieDetails";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet, useParams } from "react-router-dom";
import { getMovieDetails } from "redux/operations/filmsThunk";
import classNames from "classnames/bind";
import styles from './MovieCard.module.scss';
import { errorSelector, loaderSelector } from "redux/selectors/selectors";
import { Loader } from "components/Loader";
import { Error } from "components/Error";

const cn = classNames.bind(styles)

const MovieCard = () => {
    const isLoading = useSelector(loaderSelector);
    const error = useSelector(errorSelector)
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getMovieDetails(id))
    }, [dispatch, id])

    return (
        <div className={cn('container__card')}>
            {isLoading ? <Loader /> : (
            <div>
            <MovieDetails />
                <div>
                    <ul>
                        <li>
                            <Link to='actors' >
                                <span>Actors</span>
                            </Link>
                        </li>
                        <li>
                            <Link >
                                <span>Reviews</span>
                            </Link>
                        </li>
                    </ul>
                        
                    <Suspense fallback={<Loader />} >
                        <Outlet />        
                    </Suspense>
                </div>
            </div>
            )
            }
            {error && <Error message={error} />}
        </div>
    )
}

export { MovieCard };