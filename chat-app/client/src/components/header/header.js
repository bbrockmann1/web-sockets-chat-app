import logo from "./logo.png";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header-logo" />
      <h1 className="header-title">Chatter</h1>
    </header>
  );
}

export default Header;
