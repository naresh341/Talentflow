import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <>
    <div className='flex-shrink-0  h-full w-[300px] bg-red-400 p-5 rounded-xl '>
              <div className='flex justify-between ites-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
              </div>
              <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
              <p className='text-sm mt-2'>{data.taskDescription}    </p>
           
              <div className='mt-2'>
                    <button className='w-full'>  Completed</button>
              </div>
            </div>
    </>
  )
}

export default CompleteTask