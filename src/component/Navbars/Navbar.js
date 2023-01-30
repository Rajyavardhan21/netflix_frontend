import logo from '../../Assets/navbarlogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return <div>
    <div className="header">
      <Link to="/"><img className="navLogo" src={logo} alt="" /></Link>
      <div className="navLinks">
        <div className="nav">

          <select href="">
            <i className
              ="languageLogo zmdi zmdi-globe-alt"></i>
            <option value="English">English</option>
            <option value="Hindi">हिंदी</option>
          </select>
        </div>
        <Link to={'/login'} className="signIn text-decoration-none text-reset">Sign In</Link>
      </div>
    </div>
  </div>
}

export default Navbar;