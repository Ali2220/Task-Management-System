import React from 'react';

const TaskListNumbers = ({data}) => {
  return (
    <div className="flex mt-10 justify-between gap-5 w-full font-bold">
      <div className="rounded-xl py-6 px-9 w-1/2 bg-red-500">
        <h2 className="text-3xl">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl font-semibold">Failed Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-1/2 bg-blue-500">
        <h2 className="text-3xl">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-1/2 bg-yellow-500">
        <h2 className="text-3xl">{data.taskNumbers.active}</h2>
        <h3 className="text-xl font-semibold">Active Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-1/2 bg-green-500">
        <h2 className="text-3xl">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl font-semibold">Completed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
