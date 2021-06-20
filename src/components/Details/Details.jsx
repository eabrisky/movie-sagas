import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

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

    // button
    const classes = useStyles();

    return (

        <div>

            <section className="movieDetails">

                {genres?.map((genre, i) => {

                    return (

                        <div key={i}>
                            <h2>{genre?.title}</h2>
                            <img src={genre?.poster} alt={genre?.title} />
                            <p>{genre?.description}</p>
                            <h3>Genre(s)</h3>
                            <p>{genre?.genre}</p>
                        </div>

                    )

                })}

            </section>

            <div className={classes.root}>
                <Button variant="outlined" color="primary" onClick={handleClick}>Back To List</Button>
            </div>

        </div>

    ) // end return

} // end Details fn

export default Details;