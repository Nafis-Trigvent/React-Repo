
import './App.css'
import { ApiIntegration } from './components/ApiIntegration'
import { Timer1 } from './components/Timer1'


function App() {
 

  return (
    <>
      <Timer1/>
      <div  className=' text-4xl text-center text-semibold mt-5  p-4 border-1 w-[50%] mx-auto'> Api Integration </div>
      <ApiIntegration/>
    </>
  )
}

export default App
