import React , {useState} from 'react'
import Modal from 'react-modal';
import {FaPlus} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {CgSun , CgMoon} from 'react-icons/cg'
import TodoList from './TodoList';

export default function TodoApp() {
    const [todos , settodos] = useState([])
    const [inputs , setinputs] = useState([])
    const [modalIsOpen , setIsOpen] = useState(false)
    const [darkmode , setdarkmode] = useState(false)

    const handleChange = (e)=>{
        const {name , value} = e.target   
        setinputs((prev)=>({...prev , [name]:value}))
}

    const handlesubmit =(e)=>{
        e.preventDefault();

        const newTodo ={
            id:Math.floor(Math.random() * 1000),inputs
        }

        let objectLength = Object.keys(newTodo.inputs).length;
       
        if(objectLength === 4){
            todos.push(newTodo)
        }

        closeModal()
        setinputs([])
    }

    const handleDarkmode = ()=>{
        setdarkmode(!darkmode)
    }
    function openModal() {
        setIsOpen(true);
    }   
      function closeModal() {
        setIsOpen(false);
    }

return (
    <div className={`pb-5 min-h-[100vh] ${darkmode && 'bg-black'}`}>
        <div className='bg-black text-white text-2xl p-7 h-10 w-full border-b flex items-center justify-between'>
                <h1>ToDo</h1>
                <button onClick={handleDarkmode}>{darkmode ? <CgMoon className='text-yellow-700'/> : <CgSun className='text-yellow-500'/>}</button>
        </div>
            <button type='button' onClick={openModal}>
               <FaPlus  className={`fixed bottom-5 right-5 p-3 text-5xl text-blue-600 shadow-sm shadow-slate-500 rounded-full ${darkmode && 'bg-white shadow-white'}`}/>
            </button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={`w-[90%] md:w-[60%] mx-auto my-5 py-5 bg-white shadow-sm shadow-slate-500 rounded-lg ${darkmode && 'bg-black'}`}>
       
        <div className='px-10'>
            <div className='flex justify-between items-center mb-8'>
                <h1 className={`font-bold text-xl ${darkmode && 'text-white'}`}>Add new todo</h1>
                <button className=' text-2xl font-bold bg-red-500 rounded-full text-white p-1 hover:bg-red-600 transition ease-in duration-200' onClick={closeModal}><AiOutlineClose/></button>
            </div>
            <form onSubmit={handlesubmit} className='flex flex-col'>
                <input    onChange={handleChange}    name='title'       type='text' placeholder='Todo Title'     className='p-3 my-3 outline-none border-neutral-600 border rounded-lg'/>
                <textarea onChange={handleChange}    name='description' rows={5}    placeholder='Todo Description'  className='p-3 my-3 outline-none border-neutral-600 border rounded-lg'/>   
                <p className={`mt-3 mb-1 ${darkmode && 'text-white'}`}>Todo Color</p>
                <input    onChange={handleChange}    name='color'       type='color'                             className='w-full mb-3 rounded-lg'/>
                <input    onChange={handleChange}    name='date'        type='date'                              className='p-3 my-3 outline-none border-neutral-600 border rounded-lg'/>
                <button type='submit' className='bg-blue-600 text-white p-3 my-3 rounded-lg font-bold hover:bg-blue-700 transition ease-in-out duration-200'>SAVE TODO</button>
            </form>
        </div>
      </Modal>

      <TodoList todos={todos} settodos={settodos}/>
    </div>
  )
}