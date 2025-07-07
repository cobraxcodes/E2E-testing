import Form from './Form'
import About from './About'
import {Link, Routes, Route, BrowserRouter} from 'react-router-dom'

function App(){
  return(

    <BrowserRouter>
    <nav>
      <Link to='/about'>About</Link>
    </nav>


    <Routes>
      <Route path='/about' element={<About />}/>
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