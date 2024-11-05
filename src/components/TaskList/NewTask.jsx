import React from 'react';

const NewTask = ({ data }) => {
  const { taskTitle, taskDescription, category, taskDate } = data;

  return (
    <div className="flex-shrink-0 h-full w-72 min-w-[18rem] bg-blue-300 rounded-xl shadow-lg p-5 transition-transform transform hover:scale-105">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {category}
        </h3>
        <h4 className="text-sm text-gray-700">{taskDate}</h4>
      </div>
      <h2 className="mt-4 text-2xl font-bold text-gray-800">{taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-600">{taskDescription}</p>
      <div className="mt-4 flex justify-center">
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
