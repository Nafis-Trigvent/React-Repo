import React, { useState } from 'react'

export const TodoApp = () => {
    const [task , setTask] = useState([])
    const [input , setInput ] = useState('') 

    const handleChange = (e)=>{
        setInput(e.target.value)
    }

    const addTask = ()=>{
        if(input.trim()){
            setTask([...task ,  {id: Date.now() , text : input , completed : false}]) ;
            setInput('') ;
        }
    }


  return (
    <div className='min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-600 to-emerald-400'>
        <div className="bg-white px-16 py-8 rounded-2xl"> 
            <h2 className='text-2xl font-bold mb-6 text-center'> React To Do App  </h2>
            <div className='flex justify-between gap-8'>
                <input
                 type="text" 
                 value={input}
                 className=' px-4 py-1 outline-0 flex-1 font-medium' 
                 placeholder='enter a task'
                 onChange={handleChange}
                />
                <button 
                className='bg-black border-0 rounded-xl px-4 py-1.5 text-white'
                onClick={addTask}
                > Add Task </button>
            </div>
            <ul className='space-y-2'>
                {
                    task.map((work)=>(
                        <li 
                            key={work.id}
                            className='mt-3 flex items-center p-3 rounded-lg bg-slate-100 border-1 border-gray-200'
                        > <input 
                            type="checkbox" 
                            onChange={()=> setTask(
                                task.map((t)=>(
                                    t.id === work.id ? {...t , completed : !t.completed} : t
                                ))
                            )}
                            className='mr-2 h-5 w-5 text-blue-600'
                         />
                         <span className={`flex-grow ${work.completed ? 'line-through' : 'text-gray-800' }`}>{work.text}</span>
                         <button 
                            onClick={()=> setTask(task.filter((t)=> t.id !== work.id ))}
                            className='ml-2 border-none p-2 rounded-lg bg-red-500 text-white hover:bg-red-600'
                         > delete</button>
                        
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
