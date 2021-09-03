import logo from "../../assets/img/1.png";
import { BiMoon, BiSun, BiFilterAlt } from "react-icons/bi";
import "./Header.css";
import { ThemContext } from "../../context/ThemContext";
import { useContext } from "react";
const Header = ({ toggleFilterMenu, filterMenu }) => {
  const { darkThem, toggleThem } = useContext(ThemContext);
  return (
    <>
      {!darkThem ? (
        <BiMoon
          className="header__icon header__icon--mode"
          onClick={toggleThem}
        />
      ) : (
        <BiSun
          className="header__icon header__icon--mode"
          onClick={toggleThem}
        />
      )}

      <BiFilterAlt
        className="header__icon header__icon--filter"
        onClick={toggleFilterMenu}
      />
      <h1 className="header__logo">
        <img src={logo} width="140" alt="" />
      </h1>
      <p
        className="header__text"
        style={
          filterMenu
            ? { color: "var(--filterTextColor)" }
            : { color: "var(--textColor)" }
        }
      >
        HeyBug Todo App
      </p>
    </>
  );
};
export default Header;
