import './Navbar.scss';
import '../../partials/_partials.scss';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import profilePic from '../../assets/Images/Mohan-muruge.jpg';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <figure className="navbar__logo">
          <NavLink to="/">
            <img className="navbar__logo--img" src={logo} alt="logo" />
          </NavLink>
        </figure>
        <div className="navbar__upload">
          <input
            className="navbar__upload--search"
            type="text"
            placeholder="Search"
          />
          <NavLink to="/VideoUpload">
            <button className="navbar__upload--button">UPLOAD</button>
          </NavLink>
          <figure className="navbar__upload--figure">
            <img className="navbar__upload--img" src={profilePic} alt="" />
          </figure>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
