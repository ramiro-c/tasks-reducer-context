import React, { useEffect, useState } from 'react';
import { NotificationManager } from 'react-notifications';
import { Link, useParams } from 'react-router-dom';

import { useTasks } from "../context/Tasks/State";
import { addTask, updateTask } from "../context/Tasks/Action";

const TaskForm = () => {
  const [tasksState, tasksDispatch] = useTasks();
  const { tasks } = tasksState;

  const { taskId } = useParams();
  const [task, setTask] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = event => {
    setTask({ ...task, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    setTask({ ...task, [event.target.name]: event.target.value });

    if (!isEditing) {
      await addTask(tasksDispatch, task);
      setTask({ title: "", description: "" })
    } else {
      await updateTask(tasksDispatch, task);
    }

    NotificationManager.success(`Task '${task.title}' ${isEditing ? "updated" : "created"}`, "Success!", 2000);
  }

  useEffect(() => {
    setIsDisabled(!task.title || !task.description);
  }, [task.title, task.description]);

  useEffect(() => {
    const coincidence = tasks.find(t => t.id === taskId);
    if (coincidence) {
      setIsEditing(true);
      setTask(coincidence);
    } else {
      setIsEditing(false);
      setTask({
        id: "",
        title: "",
        description: ""
      });
    }
  }, [taskId]);

  return (
    <div className="flex flex-col items-center h-3/4">
      <form
        className="bg-gray-900 p-10 mb-4 rounded"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-7 font-bold">~ {isEditing ? "Edit" : "New"} Task ~</h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            placeholder="Write a title"
            value={task.title}
            className="rounded py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <textarea
            name="description"
            rows="3"
            maxlength="90"
            placeholder="Write a short description (90 characters)"
            className="rounded py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            onChange={handleChange}
            value={task.description}
          ></textarea>
        </div>
        <button
          className={`
            rounded bg-green-600 w-full py-2 px-4 mt-5
            ${isDisabled ? 'opacity-75 cursor-not-allowed' : 'hover:bg-green-500'}
          `}
          disabled={isDisabled}
        >
          {isEditing ? "Edit" : "Create"} Task
        </button>
      </form>
      <Link to="/" className="py-2 px-4 rounded bg-green-600 hover:bg-green-500">
        See all tasks
      </Link>
    </div >
  )
}

export default TaskForm;
