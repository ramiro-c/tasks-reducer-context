import { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";

import appReducer from "./appReducer";

const initialState = {
  tasks: []
}

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: { ...task, id: uuid(), done: false } });
  }

  const editTask = (task) => {
    dispatch({ type: "EDIT_TASK", payload: task });
  }

  const deleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  }

  const toggleDoneTask = (taskId) => {
    dispatch({ type: "TOGGLE_DONE_TASK", payload: taskId });
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        addTask,
        editTask,
        deleteTask,
        toggleDoneTask
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};