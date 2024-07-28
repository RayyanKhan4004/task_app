
let tasks ;
const taskArr = []
export default function AddTasks({task, handleChangeTask , handleAddTask}) {
   
  return (
    <div className="flex">
      <input className="bg-stone-300 text-stone-700 m-4" type="text" value={task} placeholder="Enter Task"
       onChange={handleChangeTask}/>
    <button className="hover:text-stone-300 w-20 hover:bg-slate-700 text-slate-700 bg-stone-300 h-6 my-4 rounded-sm "
     onClick={handleAddTask}
      >Add Task</button>
     </div>
  )
}
