import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieActors } from "redux/operations/filmsThunk";
import { useSelector } from "react-redux";
import { actorsSelector } from "redux/selectors/selectors";

const Actors = () => {
    const dispatch = useDispatch();
    const actors = useSelector(actorsSelector);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getMovieActors(id))
    }, [dispatch, id])

    const item = actors.map(actor => (
        <li key={actor.cast_id}>
            <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
                alt={`${actor.name}`} 
            />
            <h2>{actor.name}</h2>
            <p>{actor.character}</p>
        </li>
    ))

    return (
        <div>
            <ul>
                {item}
            </ul>
        </div>
    )
}

export default Actors;