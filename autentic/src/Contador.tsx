import { useState, useEffect } from "react";



export function Contador() {

    const[superDev, setSuperDev] = useState(0);
  
    const [count, setCount] = useState (0);
  
    const [ coracao, setCoracao] = useState(0);
    
    function handleCount(){
      setCount(count + 1);
    }
  
    function handleCountDim(){
      setCount(count -1);
    }
  
    function cleanCount(){
      setCount(0);
      setSuperDev(0);
      setCoracao(0);
      cleanCount();
    }
    
  
    useEffect(()=>{
      if(count >= 5) {
        setSuperDev(superDev + count);
      }
    },[count]);//lista diz quem vai ser ouvido
  
    useEffect(()=>{
      if(count >= 5) {
        setCoracao(coracao + count);
      }else{
        setCoracao(0);
        setSuperDev(0);
      }
    },[count]);
  
  
    return (
      <div className="App">
        <div className="Card">
          {superDev ? <h1>👌Super Dev!</h1> : <h1>Micro Dev</h1>}
          
          <p className="heart"></p>
          <p className= "counter">{count}</p>
          {coracao ? <h2>💗</h2> : <h2>🤍</h2>}
          <button className='a'
          onClick = {handleCount}>Curtidas</button>
          <br />
          <br />
          <button className='a'
          onClick={handleCountDim}>Descurtidas</button>
          <br />
          <br />
          <button className='a'
          onClick={cleanCount}>Limpa Curtidas</button>
      </div>
    </div>
    )
  }
  
