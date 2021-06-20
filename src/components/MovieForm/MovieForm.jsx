import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// dispatch with a payload to a post route that connects to movie.router.js' router.post

// form
    // input for movie title
    // input for movie poster image URL

    // text area for movie description

    // a dropdown menu for genre selection
        // use genres in db for menu

// cancel button
    // takes user back to home/list page
// save button
    // saves inputs into database
    // bring user to the home/list page
    // which now has the new movie

function MovieForm() {

    const dispatch = useDispatch();

    const [ newMovie, setNewMovie ] = useState('');

    const handleSubmit = () => {
        
        //dispatch to rootSaga with payload of local state (as object)
        dispatch({

            type: 'ADD_NEW_MOVIE',
            payload: newMovie

        }) // end dispatch
        setNewMovie('');

    } // end handleSubmit fn

    const handleChange = (event) => {

        event.preventDefault();
        //change state to event.target.value
        setNewMovie(event.target.value);

    } // end handleChange

    const handleCancel = () => {
        setNewMovie('');
    } // end handleCancel

    return(

        <section className="formSection">

            <form className="form" onSubmit={handleSubmit}>
                <input onChange={handleChange} placeholder="Movie Title Here..." value={newMovie}/>
                <button onClick={handleCancel}>Cancel</button>
                <button type="submit">Save</button>
            </form>

        </section>

    )

} // end MovieForm

export default MovieForm;