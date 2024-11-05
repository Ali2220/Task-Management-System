import React from 'react';
import TaskList from './TaskList';

const AcceptTask = ({ data }) => {
  // console.log(data.taskTitle);
  const { taskTitle, taskDescription, category, taskDate } = data;

  return (
    <div className="flex-shrink-0 h-full w-72 min-w-[18rem] bg-yellow-400 rounded-xl shadow-lg p-5 transition-transform transform hover:scale-105">
  <div className="flex justify-between items-center">
    <h3 className="bg-red-600 px-3 py-1 rounded-full text-white text-sm font-semibold">{category}</h3>
    <h4 className="text-sm text-gray-600">{taskDate}</h4>
  </div>
  <h2 className="mt-4 text-2xl font-bold text-gray-800">{taskTitle}</h2>
  <p className="text-sm mt-2 text-gray-700">{taskDescription}</p>
  <div className="flex justify-between gap-2 mt-4">
    <button className="bg-green-500 hover:bg-green-600 py-2 px-4 text-sm rounded-lg text-white font-bold transition duration-200">
      Mark as Completed
    </button>
    <button className="bg-red-500 hover:bg-red-600 py-2 px-4 text-sm rounded-lg text-white font-bold transition duration-200">
      Mark as Failed
    </button>
  </div>
</div>

  );
};

export default AcceptTask;
