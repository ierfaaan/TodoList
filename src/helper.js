export const filterTodos = (tasks, filterVal) => {
  if (filterVal === "all") {
    return [...tasks];
  } else if (filterVal === "done") {
    return [...tasks].filter((task) => task.checked);
  } else if (filterVal === "todo") {
    return [...tasks].filter((task) => !task.checked);
  } else if (filterVal === "red") {
    return [...tasks].filter((task) => task.category === "#e74c3c");
  } else if (filterVal === "green") {
    return [...tasks].filter((task) => task.category === "#2ecc71");
  } else if (filterVal === "blue") {
    return [...tasks].filter((task) => task.category === "#3498db");
  }
};

let root = document.documentElement;
export const ChangeThemColor = (darkThem) => {
  if (darkThem) {
    root.style.setProperty("--bgColor", "#333");
    root.style.setProperty("--textColor", "#fff");
    root.style.setProperty("--formColor", "#484848");
  } else {
    root.style.setProperty("--bgColor", "#fff");
    root.style.setProperty("--textColor", "#333");
    root.style.setProperty("--formColor", "#fff");
  }
};
