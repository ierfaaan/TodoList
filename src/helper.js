export const getFromLS = (key) => {
    const values = JSON.parse(localStorage.getItem(key))
    return values || []
}

export const setToLS = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const filterTodos = (tasks, filterVal) => {
    if (filterVal === "all") {
        return [...tasks]
    } else if (filterVal === "done") {
        return [...tasks].filter((task) => task.checked)
    } else if (filterVal === "todo") {
        return [...tasks].filter((task) => !task.checked)
    } else if (filterVal === "red") {
        return [...tasks].filter((task) => task.category === "#e74c3c")
    } else if (filterVal === "green") {
        return [...tasks].filter((task) => task.category === "#2ecc71")
    } else if (filterVal === "blue") {
        return [...tasks].filter((task) => task.category === "#3498db")
    }
}
