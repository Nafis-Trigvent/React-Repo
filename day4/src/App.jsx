
import './App.css'
import { ConditionalUI } from './components/ConditionalUI'
import { DynamicStyling } from './components/DynamicStyling'
import { FilterSearch } from './components/FilterSearch'
import { MapRendring } from './components/MapRendring'


function App() {
 

  return (
    <>
     <MapRendring/>
     <hr style={{marginTop : '80px'}}/>
     <ConditionalUI/>
     <hr style={{marginTop : '50px'}}/>
     <FilterSearch/>
     <DynamicStyling/>
    </>
  )
}

export default App
