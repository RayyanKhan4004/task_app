import React from 'react';
import Button from './Button';
import noProjectPng from '../assets/no-projects.png' 
export default function NoProjectsSelected({onStartAddProject}) {
  return (
    <>
    <section className='mt-24 text-center w-2/3'>
      <img className='h-16 w-16 object-contain mx-auto' src={noProjectPng} alt="An empty task img" />
      <h2 className='text-xl font-bold text-stone 500 mt-4' >No Project Selected</h2>
      <p className='mb-4  text-stone-400' >selected a project or get started with a new one</p>
      <p className='mt-8'>
        <Button onClick={onStartAddProject}> Create New Project </Button>
      </p>
    </section></>
  )
}
