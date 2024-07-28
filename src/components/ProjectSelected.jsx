import React from 'react'
import NewTasks from './tasks/NewTasks';
function ProjectSelected({project , onDelete, onCancle ,TaskList}) {
  const newFormatedDate = new Date(project.date).toLocaleDateString("en-US" , {

    day : 'numeric' , month: "long", year: 'numeric'
  
  });
  
  return (
    <div className='w-[35rem] mt-16 '>
      <header className='pb-4 mb-4 border-stone-300' > 
        <div className='flex items-center justify-between ' >
        <h1 className=' text-3xl text-stone-600 font-bold ' >{project.title}</h1>
        <button className='text-stone-600 hover:text-stone-950 bg-stone-300 rounded-md border-stone-400 hover:bg-stone-400' onClick={onDelete}>Delete</button>
        <button className='text-stone-600 hover:text-stone-950 bg-stone-300 rounded-md border-stone-400 hover:bg-stone-400'on onClick={onCancle} >Cancle</button>
        </div>
        <h2>{newFormatedDate}</h2>
      </header >
      <hr />
      <div className='flex items-center justify-items-center' >
      <p className='whitespace-pre-wrap text-stone-600' >{project.description}</p>
      </div>
      <hr/>
     <NewTasks TaskLists={()=>TaskList(TaskList)} />
    </div>
  )
}

export default ProjectSelected
