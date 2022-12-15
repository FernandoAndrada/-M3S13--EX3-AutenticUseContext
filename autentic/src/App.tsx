import { useContext } from 'react'
import './App.css'
import { AuthContext } from './contexts/AuthContext';
import { Contador } from './Contador';



function App() {
  
  const { isAuthenticated, setIsAuthenticated, name ,setName } = useContext (AuthContext);

  return (
    <div className="App">
      {isAuthenticated ?(
      <div>  
        <h2>Você está logado!</h2>
        <h2>Olá {name} !</h2>
        <Contador/>
        <button onClick={() => setIsAuthenticated(false)}>Logout</button>
    </div>  
    ):(
    <div>
      <h1>Logue-se para usar o Contador!</h1>
      
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <br></br>
      <button className= "logar" onClick ={()=>setIsAuthenticated(true)}>Logar</button>
    </div>
    )}
    </div>
  );
}

export default App
