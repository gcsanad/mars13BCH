import { FormEvent, useEffect, useState } from 'react'
import './app.css'
import PlayerName from './components/PlayerName/PlayerName'
import Resource from './components/Resource/Resource'
function App() {

  const loadResource = (resource:string)=>{
    const savedMegacredit = localStorage.getItem(resource);
    return savedMegacredit ? Number(savedMegacredit) : 0
  }
  

  const [Megacredit, setMegacreidt] = useState(loadResource("megacredit"))
const [MegacreditProduction, setMegacreditProduction] = useState(loadResource("mproduction"))

const [Steel, setSteel] = useState(loadResource("steel"))
const [SteelProduction, setSteelProduction] = useState(loadResource("sproduction"))

const [Titan, setTitan] = useState(loadResource("titan"))
const [TitanProduction, setTitanProduction] = useState(loadResource("tproduction"))

const handleIncrement=(increment:number, resource:number,setResource:(value:number)=>void) => {
  setResource(resource+increment)
}

useEffect(()=>{
  localStorage.setItem('megacredit',Megacredit.toString());
  localStorage.setItem('steel',Steel.toString());
  localStorage.setItem('mproduction',MegacreditProduction.toString());
  localStorage.setItem('sproduction',SteelProduction.toString());
  localStorage.setItem('titan',Titan.toString());
  localStorage.setItem('tproduction',TitanProduction.toString());
},[Megacredit, Steel, SteelProduction, MegacreditProduction, Titan, TitanProduction]);


const handlSubmit2=(e:FormEvent)=>{
    e.preventDefault()
    setMegacreidt(Megacredit+MegacreditProduction)
    setSteel(Steel+SteelProduction)
    setTitan(Titan+TitanProduction)
}



  return (
    <form onSubmit={handlSubmit2} className="container">
        <PlayerName></PlayerName>
        <Resource 
        name='Megacredit' 
        amount={Megacredit} 
        onchange={(increment:number)=>handleIncrement(increment, Megacredit, setMegacreidt)}
        production={MegacreditProduction}
        onchangeProductivity={(increment:number)=>handleIncrement(increment, MegacreditProduction, setMegacreditProduction)}
        ></Resource>
        <Resource 
        name='Steel' 
        amount={Steel} 
        onchange={(increment:number)=>handleIncrement(increment, Steel, setSteel)}
        production={SteelProduction}
        onchangeProductivity={(increment:number)=>handleIncrement(increment, SteelProduction, setSteelProduction)}
        ></Resource>
        <Resource 
        name='Titan' 
        amount={Titan} 
        onchange={(increment:number)=>handleIncrement(increment, Titan, setTitan)}
        production={TitanProduction}
        onchangeProductivity={(increment:number)=>handleIncrement(increment, TitanProduction, setTitanProduction)}
        ></Resource>
       <button type='submit' className='NextRound'>Next Round</button>
    </form>
  )
}

export default App
