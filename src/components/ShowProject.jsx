import { useRef } from 'react';
import WelcomeScreen from "./WelcomeScreen";

export default function ShowProject({myKey, setAddingProject, storedProjects, setStoredProjects }){
    const taskValue = useRef();

    function handleDelete(){
        const filteredStoredProjects = storedProjects.filter((item) =>  item.title !== storedProjects[myKey].title);
        setStoredProjects(filteredStoredProjects); 
    }
    
    function handleAddTask() {
        const task = taskValue.current.value;
        if (task) {
          const updatedProjects = [...storedProjects];
          if (!updatedProjects[myKey].tasks) {
            updatedProjects[myKey].tasks = [];
          }
          updatedProjects[myKey].tasks.push(task);
          setStoredProjects(updatedProjects);
          taskValue.current.value = '';
        }
      }

      function handleClearTask(taskIndex) {
        const updatedProjects = [...storedProjects];
        updatedProjects[myKey].tasks.splice(taskIndex, 1);
        setStoredProjects(updatedProjects);
      }
      
    return (
        <> 
        {!storedProjects[myKey] && <WelcomeScreen setAddingProject={setAddingProject} />}
        {storedProjects[myKey] && <div className="flex flex-col w-2/3 px-24 py-24">

<div className="flex">
    <h2 className="mb-2 font-bold uppercase md:text-xl text-stone-800">{storedProjects[myKey].title}</h2>
    
    <button onClick={handleDelete} className="ml-auto font-bold px-6 py-2 mb-2 rounded-xl">Delete</button>
</div>
<h3 className="mb-8 uppercase md:text-xl text-stone-500">{storedProjects[myKey].dueDate}</h3>
<p>{storedProjects[myKey].description}</p>
<hr></hr>
<h3 className="mt-4 mb-2 font-bold uppercase md:text-xl text-stone-800">Tasks</h3>
<div className="flex">
<input ref={taskValue} className="bg-stone-300 px-12" /> 
<button onClick={handleAddTask} className=" px-6 py-2 mb-2">Add Task</button>
</div>
<div  className="flex flex-col mt-8 bg-stone-200">
<ul>
    {storedProjects[myKey].tasks.map((item, index) =>{
        return (<li key={item} className="flex mt-2 mb-2">
        <p className="px-6 py-2">{item}</p>
        <button onClick={() =>{
            handleClearTask(index);
        }} className="ml-auto px-6 py-2 mr-4">Clear</button>
    </li>)
    })}
    
</ul>

</div>
</div>}
        
        </>
    )
}