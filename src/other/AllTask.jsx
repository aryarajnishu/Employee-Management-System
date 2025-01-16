import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

  //  const [userData,setUserData] =  useContext(AuthContext)

  const [userData , setUserData] = useContext(AuthContext)

   
  return (
    // <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
    //     <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
    //         <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
    //         <h3 className='text-lg font-medium w-1/5'>New Task</h3>
    //         <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
    //         <h5 className='text-lg font-medium w-1/5'>Completed</h5>
    //         <h5 className='text-lg font-medium w-1/5'>Failed</h5>
    //     </div>
    //     <div className=''>
    //     {authdata.employees.map(function(elem,idx){
    //         return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
    //         <h2 className='text-lg font-medium  w-1/5'>{elem.firstName}</h2>
    //         <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
    //         <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
    //         <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h5>
    //         <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
    //     </div>
    //     })}
    //     </div>
        
        
    // </div>

  <div className="bg-gradient-to-br from-black via-gray-900 to-black p-8 rounded-lg mt-8 shadow-2xl">
    {/* Header Row */}
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 mb-6 py-4 px-6 flex justify-between rounded-lg shadow-md border border-gray-600">
      <h2 className="text-lg font-bold text-white w-1/5 tracking-wide">Employee Name</h2>
      <h3 className="text-lg font-bold text-white w-1/5 tracking-wide">New Task</h3>
      <h5 className="text-lg font-bold text-white w-1/5 tracking-wide">Active Task</h5>
      <h5 className="text-lg font-bold text-white w-1/5 tracking-wide">Completed</h5>
      <h5 className="text-lg font-bold text-white w-1/5 tracking-wide">Failed</h5>
    </div>

    {/* Employee Rows */}
    <div>
      {userData.map((elem, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-r from-black via-gray-800 to-black border border-gray-700 mb-4 py-4 px-6 flex justify-between rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-500 group"
        >
          <h2 className="text-lg font-semibold text-gray-300 w-1/5 group-hover:text-white transition-colors duration-300">
            {elem.firstName}
          </h2>
          <h3 className="text-lg font-semibold text-cyan-400 w-1/5 group-hover:text-white transition-colors duration-300">
            {elem.taskCounts.newTask}
          </h3>
          <h5 className="text-lg font-semibold text-yellow-400 w-1/5 group-hover:text-white transition-colors duration-300">
            {elem.taskCounts.active}
          </h5>
          <h5 className="text-lg font-semibold text-green-400 w-1/5 group-hover:text-white transition-colors duration-300">
            {elem.taskCounts.completed}
          </h5>
          <h5 className="text-lg font-semibold text-red-500 w-1/5 group-hover:text-white transition-colors duration-300">
            {elem.taskCounts.failed}
          </h5>
        </div>
      ))}
    </div>
  </div>



  )
}

export default AllTask