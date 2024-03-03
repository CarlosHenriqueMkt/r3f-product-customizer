import { useState } from 'react'
import './App.sass'
import WorkStation from './components/canvas'
import { Bike } from './components/models/Bike'

export default function App() {

  const [principal, setPrincipal] = useState('#ffffff')
  const [contraste, setContraste] = useState('#ffffff')
  const [complementar, setComplementar] = useState('#ffffff')

  return (
    <main className='wrapper'>
      <h1>Edição de Cores de Elementos 3D</h1>
      <div className='canvas'>
        <WorkStation>
          <Bike customColors={{ principal: principal, contraste: contraste, complementar: complementar }} />
        </WorkStation>
      </div>
      <div className='buttons'>
        <span>
          <label htmlFor="bike">Principal</label>
          <input type='color' id='principal' name='principal' value={principal} onChange={(e) => setPrincipal(e.target.value)} />
        </span>
        <span>
          <label htmlFor="bike">Contraste</label>
          <input type='color' id='contraste' name='contraste' value={contraste} onChange={(e) => setContraste(e.target.value)} />
        </span>
        <span>
          <label htmlFor="bike">Complementar</label>
          <input type='color' id='complementar' name='complementar' value={complementar} onChange={(e) => setComplementar(e.target.value)} />
        </span>
      </div>
    </main>
  )
}
