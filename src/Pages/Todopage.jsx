import { useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

function Todopage() {
  const [todo, setTodo] = useState("")
  const [todos , setTodos] = useState([])

  useEffect(()=>{
    let todoString = localStorage.getItem("todos")

    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  },[])

  const saveToLS = ()=>[
    localStorage.setItem("todos" , JSON.stringify(todos))
  ]

  const handleChange = (e)=>{
    setTodo(e.target.value)
    
  }

  const handleEdit = (e,id)=>{
    let t = todos.filter(i=>i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete = (e, id)=>{
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = todos.filter(item=>{
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }
  const handlecheck = (e)=>{
    console.log(e)
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)

  }
  const handleAdd = ()=>{
    setTodos([...todos,{id:uuidv4() , todo , isCompleted: false}])
    setTodo("")
    saveToLS()
  }

  return (
    <>
      <div className='container mx-auto bg-violet-100 p-5 my-4 rounded-xl flex flex-col  items-center min-h-[80vh]  '>
        <div className="addTodo">
          <h1 className='font-bold text-2xl '>Add a Todo</h1>
        </div> 
        <div className='flex w-full justify-center items-center mb-5 mt-4'>
          <input type="text" placeholder='Enter task here' className='w-[70%] py-2 px-1 rounded-lg md:w-[60%]' onChange={handleChange} value={todo} />
          <button className='bg-blue-700 text-white py-2 rounded-lg px-3 mx-2 md:w-[10%]' onClick={handleAdd}>Save</button>
        </div>
        <h2 className='font-bold text-xl mb-3'>Your Todos</h2>
        <div className="todos w-full flex justify-center items-center flex-col gap-5">
          {todos.length===0 && <div>No todo to display</div>}
          {todos.map((data,index)=>{
            return (
              //   
              <div className='flex justify-between items-center md:w-[70%] w-[100%] bg-slate-200 py-3 px-3 rounded-lg border-2 border-black' key={index} >
                <div className="todo w-[60%] md-w-[70%]  flex gap-3 items-center">
                  <input type="checkbox" value={todo.isCompleted} onChange={handlecheck} name={data.id} />
                  <div className={`${data.isCompleted?"line-through":""} overflow-x-auto whitespace-nowrap w-full `}>{data.todo}</div>
                </div>
                <div className="btn flex gap-2 w-[20%] md:w-[30%] justify-end px-2">
                  <button className='bg-green-700 md:px-3 py-1 px-1 rounded-lg text-white font-bold' onClick={(e)=>{handleEdit(e,data.id)}}>Edit</button>
                  <button className='bg-red-700 py-1 md:px-3 px-1 rounded-lg text-white font-bold' onClick={(e)=>{handleDelete(e,data.id)}}>Delete</button>
                </div>
              </div>
            )
          })}
        </div> 
      </div>
    </>
  )
}

export default Todopage
