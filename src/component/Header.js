// import Navbar from "./Navbars/Navbar";
import backgroundImg from '../Assets/Bg.jpg'
import { Link } from "react-router-dom";
// import LoginNavbar from "./Navbars/LoginNavbar";
import Navbar from './Navbars/Navbar';
// import HomeBanner from "./Homebanner";
// import Search from "./search";


function Header() {

    return <div >

        <Navbar/>
        
        <div className="body">
            <div className="searchDiv">

                <img
                    className="bg-img"
                    src={backgroundImg}
                    alt=""
                />

                <div className="searchDesc text-white text-center">
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h4>Watch anywhere. Cancel anytime.</h4>
                    <h6>
                        Ready to watch? Enter your email to create or restart your
                        membership/
                    </h6>
                    <div className="row inputRow justify-content-center gy-3">
                        <input
                            type="Email"
                            placeholder="Email Address"
                            className=" col-sm-6 col-7 p-2 px-5 "
                        />
                        <button className=" col-sm-3 col-6 fs-6  email-button ">
                            <Link to={'/login'} className="text-decoration-none text-reset">Get started </Link>
                            <i className="zmdi zmdi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    </div>
}

        export default Header;