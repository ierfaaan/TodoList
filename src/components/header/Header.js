import { BiMoon, BiSun, BiFilterAlt } from "react-icons/bi";

import logo from "../../assets/img/1.png";
import "./Header.css";
import { useTheme } from "../../store/context/ThemeContext";

const Header = ({ toggleFilterMenu, filterMenu }) => {
  const { darkTheme, toggleTheme } = useTheme();
  return (
    <>
      {!darkTheme ? (
        <BiMoon
          className="header__icon header__icon--mode"
          onClick={toggleTheme}
        />
      ) : (
        <BiSun
          className="header__icon header__icon--mode"
          onClick={toggleTheme}
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
