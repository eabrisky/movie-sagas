import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// inputs
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

// drop-down menu from material-ui
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
    const history = useHistory();

    const [newMovieTitle, setNewMovieTitle] = useState('');
    const [newMoviePoster, setNewMoviePoster] = useState('');
    const [newMovieDescription, setNewMovieDescription] = useState('');
    const [newMovieGenre, setNewMovieGenre] = useState('');

    const newMovie = {
        title: newMovieTitle,
        poster: newMoviePoster,
        description: newMovieDescription,
        genre: newMovieGenre
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log(newMovieTitle);
        console.log(newMoviePoster);
        console.log(newMovieDescription);
        console.log(newMovieGenre);

        //dispatch to rootSaga with payload of local state (as object)
        dispatch({

            type: 'ADD_NEW_MOVIE',
            payload: newMovie

        }) // end dispatch

        // setNewMovie('');
        setNewMovieTitle('');
        setNewMoviePoster('');
        setNewMovieDescription('');
        setNewMovieGenre('');

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

    const handleChangeGenre = (event) => {
        setNewMovieGenre(event.target.value);
        setAnchorEl(null);
      };

    const handleCancel = () => {
        // navigate user back to '/' list page
        history.push('/');
    } // end handleCancel

    // inputs
    const classes = useStyles();

    // DROP-DOWN MENU
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (

        <section className="formSection">

            <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">

                {/* title */}
                <TextField required={true} id="standard-basic" label="title" onChange={handleChangeTitle} />
                {/* poster url */}
                <TextField required={true} id="standard-basic" label="poster url" onChange={handleChangePoster} />
                {/* description */}
                <TextField
                    required={true}
                    id="standard-multiline-flexible"
                    label="description"
                    multiline
                    rowsMax={4}
                    onChange={handleChangeDescription}
                />

                {/* genre */}
                <div>
                    <Button variant="outlined" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Genre
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleChangeGenre} value="Adventure">Adventure</MenuItem>
                        <MenuItem onClick={handleChangeGenre}>Animated</MenuItem>
                        <MenuItem onClick={handleChangeGenre}>Biographical</MenuItem>
                        <MenuItem onClick={handleChangeGenre}>Comedy</MenuItem>
                        <MenuItem onClick={handleChangeGenre}>Disaster</MenuItem>
                        <MenuItem onClick={handleChangeGenre}>Drama</MenuItem>
                        <MenuItem onClick={handleChangeGenre}>Epic</MenuItem>
                        <MenuItem onClick={handleChangeGenre}>Fantasy</MenuItem>
                        <MenuItem onClick={handleChangeGenre}>Musical</MenuItem>
                        <MenuItem onClick={handleChangeGenre}>Romantic</MenuItem>
                        <MenuItem onClick={handleChangeGenre}>Science Fiction</MenuItem>
                        <MenuItem onClick={handleChangeGenre}>Space-Opera</MenuItem>
                        <MenuItem onClick={handleChangeGenre}>Superhero</MenuItem>
                    </Menu>
                </div>

                <Button variant="outlined" color="secondary" onClick={handleCancel}>Cancel</Button>
                <Button variant="outlined" color="primary" type="submit">Save</Button>
            </form>

        </section>

    ) // end return

} // end MovieForm

export default MovieForm;