export default function appReducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TASK":
      return { tasks: [...state.tasks, payload] };

    case "EDIT_TASK":
      return {
        tasks: state.tasks.map(
          task => task.id === payload.id
            ? { ...task, title: payload.title, description: payload.description }
            : task
        )
      };

    case "TOGGLE_DONE_TASK":
      return {
        tasks: state.tasks.map(
          task => task.id === payload
            ? { ...task, done: !task.done }
            : task
        )
      };

    case "DELETE_TASK":
      return { tasks: state.tasks.filter(task => task.id !== payload) };

    default: return state;
  }
}