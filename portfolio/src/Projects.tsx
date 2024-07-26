import React from 'react'
import projectdata from './constants/projects.json'

const Projects = () => {
  return (
    <div className='m-16'>
        <div className='text-4xl text-black mb-8'>Projects</div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {projectdata.map((item, key) => (
                <div key={key} className="w-full p-4">
                    <div className="rounded-md bg-gray-200 p-6 flex flex-col h-auto">
                        <div className='text-lg font-semibold mb-2'>{item.name}</div>
                        <div className='text-base text-gray-700 break-words'>{item.description}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
