import { useState, useRef } from 'react';
import Input from "./Input"



export default function AddProject({ setProjects, setAddingProject }){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    
    const [myError, setMyError] = useState(false);
    let inputError = false;

    function handleSetAddingProject(){
        setAddingProject(false);
    }

    function handleAddProject(){

        if (title.current.value === '' || description.current.value === '' || dueDate.current.value === '')
            {
                setMyError(true);
                inputError = true;
            }
        else{
            const obj = {
                title: title.current.value,
                description: description.current.value,
                dueDate: dueDate.current.value,
                tasks: []
            }
            setProjects((prevValue) => {
                return [...prevValue, obj];
            });
            inputError = false;
        }
        
    }

    return (
        <div className="flex flex-col w-2/3 px-8 py-24">
            <menu className="flex justify-end">
                <li><button onClick={handleSetAddingProject} className="font-bold px-6 py-2 my-2 rounded-xl">Cancel</button></li>
                <li><button onClick={() => {
                    handleAddProject();
                    {!inputError && handleSetAddingProject()}
                    
                }}
                     className="font-bold px-6 py-2 my-2 text-white bg-black rounded-md">Save</button></li>
            </menu>
            <div className="flex flex-col">
            <Input label="Title" type="text" ref={title}/>
            <Input textarea label="Description" type="text" ref={description} />
            <Input label="Due Date" type="date" ref={dueDate}/>
            {myError && <p className="text-red-500">INPUT ERROR PLEASE TRY AGAIN!</p>}
            </div>
        </div>
    )
}