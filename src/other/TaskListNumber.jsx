import React from 'react'
import BarChartComponent from './BarChartComponent'


const TaskListNumber = ({data}) => {
    return (
        // <div className="flex mt-10 flex-wrap justify-between gap-6 screen">
        // {/* New Task */}
        //     <div className="rounded-xl w-[45%] py-8 px-10 bg-gradient-to-br from-blue-400 to-blue-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
        //         <h2 className="text-4xl font-extrabold text-white">{data.taskCounts.newTask}</h2>
        //         <h3 className="text-2xl mt-2 font-medium text-gray-100">New Task</h3>
        //     </div>

        //     {/* Completed Task */}
        //     <div className="rounded-xl w-[45%] py-8 px-10 bg-gradient-to-br from-green-400 to-green-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
        //         <h2 className="text-4xl font-extrabold text-white">{data.taskCounts.completed}</h2>
        //         <h3 className="text-2xl mt-2 font-medium text-gray-100">Completed Task</h3>
        //     </div>

        //     {/* Accepted Task */}
        //     <div className="rounded-xl w-[45%] py-8 px-10 bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
        //         <h2 className="text-4xl font-extrabold text-black">{data.taskCounts.active}</h2>
        //         <h3 className="text-2xl mt-2 font-medium text-black">Accepted Task</h3>
        //     </div>

        //     {/* Failed Task */}
        //     <div className="rounded-xl w-[45%] py-8 px-10 bg-gradient-to-br from-red-400 to-red-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
        //         <h2 className="text-4xl font-extrabold text-white">{data.taskCounts.failed}</h2>
        //         <h3 className="text-2xl mt-2 font-medium text-gray-100">Failed Task</h3>
        //     </div>
        // </div>

        <div className="flex mt-10 flex-wrap justify-between gap-4 screen">
            {/* First Column: Task Cards in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4 w-[45%]">
                {/* New Task */}
                <div className="rounded-xl py-6 px-8 bg-gradient-to-br from-blue-400 to-blue-500 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl font-extrabold text-white">{data.taskCounts.newTask}</h2>
                <h3 className="text-xl mt-2 font-medium text-gray-100">New Task</h3>
                </div>

                {/* Completed Task */}
                <div className="rounded-xl py-6 px-8 bg-gradient-to-br from-green-400 to-green-500 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl font-extrabold text-white">{data.taskCounts.completed}</h2>
                <h3 className="text-xl mt-2 font-medium text-gray-100">Completed Task</h3>
                </div>

                {/* Accepted Task */}
                <div className="rounded-xl py-6 px-8 bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl font-extrabold text-black">{data.taskCounts.active}</h2>
                <h3 className="text-xl mt-2 font-medium text-black">Accepted Task</h3>
                </div>

                {/* Failed Task */}
                <div className="rounded-xl py-6 px-8 bg-gradient-to-br from-red-400 to-red-500 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl font-extrabold text-white">{data.taskCounts.failed}</h2>
                <h3 className="text-xl mt-2 font-medium text-gray-100">Failed Task</h3>
                </div>
            </div>

            {/* Second Column: Bar Plot with 3D Effect */}
            <div className="w-[50%] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-8 flex items-center justify-center hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full">
                <h2 className="text-2xl font-semibold text-gray-100 text-center mb-4">Task Overview</h2>
                <BarChartComponent
                    data={data.taskCounts}
                    options={{
                    plugins: {
                        tooltip: { enabled: true },
                    },
                    scales: {
                        x: {
                        ticks: { color: '#f3f4f6' },
                        grid: { color: 'rgba(243, 244, 246, 0.2)' },
                        },
                        y: {
                        ticks: { color: '#f3f4f6' },
                        grid: { color: 'rgba(243, 244, 246, 0.2)' },
                        },
                    },
                    }}
                />
                </div>
            </div>
        </div>



    )
}

export default TaskListNumber

// active": 2,
//             "newTask": 1,
//             "completed": 1,
//             "failed": 0