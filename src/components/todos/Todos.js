import "./Todos.css";
import Todo from "./Todo";
import checkListImg from "../../assets/img/light.png";
function Todos({
  tasks,
  night,
  deletePa,
  editPa,
  taskEditing,
  edit,
  cancellEditPa,
  checkingPa,
}) {
  return (
    <main className="main" style={{ height: "280px" }}>
      <div className="todos">
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <Todo
                text={task.text}
                id={task.id}
                key={task.id}
                category={task.category}
                deleteCh={deletePa}
                editCh={editPa}
                editing={taskEditing.id === task.id ? true : false}
                edit={edit}
                checked={task.checked}
                cancellEditCh={cancellEditPa}
                checkingCh={checkingPa}
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
