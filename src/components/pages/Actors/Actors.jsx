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

    const item = actors.map(({ profile_path, name, character, cast_id }) => (
        <li key={cast_id}>
            <img
                src={
                    profile_path ?
                    `https://image.tmdb.org/t/p/w200${profile_path}` :
                    null
                } 
                alt={`${name}`} 
            />
            <h2>{name}</h2>
            <p>{character}</p>
        </li>
    ))

    useEffect(() => {
        dispatch(getMovieActors(id))
    }, [dispatch, id])

    return (
        <div>
            <ul>
                {item}
            </ul>
        </div>
    )
}

export default Actors;