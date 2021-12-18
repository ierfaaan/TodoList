import { BiEdit, BiTrashAlt, BiPlusCircle } from "react-icons/bi";
import {
  checkedTodo,
  deleteTodo,
  editingTodo,
} from "../../store/actions/TodoActions";
import { useTodo } from "../../store/context/TodoContext";
import "./Todos.css";

function Todo({
  text,
  category,
  checked,
  id,
  editing,
  changeFalse,
  changeTrue,
}) {
  const { dispatch } = useTodo();
  return (
    <div className="todo">
      <span className="category" style={{ backgroundColor: category }}></span>
      <p
        className="todo__text"
        onClick={() => {
          dispatch(checkedTodo(id));
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
              dispatch(editingTodo(id));
              changeFalse();
            }}
          />
        ) : (
          <BiEdit
            className="settings__icon"
            onClick={() => {
              dispatch(editingTodo(id));
              changeTrue();
            }}
          />
        )}
        <BiTrashAlt
          className="settings__icon"
          onClick={() => {
            dispatch(deleteTodo(id));
          }}
          style={editing && { pointerEvents: "none" }}
        />
      </div>
    </div>
  );
}

export default Todo;
