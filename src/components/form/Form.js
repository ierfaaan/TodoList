import { useEffect, useState } from "react";
import {
  addTodo,
  editingTodo,
  editTodo,
} from "../../store/actions/TodoActions";
import { useTodo } from "../../store/context/TodoContext";
import "./Form.css";

function Form({ Editing, toggleEditing }) {
  const { tasks, dispatch } = useTodo();
  const [idEditing, setidEditing] = useState(null);
  let editingObject;

  useEffect(() => {
    editingObject = tasks.find((item) => {
      return item.editing;
    });
    if (editingObject) {
      setidEditing(editingObject.id);
      Editing ? setText(editingObject.text) : setText("");
    } else {
      setText("");
    }
  }, [tasks]);

  const [text, setText] = useState("");
  const [category, setCategory] = useState("#e74c3c");

  const submitHandler = (event) => {
    event.preventDefault();
    if (Editing) {
      dispatch(editTodo(idEditing, text, category));
      dispatch(editingTodo(idEditing));
      toggleEditing();
    } else {
      dispatch(addTodo(text, category));
    }
  };

  return (
    <form onSubmit={submitHandler} className="footer__wrapper">
      <div className="form-box">
        <input
          type="text"
          value={text}
          placeholder="add todo..."
          onChange={(event) => {
            setText(event.target.value);
          }}
          className="form-box__input"
        />
        <button type="submit" className="form-box__btn">
          {Editing ? "Edit" : "Add"}
        </button>
      </div>
      <div className="colors">
        <div className="color">
          <input
            type="radio"
            id="red"
            className="color__radio"
            value="#e74c3c"
            name="category"
            checked={category === "#e74c3c"}
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          />
          <span className="checked"></span>
          <label htmlFor="red" className="color__label red"></label>
        </div>
        <div className="color">
          <input
            type="radio"
            id="blue"
            className="color__radio"
            value="#3498db"
            name="category"
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          />
          <span className="checked"></span>
          <label htmlFor="blue" className="color__label blue"></label>
        </div>
        <div className="color">
          <input
            type="radio"
            id="green"
            className="color__radio"
            value="#2ecc71"
            name="category"
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          />
          <span className="checked"></span>
          <label htmlFor="green" className="color__label green"></label>
        </div>
      </div>
    </form>
  );
}

export default Form;
