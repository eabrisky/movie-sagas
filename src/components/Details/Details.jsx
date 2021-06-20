import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Details() {

    // const dispatch = useDispatch();
    const history = useHistory();

    const genres = useSelector(store => store.genres);

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

                {genres?.map((genre, i) => {

                    return (

                        <div>
                            <h2 key={i}>{genre?.title}</h2>
                            <img src={genre?.poster} alt={genre?.title} />
                            <p>{genre?.description}</p>
                            <h3>Genre(s)</h3>
                            <p>{genre?.genre}</p>
                        </div>

                    )

                })}

            </section>

            <div>
                <button onClick={handleClick}>Back To List</button>
            </div>

        </div>

    ) // end return

} // end Details fn

export default Details;