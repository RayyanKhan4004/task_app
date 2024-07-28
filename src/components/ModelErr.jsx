import React from 'react'
import Button from './Button';
import { forwardRef , useImperativeHandle , useRef } from 'react'
import {createPortal} from 'react-dom'
//


const ModelErr =  function ModelErr({children} , ref) {
  const modelRef = useRef()
  // fx its a hook to expose model it return a object {}
  useImperativeHandle(ref , ()=>{
    return {
      open(){
        modelRef.current.showModal();
      }
    }
  })
  //
  return createPortal(
    <dialog   ref={modelRef}  className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
   {children}   
   <form method='dialog'><Button >ok!</Button></form>
    </dialog>
  
, document.getElementById( "modal-root" )) };

export default  forwardRef(ModelErr);
