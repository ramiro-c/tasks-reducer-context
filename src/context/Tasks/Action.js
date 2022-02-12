
export const getTasks = async (dispatch) => {
  await fetch("/tasks")
    .then(
      async res => {
        let tasks = await res.json()
        dispatch({ type: "SET_TASKS", payload: tasks })
      }
    )
    .catch(err => console.log(err))
}

export const addTask = async (dispatch, task) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  };

  await fetch("/tasks/", options)
    .then(() => dispatch({ type: "ADD_TASK", payload: task }))
    .catch(err => console.log(err))
}

export const updateTask = async (dispatch, task) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  };

  await fetch(`/tasks/${task.id}`, options)
    .then(() => dispatch({ type: "UPDATE_TASK", payload: task }))
    .catch(err => console.log(err))
}

export const deleteTask = async (dispatch, taskId) => {
  const options = {
    method: "DELETE"
  };

  await fetch(`/tasks/${taskId}`, options)
    .then(() => dispatch({ type: "DELETE_TASK", payload: taskId }))
    .catch(err => console.log(err))
}