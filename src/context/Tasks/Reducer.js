export default (state, { type, payload }) => {
  switch (type) {
    case "SET_TASKS":
      return { ...state, tasks: payload };

    case "ADD_TASK":
      return { ...state, tasks: [{ ...state.tasks }, { ...payload }] };

    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map(
          task => task.id === payload.id
            ? payload
            : task
        )
      };

    case "DELETE_TASK":
      return { ...state, tasks: state.tasks.filter(task => task.id !== payload) };

    default: return state;
  }
}