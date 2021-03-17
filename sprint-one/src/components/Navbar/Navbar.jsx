import './Navbar.scss';
import '../../partials/_partials.scss';
import logo from '../../assets/Logo/Logo-brainflix.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar__logo" href="#">
        <img className="navbar__logo--img" src={logo} alt="logo" />
      </a>
      <input className="navbar__search" type="text" placeholder=" - Search" />
      <button className="navbar__button"> + UPLOAD</button>
    </nav>
  );
}
export default Navbar;
