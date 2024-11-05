import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, settaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const updatedData = userData.map((elem) => {
      if (assignTo === elem.firstName) {
        return {
          ...elem,
          tasks: [
            ...elem.tasks,
            {
              taskTitle,
              taskDescription,
              taskDate,
              category,
              active: false,
              newTask: true,
              failed: false,
              completed: false,
            },
          ],
          taskNumbers: {
            ...elem.taskNumbers,
            newTask: elem.taskNumbers.newTask + 1,
          },
        };
      }
      return elem;
    });

    setUserData(updatedData);
    console.log(userData);

    // Clear form fields
    setTaskTitle('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
    settaskDescription('');
  };

  return (
    <div className="bg-slate-900 p-6 rounded-lg shadow-lg">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap lg:flex-nowrap w-full text-white gap-4"
      >
        {/* Left Column */}
        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              className="w-full bg-gray-400 text-gray-800 font-semibold placeholder-gray-600 p-3 rounded outline-none"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-2">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="w-full bg-gray-400 text-gray-800 p-3 rounded outline-none"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-2">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              placeholder="Employee name"
              className="w-full bg-gray-400 text-gray-800 font-semibold placeholder-gray-600 p-3 rounded outline-none"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-2">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Design, dev, etc."
              className="w-full bg-gray-400 text-gray-800 font-semibold placeholder-gray-600 p-3 rounded outline-none"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => settaskDescription(e.target.value)}
              rows={6}
              placeholder="Enter task details"
              className="w-full bg-gray-400 text-gray-800 font-semibold placeholder-gray-600 p-3 rounded outline-none"
            ></textarea>
          </div>

          <div>
            <button className="bg-green-500 text-white w-full py-3 rounded-lg hover:bg-green-600 transition">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
