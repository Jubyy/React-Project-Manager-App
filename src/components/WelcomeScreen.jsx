import img from '../assets/no-projects.png';

export default function WelcomeScreen({setAddingProject}){
    function handleSetAddingProject(){
        setAddingProject(true);
    }
    
    return (
        <div className="flex flex-col justify-center w-2/3 px-24 py-24 items-center">
            <img src={img} className="w-24 mb-6" />
            <h2 className="mb-8 text-2xl font-bold uppercase md:text-xl text-stone-600">No Project Selected</h2>
            <p className="mb-8 font-bold uppercase md:text-lg text-stone-400">Select a project or get started with a new one</p>
            <button onClick={handleSetAddingProject} className="font-bold px-6 py-2 my-2 text-stone-400 bg-black rounded-md hover:text-stone-200">Create New Project</button>
        </div>
    );
}