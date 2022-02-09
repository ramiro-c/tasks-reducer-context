import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";

const Heading = () => {
  return (
    <div>
      <div className="flex item-center mb-10">
        <Link to="/">
          <h1 className="text-gray-100 font-bold text-2xl">Tasks App</h1>
        </Link>
      </div>
      <div className="flex-grow text-right px-4 py-2 m-2">
        <Link to="/add">
          <button className="bg-green-600 hover:bg-green-500 font-semibold py-2 px-4 rounded inline-flex items-center">
            <IoMdAdd /> Add Task
          </button>
        </Link>
      </div>
    </div>
  )
}

Heading.propTypes = {}

export default Heading;