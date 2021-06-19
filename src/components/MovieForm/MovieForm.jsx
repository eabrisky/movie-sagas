// import useState

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

    const handleSubmit = () => {
        
        //dispatch to rootSaga with payload of local state (as object)

    } // end handleSubmit fn

    const handleChange = (event) => {
        event.preventDefault();
        //change state to event.target.value
    }

    return(

        <section className="formSection">

            <form className="form" onSubmit={handleSubmit}>
                <input onChange={handleChange} placeholder="movie stuff 🥴" />
                <button type="submit">Submit</button>
            </form>

        </section>

    )

} // end MovieForm

export default MovieForm;