import React from 'react'
import { forwardRef } from 'react'
const classN = 'w-full p-1 border-b-2 rounded-sm border-stone-200 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
const Input = forwardRef(function Input({label,textArea,...props}, ref) {
  return (
    <div>
     <p className='flex flex-col gap-1 my-4 '>
        <label ref={ref} className='text-sm font-bold uppercase text-stone-500'>{label}</label>
        {textArea? <textarea ref={ref} className={classN} {...props} />: <input ref={ref} className={classN} {...props} />}
        </p> 
    </div>
    
  )
})
export default Input;