import React from 'react';

const FailedTask = ({data}) => {
  const { taskTitle, taskDescription, category, taskDate } = data;

  return (
    <div className="flex-shrink-0 h-full w-72 min-w-[18rem] bg-red-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{category}</h3>
        <h4 className="text-sm">{taskDate}</h4>
      </div>
      <h2 className="mt-4 text-xl font-bold">{taskTitle}</h2>
      <p className="text-sm mt-2">
       {taskDescription}
      </p>
      <div className="mt-4 flex font-bold">
        <button className="bg-red-600 py-4 px-4 text-sm rounded-lg">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
