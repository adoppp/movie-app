import { MovieCard } from "components/MovieCard/MovieCard";
import classNames from "classnames/bind";
import styles from './Movie.module.scss'

const cn = classNames.bind(styles)

const Movie = () => {
    return (
        <section className={cn('section')}>
            <div className={cn('container')}>
                <MovieCard />
            </div>
        </section>
    )
}

export default Movie;