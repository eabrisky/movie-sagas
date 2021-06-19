import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Details() {

    const history = useHistory();

    const movie = useSelector(store => store.movie);
    const genres = useSelector(store => store.genre);

    console.log(movie);
    // id
    // title
    // image
    // description
    
    console.log(genres);

    const handleClick = () => {

        // navigate user to '/' list page
        history.push('/');

    } // end handleClick

    return (
        <div>

            <section className="details">

                <p> in Details </p>
                <p>{movie.title}</p>
                <img src={movie.poster} alt={movie.title} />
                <p>{movie.description}</p>

            </section>

            <div>
                <button onClick={handleClick}>Back To List</button>
            </div>

        </div>


    ) // end return

} // end Details fn

export default Details;