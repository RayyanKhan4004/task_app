import React from 'react'
import Button from './Button'
export default function SideBar({onStartAddProject , projectsArr , project ,projectID}) {
  // console.log(projectsArr)
  return (
    <>
     <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
        <h2 className = "mb-8 font-bold uppercase md:text-xl text-stone-200">
        Projects
        </h2>
        <div>
            <Button onClick={onStartAddProject} >➕Add project</Button>
            </div>
        <ul>
         {projectsArr.map((curr,ind)=>{
          // console.log(projectsArr[ind].id)
            let  btnStyle = "hover:text-l hover:bg-stone-400 w-full text-left rounded-br-sm py-1 px-5 mt-1 hover:text-slate-900 "
            if(projectsArr[ind].id === projectID){
              btnStyle += `text-l bg-stone-400 text-slate-900`
            } else{
              btnStyle += ``
            }
            let currId = projectsArr[ind].id
          return (<li className={btnStyle} key={currId}><button onClick={()=>project(currId)}>{curr.title}</button></li>)
         })}
            </ul>  
    </aside> 
    </>
  )
}
