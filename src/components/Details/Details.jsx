import { useHistory } from 'react-router-dom';

function Details() {

    const history = useHistory();

    const handleClick = () => {

        // navigate user to '/' list page
        history.push('/');

    } // end handleClick

    return (
        <div>

            <section className="details">

                <p> in Details </p>

            </section>

            <div>
                <button onClick={handleClick}>Back To List</button>
            </div>

        </div>


    ) // end return

} // end Details fn

export default Details;