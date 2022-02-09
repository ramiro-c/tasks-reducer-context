import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext as context } from "../context/GlobalContext";

const TaskList = () => {
  const { tasks, toggleDoneTask, deleteTask } = useContext(context);

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  }

  const handleToggleDoneTask = (taskId) => {
    toggleDoneTask(taskId);
  }

  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        {tasks.length === 0
          ? <p className="text-2xl mt-24">No tasks yet!</p>
          : (
            tasks.map(task => (
              <div key={task.id} className="bg-gray-900 px-20 py-5 shadow-2xl mb-4 flex justify-between rounded">
                <div className="text-left w-2/4">
                  <h1 className="font-semibold text-xl mb-2">{task.title}:</h1>
                  <p>{`> ${task.description}`}</p>
                  Status: <button
                    className="bg-purple-600 hover:bg-purple-500 rounded py-1 px-3 mt-2"
                    onClick={() => handleToggleDoneTask(task.id)}
                  >
                    {task.done ? "Done" : "Undone"}
                  </button>
                </div>

                <div className="text-right w-2/4 flex flex-row flex-nowrap  justify-end items-center">
                  <Link to={`/edit/${task.id}`}>
                    <button className="bg-gray-600 hover:bg-gray-500 rounded py-2 px-4 mr-2">Edit</button>
                  </Link>
                  <button
                    className="bg-red-600 hover:bg-red-500 rounded py-2 px-4"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
      </div>
    </div>)
}

export default TaskList;