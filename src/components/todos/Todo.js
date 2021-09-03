import "./Todos.css";
import { BiEdit, BiTrashAlt, BiPlusCircle } from "react-icons/bi";
import { TodoContext } from "../../context/TodoContext";
import { useContext } from "react";
function Todo({
  text,
  category,
  checked,
  id,
  editing,
  changeFalse,
  changeTrue,
}) {
  const { dispatch } = useContext(TodoContext);
  return (
    <div className="todo">
      <span className="category" style={{ backgroundColor: category }}></span>
      <p
        className="todo__text"
        onClick={() => {
          dispatch({ type: "CHECK_TODO", payload: { id } });
        }}
        style={checked ? { color: "#ccc" } : { color: "var(--textColor)" }}
      >
        {text}
        <span
          className="line"
          style={checked ? { width: "100%" } : { width: "0%" }}
        ></span>
      </p>

      <div className="settings">
        {editing ? (
          <BiPlusCircle
            className="settings__icon cancell"
            onClick={() => {
              dispatch({ type: "EDITING_TODO", payload: { id } });
              changeFalse();
            }}
          />
        ) : (
          <BiEdit
            className="settings__icon"
            onClick={() => {
              dispatch({ type: "EDITING_TODO", payload: { id } });
              changeTrue();
            }}
          />
        )}
        <BiTrashAlt
          className="settings__icon"
          onClick={() => {
            dispatch({ type: "DELETE_TODO", payload: { id } });
          }}
          style={editing && { pointerEvents: "none" }}
        />
      </div>
    </div>
  );
}

export default Todo;
