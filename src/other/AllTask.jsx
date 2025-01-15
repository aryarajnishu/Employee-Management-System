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

    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg mt-6 shadow-xl">
      {/* Header Row */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 mb-4 py-3 px-5 flex justify-between rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-white w-1/5">Employee Name</h2>
        <h3 className="text-lg font-semibold text-white w-1/5">New Task</h3>
        <h5 className="text-lg font-semibold text-white w-1/5">Active Task</h5>
        <h5 className="text-lg font-semibold text-white w-1/5">Completed</h5>
        <h5 className="text-lg font-semibold text-white w-1/5">Failed</h5>
      </div>

      {/* Employee Rows */}
      <div>
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border-2 border-emerald-500 mb-3 py-3 px-5 flex justify-between rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-lg font-medium text-emerald-400 w-1/5">{elem.firstName}</h2>
            <h3 className="text-lg font-medium text-blue-400 w-1/5">{elem.taskCounts.newTask}</h3>
            <h5 className="text-lg font-medium text-yellow-400 w-1/5">{elem.taskCounts.active}</h5>
            <h5 className="text-lg font-medium text-green-400 w-1/5">{elem.taskCounts.completed}</h5>
            <h5 className="text-lg font-medium text-red-500 w-1/5">{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>

  )
}

export default AllTask