
import './App.css'
import { Posts } from './components/Posts'
import { Movie } from './pages/Movie'

function App() {

  // console.log(getPost())


  return (
    <>
      <div className='bg-[#464a75] pt-7 min-h-[100vh] relative pb-12 pb-[100px] '>
        <Posts />
      </div>
    </>
  )
}

export default App
