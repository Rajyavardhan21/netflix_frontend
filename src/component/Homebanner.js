import { Link } from "react-router-dom";

const HomeBanner = () => {
  const id = "ginny"
  return (
     
    <div className="banner">
      <div className="container-fluid px-5 ">
        <div className="banner__contents">
          <h1 className="banner__title">Ginny &amp; Georgia</h1>
          <div className="banner__buttons">
          <Link className="text-decoration-none text-reset" to={`/stream/${id}`}><button className="banner__button">Play</button></Link>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description text-white">
            Angsty and awkward fifteen year old Ginny Miller often feels more
            mature than her thirty year old mother, the irresistible and dynamic
            Georgia Miller...
          </h1>
        </div>
        <div className="banner--fadeBottom"></div>
      </div>
    </div>

  )
}

export default HomeBanner;