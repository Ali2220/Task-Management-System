import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';
import CompleteTask from './CompleteTask';

const TaskList = ({ data }) => {

    

  return (
    <div
      key={data.id}
      id="taskList"
      className="flex overflow-x-auto items-center gap-5 p-2 mt-10 h-[300px] w-full py-3"
    >
     
     {data.tasks.map((elem, idx) => {
      if(elem.active){
        return <AcceptTask key={idx} data={elem}/>
      }
      if(elem.newTask){
        return <NewTask key={idx} data={elem}/>
      }
      if(elem.completed){
        return <CompleteTask key={idx} data={elem}/>
      }
      if(elem.failed){
        return <FailedTask key={idx} data={elem}/>
      }
     })}


    </div>
  );
};

export default TaskList;
