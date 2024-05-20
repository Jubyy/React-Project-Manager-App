import { useState } from 'react';

import ProjectsSidebar from "./components/ProjectsSidebar";
import AddProject from "./components/AddProject";
import WelcomeScreen from './components/WelcomeScreen';
import ShowProject from './components/ShowProject';

function App() {
  const [storedProjects, setStoredProjects] = useState([]);
  const [addingProject, setAddingProject] = useState(false);
  const [objectKey, setObjectKey] = useState(null);

    const myKey = storedProjects.findIndex(({title}) => title === objectKey);
  
  
  return (
    <>
    <main className="flex h-screen my-8 gap-8">
      
      <ProjectsSidebar activeProjects={storedProjects} setAddingProject={setAddingProject} setObjectKey={setObjectKey} />
      
      {objectKey ? <ShowProject myKey={myKey} setAddingProject={setAddingProject} storedProjects={storedProjects} setStoredProjects={setStoredProjects}/> : addingProject ? <AddProject setProjects={setStoredProjects} setAddingProject={setAddingProject}/>
      : <WelcomeScreen setAddingProject={setAddingProject} /> }
      
      

    </main>
    </>
  );
}

export default App;
