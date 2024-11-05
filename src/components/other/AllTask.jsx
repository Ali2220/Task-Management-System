import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  

  return (
    <div className="p-3 mt-5">
      <div className="bg-white mb-2 py-2 px-3 flex justify-between rounded-md">
        <h2 className="w-1/5 text-black font-semibold text-xl text-center">Employee Name</h2>
        <h3 className="w-1/5 text-black font-semibold text-xl text-center">New Task</h3>
        <h5 className="w-1/5 text-black font-semibold text-xl text-center">Active Task</h5>
        <h5 className="w-1/5 text-black font-semibold text-xl text-center">Completed</h5>
        <h5 className="w-1/5 text-black font-semibold text-xl text-center">Failed</h5>
      </div>

     <div className='h-[80%]'>
     {userData.map(function (emp, idx) {
        return (
          <div key={idx} className="bg-slate-700 text-gray-200 mb-2 py-3 px-4 flex justify-between items-center rounded-lg hover:bg-slate-600 transition duration-200">
            <h2 className="w-1/5 text-lg font-medium text-center">{emp.firstName}</h2>
            <h3 className="w-1/5 text-lg font-medium text-blue-400 text-center">{emp.taskNumbers.newTask}</h3>
            <h5 className="w-1/5 text-lg font-medium text-yellow-400 text-center">{emp.taskNumbers.active}</h5>
            <h5 className="w-1/5 text-lg font-medium text-green-600 text-center">{emp.taskNumbers.completed}</h5>
            <h5 className="w-1/5 text-lg font-medium text-red-600 text-center">{emp.taskNumbers.failed}</h5>
          </div>
        );
      })}
     </div>
    </div>
  );
};

export default AllTask;
