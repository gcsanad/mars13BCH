import { FormEvent, useState } from 'react'
import './app.css'
import PlayerName from './components/PlayerName/PlayerName'
import Resource from './components/Resource/Resource'
function App() {
const [Megacredit, setMegacreidt] = useState(0)
const [MegacreditProduction, setMegacreditProduction] = useState(0)
const handleMegacreditChange=(increment:number)=>{
    setMegacreidt(Megacredit+increment)
}
const handleMegacreditProduction=(increment:number)=>{
    setMegacreditProduction(MegacreditProduction+increment)
}

const handlSubmit2=(e:FormEvent)=>{
    e.preventDefault()
    setMegacreidt(Megacredit+MegacreditProduction)
}

  return (
    <form onSubmit={handlSubmit2} className="container">
        <PlayerName></PlayerName>
        <Resource 
        name='Megacredit' 
        amount={Megacredit} 
        onchange={handleMegacreditChange}
        production={MegacreditProduction}
        onchangeProductivity={handleMegacreditProduction}
        ></Resource>
       <button type='submit' className='NextRound'>Next Round</button>
    </form>
  )
}

export default App
