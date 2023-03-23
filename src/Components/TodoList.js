import React from 'react'
import {FaTrash , FaEdit} from 'react-icons/fa'
import {MdCircle} from 'react-icons/md'

export default function TodoList(props) {

  const {todos , settodos} = props

const handleremove = (idToRemove)=>{
    const newArray = todos.filter((todo) => todo.id !== idToRemove);
    settodos(newArray);
}
return (

<div>
       <ul className=''>
            {todos.map((todo)=>{
            return  <li  key={todo.id} className='flex flex-col justify-between bg-white shadow-sm shadow-slate-500 rounded-md p-3 mx-3 mb-5'>
                        <div className='flex items-center justify-between'>
                          <h1 className='font-bold text-xl'>{todo.inputs.title}</h1>
                          <div className=' rounded-full text-xl'  style={{ color: todo.inputs.color }}><MdCircle/></div>
                        </div>
                        <p className='mt-2 mb-4'>{todo.inputs.description}</p>
                        <div className='flex items-center justify-between'>
                            <div className='text-xl'>
                                <button onClick={()=>handleremove(todo.id)} className='text-red-500    rounded'><FaTrash/></button>
                                <button className='text-green-500 mx-2 rounded'><FaEdit/></button>
                            </div>
                            <p className='font-bold'>{todo.inputs.date}</p>
                        </div>
                    </li>
            })}
        </ul>
    </div>
  )
}