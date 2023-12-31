import { MovieDetails } from "components/MovieDetails";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getMovieActors, getMovieReviews } from "redux/operations/filmsThunk";
import { getMovieDetails } from "redux/operations/filmsThunk";
import classNames from "classnames/bind";
import styles from './MovieCard.module.scss';
import { actorsSelector, errorSelector, loaderSelector, reviewsSelector } from "redux/selectors/selectors";
import { Loader } from "components/Loader";
import { Error } from "components/Error";
import Actors from "components/pages/Actors/Actors";
import { Reviews } from "components/Reviews";
import { deleteActors, deleteReviews } from "redux/reducers/filmReducer";
import { Notify } from "notiflix";

const cn = classNames.bind(styles)

const MovieCard = () => {
    const isLoading = useSelector(loaderSelector);
    const error = useSelector(errorSelector);
    const actors = useSelector(actorsSelector);
    const reviews = useSelector(reviewsSelector);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getMovieDetails(id))
        dispatch(getMovieReviews(id))
        dispatch(getMovieActors(id))
    }, [dispatch, id])

    return (
        <div className={cn('container__card')}>
            {isLoading ? <Loader /> : (
            <div>
            <MovieDetails />
                <div>
                        {actors && <Actors />}
                        {reviews && <Reviews />}
                </div>
            </div>
            )
            }
            {error && <Error message={error} />}
        </div>
    )
}

export { MovieCard };