import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[270px] bg-gray-800 rounded-xl py-2 px-2">
        <div className="flex justify-between items-center mt-2">
          <h3 className="bg-red-600 text-m px-3 py1 rounded">{data.category}</h3>
          <h4 className="text-sm text-orange-400">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-bold">{data.taskTitle}</h2>
        <p className="text-sm mt-2"> {data.taskDescription}
        </p>
        <div className='flex justify-center mt-4'>
            <button className='bg-green-600 mt-5 px-2 py-1 rounded-lg text-sm'>Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask