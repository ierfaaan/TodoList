import "./FilterMenu.css";
function FilterMenu({ FilterBy, setFilterBy, toggleFilterMenu }) {
  return (
    <main className="main" style={{ height: "500px", zIndex: "6000" }}>
      <ul className="filter-menu">
        <li>
          <label htmlFor="All">All</label>
          <input
            type="radio"
            name="filter"
            onChange={(e) => {
              setFilterBy(e);
              toggleFilterMenu();
            }}
            value="all"
            checked={FilterBy === "all" ? true : false}
            id="All"
          />
        </li>
        <li>
          <label htmlFor="Done">Done</label>
          <input
            type="radio"
            name="filter"
            onChange={(e) => {
              setFilterBy(e);
              toggleFilterMenu();
            }}
            value="done"
            checked={FilterBy === "done" ? true : false}
            id="Done"
          />
        </li>
        <li>
          <label htmlFor="Todo">Todo</label>
          <input
            type="radio"
            name="filter"
            onChange={(e) => {
              setFilterBy(e);
              toggleFilterMenu();
            }}
            value="todo"
            checked={FilterBy === "todo" ? true : false}
            id="Todo"
          />
        </li>
        <li>
          <label htmlFor="Red">Red category</label>
          <input
            type="radio"
            name="filter"
            onChange={(e) => {
              setFilterBy(e);
              toggleFilterMenu();
            }}
            value="red"
            checked={FilterBy === "red" ? true : false}
            id="Red"
          />
        </li>
        <li>
          <label htmlFor="Green">Green category</label>
          <input
            type="radio"
            name="filter"
            onChange={(e) => {
              setFilterBy(e);
              toggleFilterMenu();
            }}
            value="green"
            checked={FilterBy === "green" ? true : false}
            id="Green"
          />
        </li>
        <li>
          <label htmlFor="Blue">Blue category</label>
          <input
            type="radio"
            name="filter"
            onChange={(e) => {
              setFilterBy(e);
              toggleFilterMenu();
            }}
            value="blue"
            checked={FilterBy === "blue" ? true : false}
            id="Blue"
          />
        </li>
      </ul>
    </main>
  );
}
export default FilterMenu;
