import React from 'react'

const NewTask = ({data}) => {
  return (
    // <div className="flex-shrink-0 h-full w-[270px] bg-gray-800 rounded-xl py-2 px-2">
    //     <div className="flex justify-between items-center mt-2">
    //       <h3 className="bg-red-600 text-m px-3 py1 rounded">{data.category}</h3>
    //       <h4 className="text-sm text-orange-400">{data.taskDate}</h4>
    //     </div>
    //     <h2 className="mt-5 text-2xl font-bold">{data.taskTitle}</h2>
    //     <p className="text-sm mt-2"> {data.taskDescription}
    //     </p>
    //     <div className=' flex justify-center mt-4'>
    //         <button className='bg-yellow-600 mt-5 px-2 py-1 rounded-lg text-sm'>Accept Task</button>
    //     </div>
    // </div>

    <div className="relative flex-shrink-0 h-full w-[270px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl py-4 px-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
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
      <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-4 items-center">
        <button className="bg-yellow-600 hover:bg-yellow-700 text-sm text-white px-3 py-2 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-2px] hover:translate-x-[-2px] hover:rotate-[-2deg] hover:shadow-green-400">
          Acepted
        </button>
      </div>
    </div>

  )
}

export default NewTask