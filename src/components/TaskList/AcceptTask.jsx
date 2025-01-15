import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data);

  return (
    // <div className="flex-shrink-0 h-full w-[270px] bg-gray-800 rounded-xl py-2 px-2">
    //     <div className="flex justify-between items-center mt-2">
    //       <h3 className="bg-red-600 text-m px-3 py1 rounded">{data.category}</h3>
    //       <h4 className="text-sm text-orange-400">{data.taskDate}</h4>
    //     </div>
    //     <h2 className="mt-5 text-2xl font-bold">{data.taskTitle}</h2>
    //     <p className="text-sm mt-2"> {data.taskDescription}
    //     </p>
    //     <div className='flex justify-between mt-4'>
    //         <button className='bg-green-700 px-2 py-1 text-sm rounded-lg mt-5'>Mark as Completed</button>
    //         <button className='bg-red-600 px-2 py-1 text-sm rounded-lg mt-5'>Mark as Failed</button>
    //     </div>
    //   </div>
    <div className="flex-shrink-0 h-full w-[270px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl py-4 px-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-xs px-3 py-1 rounded-full font-semibold text-white uppercase">
          {data.category}
        </h3>
        <h4 className="text-xs text-orange-400 font-medium">{data.taskDate}</h4>
      </div>

      {/* Title */}
      <h2 className="mt-4 text-xl font-bold text-gray-100 leading-tight">
        {data.taskTitle}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-300 mt-3 leading-relaxed">
        {data.taskDescription}
      </p>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button className="bg-green-600 hover:bg-green-700 text-sm text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          Mark as Completed
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-sm text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          Mark as Failed
        </button>
      </div>
    </div>


  )
}

export default AcceptTask


// "taskTitle": "UI redesign",
//                 "taskDescription": "Redesign the user interface for better UX",