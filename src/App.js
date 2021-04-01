import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import "./App.css"
import FilterMenu from "./FilterMenu"
import Form from "./Form"
import Header from "./Header"
import { filterTodos, getFromLS, setToLS } from "./helper"
import Todos from "./Todos"
function App() {
    const [editing, setEditing] = useState({})
    const [filterVal, setFilterVal] = useState("all")
    const [edit, setEdit] = useState(false)
    const [tasks, setTasks] = useState(getFromLS("tasks"))
    const [openFilter, setOpenFilter] = useState(false)
    const [night, setNight] = useState(false)
    let tasksWithFilter = []
    // Add Todo ---------------------------------------
    const addTodo = (text, category, action, id) => {
        let newTask
        if (action === "edit") {
            newTask = tasks.map((task) => {
                return task.id === id ? { ...task, text, category } : task
            })
        } else if (action === "add") {
            const task = {
                id: uuidv4(),
                text,
                category,
                checked: false,
                date: new Date(),
            }
            newTask = [task, ...tasks]
        }
        setToLS("tasks", newTask)
        setTasks(newTask)
        setEdit(false)
        setEditing({})
    }
    // Delete Todo ---------------------------------------
    const deleteHandler = (id) => {
        const newTasks = tasks.filter((task) => {
            return task.id !== id
        })
        setToLS("tasks", newTasks)
        setTasks(newTasks)
    }
    // Edit Todo ---------------------------------------
    const editHandler = (id) => {
        const newEditing = tasks.filter((task) => {
            return task.id === id
        })[0]
        setEditing(newEditing)
        setEdit(true)
    }
    const cancellEdit = () => {
        setEditing({})
        setEdit(false)
    }
    // Checked Todo ---------------------------------------
    const checkedHandler = (id) => {
        const newTask = tasks.map((task) => {
            return task.id === id ? { ...task, checked: !task.checked } : task
        })
        setToLS("tasks", newTask)
        setTasks(newTask)
    }
    // Filter Todo ---------------------------------------
    const changeVal = (event) => {
        setFilterVal(event.target.value)
        setOpenFilter(false)
    }
    const filterHandler = () => {
        setOpenFilter(!openFilter)
    }
    tasksWithFilter = filterTodos(tasks, filterVal)
    //Change them Mode --------------------------------
    const changeMode = () => {
        setNight(!night)
    }
    let root = document.documentElement
    if (night) {
        root.style.setProperty("--bgColor", "#333")
        root.style.setProperty("--textColor", "#fff")
        root.style.setProperty("--formColor", "#484848")
    } else {
        root.style.setProperty("--bgColor", "#fff")
        root.style.setProperty("--textColor", "#333")
        root.style.setProperty("--formColor", "#fff")
    }

    return (
        <div className='app'>
            <div className='container'>
                <div>
                    <div
                        className='helper-layout-filter'
                        style={
                            openFilter
                                ? { transform: "scale(25)" }
                                : { transform: "scale(1)" }
                        }
                    ></div>
                    <div
                        className='helper-layout-moon'
                        style={
                            night
                                ? { transform: "scale(25)" }
                                : { transform: "scale(1)" }
                        }
                    ></div>
                </div>
                <div className='icon-bar'></div>
                <header
                    className='header'
                    style={
                        openFilter
                            ? { borderBottomColor: "var(--filterTextColor)" }
                            : { borderBottomColor: "var(--textColor)" }
                    }
                >
                    <Header
                        filter={filterHandler}
                        changeMode={changeMode}
                        openFilter={openFilter}
                        night={night}
                    />
                </header>
                {!openFilter ? (
                    <Todos
                        tasks={tasksWithFilter}
                        night={night}
                        editPa={editHandler}
                        deletePa={deleteHandler}
                        taskEditing={editing}
                        edit={edit}
                        cancellEditPa={cancellEdit}
                        checkingPa={checkedHandler}
                    />
                ) : (
                    <FilterMenu changeVal={changeVal} filterVal={filterVal} />
                )}
                <footer className='footer'>
                    <Form addTodo={addTodo} edit={edit} taskEditing={editing} />
                </footer>
            </div>
        </div>
    )
}

export default App
