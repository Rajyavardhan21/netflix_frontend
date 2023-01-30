// import { fetchMovieWithId } from "../api/api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieWithId } from "../api/api";

function Movie() {

    const id = (useParams());

    const [movieData, setMovieData] = useState([]);
    useEffect(() => {
        fetchMovieWithId(id.id).then(res => setMovieData(res.data))
    }, [id]); // <-- add param to the dependency array

    return <div>
        <div className="banner" style={{ backgroundImage: `url(${movieData.image})` }}>
            <div className="container-fluid px-5 ">
                <div className="banner__contents">
                    <h1 className="banner__title">{movieData.title}</h1>
                    <div className="banner__buttons mt-5">

                        <Link className="text-decoration-none text-reset" to={`/stream/${movieData.id}`}><button className="banner__button">Play</button></Link>

                        <button className="banner__button"><Link className="text-decoration-none text-reset" to="/login">Back to Movies</Link></button>
                    </div>
                    <div >
                        <h1 className="banner__description text-white ">
                            {movieData.description}
                        </h1>
                    </div>
                </div>
                <div className="banner--fadeBottom"></div>
            </div>
        </div>

    </div>

}

export default Movie;