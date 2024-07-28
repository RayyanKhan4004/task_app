import React from 'react'
import Input from './Input'
import { useRef } from 'react'
import ModelErr from './ModelErr'
export default function NewComponent({onAdd , onCancle}) {
 // using ref
 const  ModelErrDialog = useRef()
  const title = useRef()
  const descruption = useRef()
  const date = useRef()
  //
  // fx
  function handleSave(){
    const enteredTitle = title.current.value
    const enteredDescruption =descruption.current.value
    const enteredDate = date.current.value
    // fx validation 
    if(enteredTitle.trim() == "" || enteredDate.trim()  == "" || enteredDescruption.trim() == "" ){
      // fx show the dialog......>>>>
      // alert("Please provide all fields")
      ModelErrDialog .current.open()
      
      // fx  stop here...<<<<
    } else{
      ///>>>>>>>>>>>>>
      onAdd({
        title:enteredTitle,
        description:enteredDescruption,
        date:enteredDate
      })
    }
    ///>>>>>>>>>>>>>>>>>>
  }
  // end of handle save fx
  return (
    <div className='w-[35rem] mt-16'>
     <menu className='flex justify-end items-center my-4 gap-4' >
     <button className='text-stone-800 hover:text-stone-950' onClick={onCancle} >cancel</button> 
     <button onClick={handleSave} className='py-2 px-6 rounded-md bg-stone-800 text-stone-50  hover:bg-stone-950' >Save</button>   
    </menu> 
    <div>
       <Input type='text'  ref={title} label={<h2>Title</h2>} placeholder={`title`} />
       <Input   ref={descruption} textArea={true} label={<h2>discruption</h2>} />
       <Input type='date' ref={date} label={<h2>Due Date</h2>}  />
       <ModelErr ref={ModelErrDialog} > 
          <h2  className='text-xl font-bold text-stone mt-4' >Oops Error</h2>
          <p>Seems like you missed some information</p>
          <h2  className='text-xl font-bold text-stone-500 mt-4' >What you can do </h2>
          <p>1.Check your input and try again.</p>
          <p className='' > 2.  Make sure you have fill  out every field.</p>
       </ModelErr>  
    </div>
    </div>
  )
}
