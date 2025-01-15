import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FaildeTask from "./FaildeTask";

const TaskList = ({ data }) => {
  
  return (
    <div
      id="TaskList"
      className="h-[53%] w-full mt-10 py-5  gap-5 flex items-center justify-start flex-nowrap overflow-x-auto no-scrollbar"
    >
      {data.tasks.map((elem , idx) => {
        
        if(elem.active){
          return <AcceptTask key = {idx} data = {elem}/>
        }

        if(elem.NewTask){
          return <NewTask key = {idx} data = {elem}/>
        }

        if(elem.completed){
          return <CompleteTask key = {idx} data = {elem}/>
        }

        if(elem.failde){
          return <FaildeTask key = {idx} data = {elem}/>
        }

      })}
    </div>
  );
};

export default TaskList;

// import React from 'react';
// import AcceptTask from './AcceptTask';
// import NewTask from './NewTask'; 
// import CompleteTask from './CompleteTask';
// import FaildeTask from './FaildeTask';

// const TaskList = ({ data }) => {
//     return (
//         <div
//             id="tasklist"
//             className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16"
//         >
//             {data.tasks.map((elem, idx) => {
//                 if (elem.active) {
//                     return <AcceptTask key={idx} data={elem} />;
//                 }
//                 if (elem.newTask) {
//                     return <NewTask key={idx} data={elem} />;
//                 }
//                 if (elem.completed) {
//                     return <CompleteTask key={idx} data={elem} />;
//                 }
//                 if (elem.failed) {
//                     return <FaildeTask key={idx} data={elem} />;
//                 }
//             })}
//         </div>
//     );
// };

// export default TaskList;
