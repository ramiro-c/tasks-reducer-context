import React, { useContext, useReducer } from "react";
import { TasksContext } from "./Context";
import TasksReducer from "./Reducer";

export const useTasks = () => {
  const { state, dispatch } = useContext(TasksContext);
  return [state, dispatch];
};

export const TasksState = ({ children }) => {
  const initialState = {
    tasks: []
  };

  const [state, dispatch] = useReducer(TasksReducer, initialState);

  return (
    <TasksContext.Provider
      value={{
        state: state,
        dispatch: dispatch
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};