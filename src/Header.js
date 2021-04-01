import logo from "./assets/img/1.png"
import { BiMoon, BiSun, BiFilterAlt } from "react-icons/bi"
import "./Header.css"
const Header = ({ filter, openFilter, changeMode, night }) => {
    return (
        <>
            {!night ? (
                <BiMoon
                    className='header__icon header__icon--mode'
                    onClick={changeMode}
                />
            ) : (
                <BiSun
                    className='header__icon header__icon--mode'
                    onClick={changeMode}
                />
            )}

            <BiFilterAlt
                className='header__icon header__icon--filter'
                onClick={filter}
            />
            <h1 className='header__logo'>
                <img src={logo} width='140' alt='' />
            </h1>
            <p
                className='header__text'
                style={
                    openFilter
                        ? { color: "var(--filterTextColor)" }
                        : { color: "var(--textColor)" }
                }
            >
                HeyBug Todo App
            </p>
        </>
    )
}
export default Header
