// import ModelErr from "./components/ModelErr";
import SideBar from "./components/SideBar";
import NewComponent from "./components/NewComponent";
import NoProjectsSelected from "./components/NoProjectsSelected";
import ProjectSelected from "./components/ProjectSelected";
import { useState } from "react";
function App() {
  // useing useState to manage the active project\\
  const [projectSelect , setProjectSelect] = useState({
    activeProject : undefined,
    projectsArr : [],
    TaskList : []
  })
 
  function handleCancle(){
  setProjectSelect(function(allRestStates) {
    return{
      ...allRestStates,  
      activeProject:undefined
    }
  })
  }
  ////\\\\
  function handleStartAddProject(){
setProjectSelect(allRestStates => {
  return{
    ...allRestStates,
    activeProject : null
  }})}
///\\\
  function handleAddNewProject(projectData){
    const newProject = {
      ...projectData,
      id : Math.random() // random id
    }
    setProjectSelect(allRestStates => {
      return{
        ...allRestStates,
        activeProject : undefined,
        projectsArr : [...allRestStates.projectsArr, newProject]
      }
    })
  }
   //||\\
   let ActiveID ;
   function onSelectProject(id){
    setProjectSelect(allRestStates => {
      // console.log(`at least`)
      ActiveID=id;
      return{
        ...allRestStates,
        activeProject : id
      }})
   }
   ///\\\
   function handleDeleteProject(){
    setProjectSelect(allRestStates => {
      // console.log(`at least`)
      return{
        ...allRestStates,
        projectsArr : allRestStates.projectsArr.filter((realArr) => realArr.id !== allRestStates.activeProject),
        activeProject : undefined,
        
      }})
  } 
  function handleCancle(){
    setProjectSelect(allRestStates => {
      
      return{
        ...allRestStates,
        activeProject : undefined, 
      }})
  }
  function handleTaskList(projectList){
    setProjectSelect( allRestStates => {
      return{
        ...allRestStates,
        TaskList : [...projectList]
      }
    } )
  }
  // console.log(ActiveID)
  // console.log(projectSelect)
  //  let ind = (projectSelect.projectsArr.map( (undefined , indx) => indx ))
  //  console.log(ind)
  const SelectedProject = projectSelect.projectsArr.find(projectsArr => projectsArr.id === projectSelect.activeProject)
  let contentToBeDisplay = < ProjectSelected project={SelectedProject} onDelete={handleDeleteProject} onCancle={handleCancle} 
  TaskList={() => handleTaskList(projectList)} />;   /*  */
  ////\\\\
  if(projectSelect.activeProject === null){
    contentToBeDisplay= <NewComponent onAdd={handleAddNewProject} onCancle={handleCancle}/> ;
  }else if(projectSelect.activeProject === undefined){
    contentToBeDisplay= <NoProjectsSelected  onStartAddProject={handleStartAddProject}/>
  }
    ////\\\\
    // console.log(projectSelect.projectsArr)
return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar projectsArr={projectSelect.projectsArr} onStartAddProject={handleStartAddProject}  project={(id)=> {
        // console.log(id)
        onSelectProject(id)}}/>
        {contentToBeDisplay}
        {/* <ModelErr> its a dialog </ModelErr> */}
    </main>
  );
 }
export default App;
