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
    const [ newMovieTitle, setNewMovieTitle ] = useState('');
    const [ newMoviePoster, setNewMoviePoster ] = useState('');
    const [ newMovieDescription, setNewMovieDescription ] = useState('');

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log(newMovieTitle);
        console.log(newMoviePoster);
        console.log(newMovieDescription);
        
        //dispatch to rootSaga with payload of local state (as object)
        // dispatch({

        //     type: 'ADD_NEW_MOVIE',
        //     payload: newMovie

        // }) // end dispatch

        // setNewMovie('');
        setNewMovieTitle('');
        setNewMoviePoster('');
        setNewMovieDescription('');

    } // end handleSubmit

    const handleChangeTitle = (event) => {
        event.preventDefault();
        //change state to event.target.value
        setNewMovieTitle(event.target.value);
    } // end handleChangeTitle

    const handleChangePoster = (event) => {
        event.preventDefault();
        setNewMoviePoster(event.target.value);
    } // end handleChangePoster

    const handleChangeDescription = (event) => {
        event.preventDefault();
        setNewMovieDescription(event.target.value);
    } // end handleChangeDescription

    const handleCancel = () => {
        // clear form
        // setNewMovieTitle('');
    } // end handleCancel

    return(

        <section className="formSection">

            <form className="form" onSubmit={handleSubmit}>
                <input required onChange={handleChangeTitle} placeholder="Movie Title Here..." value={newMovieTitle} />
                <input required onChange={handleChangePoster} placeholder="Movie Poster URL Here..." value={newMoviePoster} />
                <input required onChange={handleChangeDescription} placeholder="Movie Description Here..." value={newMovieDescription} />
                <button onClick={handleCancel}>Cancel</button>
                <button type="submit">Save</button>
            </form>

        </section>

    )

} // end MovieForm

export default MovieForm;