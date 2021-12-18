export const editTodo = (id, text, category) => {
  return {
    type: "EDIT_TODO",
    payload: {
      id,
      text,
      category,
    },
  };
};
export const editingTodo = (id) => {
  return {
    type: "EDITING_TODO",
    payload: {
      id,
    },
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: {
      id,
    },
  };
};
export const checkedTodo = (id) => {
  return {
    type: "CHECK_TODO",
    payload: {
      id,
    },
  };
};
export const addTodo = (text, category) => {
  return {
    type: "ADD_TODO",
    payload: {
      text,
      category,
    },
  };
};
