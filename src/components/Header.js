import { useState } from "react";
import Logo from "../assets/img/the-eatery-logo.png";
import { Link } from 'react-router-dom';
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img
      className="h-28 px-2"
      src={Logo}
      alt=""
    />
  </a>
);
function loggedInUser() {
  // authentication
  return true;
}

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-[#c4fbfb] shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/About">About</Link>
          </li>
          <li className="px-2">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/Instamart">Instamart</Link>
          </li>
          <li className="px-2">Cart</li>
        </ul>
      </div>
      <h1>{isOnline ? '✅' : '🔴'}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  )
};
export default Header;