import { useEffect, useState } from "react";
import { fetchAllmovies } from "../api/api";
import { Link } from "react-router-dom";


const MyList = () => {
  const [list, setList] = useState([]);
  useEffect(()=>{
    fetchAllmovies().then( res => setList(res.data))
  },[]); // <-- add param to the dependency array
  console.log(list)
  return(
    <div className="list bg_black">
      <div className="row">
        <h2 className="text-white title">{ "Top 20 Movies" }</h2>
        <div className="col">
          <div className="row__posters">
            {
              list.map(item =><Link to={`/movies/${item.id}`} > <img
                className="row__poster row__posterLarge"
                src={item.image}
                alt={item.title}
              /></Link>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyList;