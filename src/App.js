import "./App.css";

import FilterMenu from "./components/filter/FilterMenu";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Todos from "./components/todos/Todos";

import { ChangeThemColor } from "./helper";

import useFilter from "./hooks/useFilter";
import useToggle from "./hooks/useToggle";
import { useTheme } from "./store/context/ThemeContext";

function App() {
  const { darkTheme } = useTheme();
  const [filterMenu, toggleFilterMenu] = useToggle(false);
  const [Editing, toggleEditing, changeTrue, changeFalse] = useToggle(false);
  const [FilterBy, setFilterBy] = useFilter("all");

  ChangeThemColor(darkTheme);

  return (
    <div className="app">
      <div className="container">
        <div>
          <div
            className="helper-layout-filter"
            style={
              filterMenu
                ? { transform: "scale(25)" }
                : { transform: "scale(1)" }
            }
          ></div>
          <div
            className="helper-layout-moon"
            style={
              darkTheme ? { transform: "scale(25)" } : { transform: "scale(1)" }
            }
          ></div>
        </div>
        <div className="icon-bar"></div>
        <header
          className="header"
          style={
            filterMenu
              ? { borderBottomColor: "var(--filterTextColor)" }
              : { borderBottomColor: "var(--textColor)" }
          }
        >
          <Header toggleFilterMenu={toggleFilterMenu} filterMenu={filterMenu} />
        </header>
        {!filterMenu ? (
          <Todos
            FilterBy={FilterBy}
            changeTrue={changeTrue}
            changeFalse={changeFalse}
          />
        ) : (
          <FilterMenu
            FilterBy={FilterBy}
            setFilterBy={setFilterBy}
            toggleFilterMenu={toggleFilterMenu}
          />
        )}
        <footer className="footer">
          <Form Editing={Editing} toggleEditing={toggleEditing} />
        </footer>
      </div>
    </div>
  );
}

export default App;
