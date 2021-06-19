import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleClick = (movie) => {

        console.log(movie);

        // dispatch to rootSaga, send clicked movie as payload
        dispatch({

            type : 'GET_DETAILS',
            payload : movie

        }) // end dispatch

        // navigate user to '/details' page
        history.push('/details');

    } // end handleClick

    return (

        <div>

            <main>
                <h1>MovieList</h1>
                <section className="movies">
                    {movies.map(movie => {
                        return (

                            <div key={movie.id} >
                                <h3>{movie.title}</h3>
                                {/* on click, handleClick fn and pass movie */}
                                <img src={movie.poster} alt={movie.title} onClick={() => handleClick(movie)}/>
                                {/* pass handleClick as anonymous fn to prevent infinite loop */}
                                {/* otherwise, it'll execute the function instead of just calling it */}
                                <p>{movie.description}</p>
                                {/* add movie description to each movie */}
                            </div>

                        );
                    })}
                </section>
            </main>

            <nav>

            </nav>

        </div>

    ); // end return

} // end MovieList fn

export default MovieList;