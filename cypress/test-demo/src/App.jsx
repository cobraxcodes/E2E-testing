import Form from './Form'
import About from './About'
import { lazy, Suspense } from 'react'
import {Link, Routes, Route, BrowserRouter} from 'react-router-dom'

const Data = lazy(()=> import('./Data'))

function App(){
  return(

    <BrowserRouter>
    <nav>
      <Link to='/about'>About</Link>
      <Link to='/data'>Data</Link>
    </nav>


    <Routes>
      <Route path='/about' element={<About />}/>
      <Route path='/data' element={<Suspense fallback={<p>Loading</p>}><Data/></Suspense>}/>
    </Routes>
      <h1>Welcome to the Home page!</h1>
    <button>Get Started</button>
    <button>Learn More</button>
    <div>
      <Form />
    </div>
    </BrowserRouter>
  
  )
}

export default App