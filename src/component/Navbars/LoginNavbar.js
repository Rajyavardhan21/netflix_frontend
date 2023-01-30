import logo from '../../Assets/navbarlogo.png';
import { Link } from 'react-router-dom';
import Search from './search';
function LoginNavbar() {
    return <div>
        <div className="header">
            <Link to="/"><img className="navLogo" src={logo} alt="" /></Link>
            <Search/>
            <div className="navLinks">
                <div className="nav">

                    <select href="">
                        <option value="English">English</option>
                        <option value="Hindi">हिंदी</option>
                    </select>
                </div>

                <Link to={'/login'} className="signIn text-decoration-none text-reset">Sign In</Link>
            </div>
        </div>
    </div>
}

export default LoginNavbar;