export default function ProjectsSidebar( {activeProjects, setAddingProject, setObjectKey} ){
    
    function handleSetAddingProject(){
        setAddingProject(true);
        setObjectKey(null);
    }

    function handleSetObjectKey(title){
        setObjectKey(title);
    }
    
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={handleSetAddingProject}>
                    + Add Project
                    </button>
            </div>
            <ul className="mt-8">
                {activeProjects.map((item) =>{
                    return (<li key={item.title} className="text-stone-200 hover:bg-stone-800">
                    <button onClick={() => {
                        handleSetObjectKey(item.title);
                }
            }>{item.title}</button></li>)
                })}
                
            </ul>
            

            </aside>
    )
}