import React , {useContext, useState} from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {

  const [userData , setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault(); // Corrected typo in method name

    setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

    // const data = JSON.parse(localStorage.getItem('employees'))
    // console.log(data)

    const data = userData;

    data.forEach(function(elem) {
      if(asignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskCounts.newTask = elem.taskCounts.newTask+1
      }
    });

    setUserData(data)
    console.log(data)

    setTaskTitle('')
    setCategory('')
    setAsignTo('')
    setTaskDate('')
    setTaskDescription('')

  }; 

  return (
    // <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
    //   <form onSubmit={(e) => {
    //       submitHandler(e)
    //   }}
    //     className='flex flex-wrap w-full items-start justify-between'
    //   >
    //     <div className='w-1/2'>
    //         <div>
    //             <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
    //             <input
    //                 value={taskTitle}
    //                 onChange={(e) => {
    //                     setTaskTitle(e.target.value)
    //                 }}
    //                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
    //             />
    //         </div>
    //         <div>
    //             <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
    //             <input
    //                 value={taskDate}
    //                 onChange={(e) => {
    //                     setTaskDate(e.target.value)
    //                 }}
    //                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
    //         </div>
    //         <div>
    //             <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
    //             <input
    //                 value={asignTo}
    //                 onChange={(e) => {
    //                     setAsignTo(e.target.value)
    //                 }}
    //                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
    //         </div>
    //         <div>
    //             <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
    //             <input
    //                 value={category}
    //                 onChange={(e) => {
    //                     setCategory(e.target.value)
    //                 }}
    //                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
    //         </div>
    //     </div>

    //     <div className='w-2/5 flex flex-col items-start'>
    //         <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
    //         <textarea value={taskDescription}
    //             onChange={(e) => {
    //                 setTaskDescription(e.target.value)
    //             }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
    //         <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
    //     </div>

    //     </form>
    // </div>
    <div
    className="p-8 bg-cover bg-center mt-10 rounded-lg shadow-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.9)] transition-shadow duration-300 ease-in-out"
    style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?abstract,technology')",
    }}
    >
    <form
        onSubmit={(e) => {
        submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between bg-[rgba(0,0,0,0.7)] p-6 rounded-lg"
    >
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6">
        <div>
            <h3 className="text-sm text-gray-300 mb-1 font-semibold">Task Title</h3>
            <input
            value={taskTitle}
            onChange={(e) => {
                setTaskTitle(e.target.value);
            }}
            className="text-sm py-3 px-4 w-4/5 rounded-lg bg-gradient-to-br from-[#2a2a2a] to-[#444] text-white border border-gray-500 focus:ring-4 focus:ring-emerald-500 outline-none shadow-[inset_-3px_-3px_5px_rgba(255,255,255,0.1),inset_3px_3px_5px_rgba(0,0,0,0.5)] transition-all duration-300"
            type="text"
            placeholder="Make a UI design"
            />
        </div>
        <div>
            <h3 className="text-sm text-gray-300 mb-1 font-semibold">Date</h3>
            <input
            value={taskDate}
            onChange={(e) => {
                setTaskDate(e.target.value);
            }}
            className="text-sm py-3 px-4 w-4/5 rounded-lg bg-gradient-to-br from-[#2a2a2a] to-[#444] text-white border border-gray-500 focus:ring-4 focus:ring-emerald-500 outline-none shadow-[inset_-3px_-3px_5px_rgba(255,255,255,0.1),inset_3px_3px_5px_rgba(0,0,0,0.5)] transition-all duration-300"
            type="date"
            />
        </div>
        <div>
            <h3 className="text-sm text-gray-300 mb-1 font-semibold">Assign To</h3>
            <input
            value={asignTo}
            onChange={(e) => {
                setAsignTo(e.target.value);
            }}
            className="text-sm py-3 px-4 w-4/5 rounded-lg bg-gradient-to-br from-[#2a2a2a] to-[#444] text-white border border-gray-500 focus:ring-4 focus:ring-emerald-500 outline-none shadow-[inset_-3px_-3px_5px_rgba(255,255,255,0.1),inset_3px_3px_5px_rgba(0,0,0,0.5)] transition-all duration-300"
            type="text"
            placeholder="Employee Name"
            />
        </div>
        <div>
            <h3 className="text-sm text-gray-300 mb-1 font-semibold">Category</h3>
            <input
            value={category}
            onChange={(e) => {
                setCategory(e.target.value);
            }}
            className="text-sm py-3 px-4 w-4/5 rounded-lg bg-gradient-to-br from-[#2a2a2a] to-[#444] text-white border border-gray-500 focus:ring-4 focus:ring-emerald-500 outline-none shadow-[inset_-3px_-3px_5px_rgba(255,255,255,0.1),inset_3px_3px_5px_rgba(0,0,0,0.5)] transition-all duration-300"
            type="text"
            placeholder="Design, Dev, etc"
            />
        </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/5 flex flex-col items-start space-y-4">
        <h3 className="text-sm text-gray-300 mb-1 font-semibold">Description</h3>
        <textarea
            value={taskDescription}
            onChange={(e) => {
            setTaskDescription(e.target.value);
            }}
            className="w-full h-44 text-sm py-3 px-4 rounded-lg bg-gradient-to-br from-[#2a2a2a] to-[#444] text-white border border-gray-500 focus:ring-4 focus:ring-emerald-500 outline-none shadow-[inset_-3px_-3px_5px_rgba(255,255,255,0.1),inset_3px_3px_5px_rgba(0,0,0,0.5)] resize-none transition-all duration-300"
            placeholder="Add a detailed description of the task..."
        ></textarea>
        <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300">
            Create Task
        </button>
        </div>
    </form>
    </div>


  );
};

export default CreateTask;
