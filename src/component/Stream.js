

import { useEffect, useState } from "react";
import { streamMovies } from "../api/api";
import { useParams } from "react-router-dom";

function Stream(){
const { id } = useParams();
const [videoUrl, setvideoUrl] = useState([]);
useEffect(()=>{
streamMovies(id).then( res => setvideoUrl(res.data))
},[id]);
if(id !=="ginny"){
console.log(videoUrl)
return <div >
<div className = "container-fluid d-flex justify-content-center align-item-center">
<iframe className="mt-5 mb-5 rounded-2 shadow-lg" width="1100" autoPlay muted height="600" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>
}else{
return <div >
<div className = "container-fluid d-flex justify-content-center align-item-center">
<iframe className="mt-5 mb-5 rounded-2 shadow-lg" width="1100" autoPlay muted height="600" src="https://www.youtube.com/embed/OKj4rB2zWv4"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

}

}

export default Stream;