import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Details() {

    const dispatch = useDispatch();
    const history = useHistory();

    const movie = useSelector(store => store.movie);
    const genres = useSelector(store => store.genres);

    // console.log(movie);
    // id
    // title
    // image
    // description
    
    console.log(genres);

    // useEffect to keep movie details persisting on page refresh
    // useEffect(() => {
    //     getDetails();
    // }, []); // end useEffect

    // const getDetails = () => {

    //     dispatch({
    //         type : 'GET_DETAILS'
    //     }) // end dispatch

    // } // end getDetails

    const handleClick = () => {

        // navigate user to '/' list page
        history.push('/');

    } // end handleClick

    return (
        <div>

            <section className="movieDetails">

                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title} />
                <p>{movie.description}</p>

            </section>

            <section className="genreDetails">

                <h2>Genre(s)</h2>

                <div>
                    {genres.map((genre, i) => {

                        return (
                            <p key={i} className="genreList">{genre.genre}</p>
                        ) // end sub-return

                    })}
                </div>

            </section>

            <div>
                <button onClick={handleClick}>Back To List</button>
            </div>

        </div>


    ) // end return

} // end Details fn

export default Details;