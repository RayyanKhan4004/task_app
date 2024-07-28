
export default function TaskList({TaskList}) {
    let dummyTasks  = [...TaskList];
    return(<ul>    
  { dummyTasks.map(function(curr ,ind){
     return <li> <bold>{ind + 1 }. </bold>{curr}</li>
   })}
    </ul>
)}

