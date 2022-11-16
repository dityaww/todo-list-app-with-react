import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo } from '../redux/action/todoAction';

function TodoList() {
    const dispatch = useDispatch()
    const [inputTodo, setInputTodo] = useState("");
    const [Message, setMessage] = useState("");
    const todos = useSelector((state) => state.todo.data);
    // console.log(todos);
      
    const handleSubmit = (e) => {
      e.preventDefault();
      //   console.log(inputTodo, "dari event");

      if (!inputTodo) {
        return setMessage('Aktivitas Kosong!')
      } 

      dispatch(addTodo(inputTodo))
      setInputTodo("")
      setMessage("")
    };
  
    const handleChange = (e) => {
      setInputTodo(e.target.value);
    };

    return (
        <>
            <div className='flex flex-col justify-center h-screen max-w-sm mx-auto'>
                <div className='border p-8 shadow-md'>
                    <form onSubmit={handleSubmit}>
                        <p className='text-2xl font-bold text-slate-600 mb-3'>Todo List App</p>
        
                        {Message && <div className='text-red-400'>{Message}</div>}

                        <div className='flex gap-5 pt-1'>
                            <input 
                                className='border border-slate-300 px-2 py-1 outline-none rounded-sm' 
                                placeholder='input your todo'
                                type="text" 
                                name="inputTodo" 
                                value={inputTodo}
                                onChange={handleChange} 
                            />
                            <button className='bg-slate-400 text-slate-100 px-2 hover:bg-slate-500 rounded-sm'>Add Data</button>
                        </div>
                    </form>
                    <div className='flex gap-5 mt-10 mb-3'>
                        <button className='px-2 py-1 border border-slate-300 hover:bg-slate-200 rounded-sm'>All</button>
                        <button className='px-2 py-1 border border-slate-300 hover:bg-slate-200 rounded-sm'>Active</button>
                        <button className='px-2 py-1 border border-slate-300 hover:bg-slate-200 rounded-sm'>Complete</button>
                    </div>
                    
                    {todos.length > 0 ? (
                        <ul>
                            {todos.map((item, index) => (
                                <li className='flex justify-between border border-slate-200 p-2 mb-2' key={index}>
                                    <div className='flex gap-2'>
                                        <input type="checkbox" name="" id="" />
                                        <p>{item}</p>
                                        {/* {console.log(index)} */}
                                    </div>
                                    <div className='flex gap-1'>
                                        <button className='text-sky-400 px-2'><i className="fa-regular fa-pen-to-square"></i></button>
                                        <button className='text-red-400 px-2'><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <i>-- tidak ada todo --</i>
                    )}    
                </div>    
            </div>
        </>
    )
}

export default TodoList