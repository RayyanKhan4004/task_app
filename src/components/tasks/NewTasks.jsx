import { useState } from "react"
import React from 'react'
import AddTasks from './AddTasks'
import TaskList from './TaskList'
let tasks ;
const taskArr = []

export default function NewTasks({TaskLists}) {
  const [task, setTask] = useState("")
  function handleAddTask(){
    if(tasks){
      taskArr.push(tasks) 
      console.log(taskArr);
      setTask("")
    }
  }
  const handleChangeTask = (e) => {
  setTask(e.target.value)
  tasks = e.target.value 
  
  }
  // const taskLiToTasklist ;
  return (
    <div>
      <h1 className='text-2xl font-bold text-stone-600/90 '>-------------TASKS------------</h1>
      <AddTasks task={task}  handleChangeTask={handleChangeTask} handleAddTask={handleAddTask} />
      <TaskList TaskList={taskArr} />
    </div>
  )
}
