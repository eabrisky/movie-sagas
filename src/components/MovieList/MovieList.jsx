import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import Details from '../Details/Details.jsx';

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleClick = () => {

        console.log('in handleClick');

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
                                <img src={movie.poster} alt={movie.title} onClick={handleClick}/>
                            </div>

                        );
                    })}
                </section>
            </main>

        </div>

    ); // end return

} // end MovieList fn

export default MovieList;