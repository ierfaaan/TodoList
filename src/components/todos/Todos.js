import Todo from "./Todo";
import { useTodo } from "../../store/context/TodoContext";
import checkListImg from "../../assets/img/light.png";
import { filterTodos } from "../../helper";
import "./Todos.css";

function Todos({ FilterBy, changeTrue, changeFalse }) {
  const { tasks } = useTodo();

  let tasksWithFilter = filterTodos(tasks, FilterBy);

  return (
    <main className="main" style={{ height: "280px" }}>
      <div className="todos">
        {tasksWithFilter.length > 0 ? (
          tasksWithFilter.map((task) => {
            return (
              <Todo
                text={task.text}
                id={task.id}
                key={task.id}
                checked={task.checked}
                category={task.category}
                editing={task.editing}
                changeTrue={changeTrue}
                changeFalse={changeFalse}
              />
            );
          })
        ) : (
          <div className="empty">
            <img width="200" src={checkListImg} alt="" />
            <h2>Your to-do list is empty.</h2>
            <p>Please create a new task</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Todos;
