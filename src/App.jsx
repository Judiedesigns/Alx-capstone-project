import Header from './components/Header';
import Home from './pages/Home'
import BlogDetails from './pages/NewsDetails'
import { Route, Routes } from 'react-router-dom';
import Business from './pages/Business';
import Health from './pages/Health';
import Technology from './pages/Technology';
import Science from './pages/Science';
import Entertainment from './pages/Entertainment';
// import './App.css'

function App() {


  return (
    <section className='container mx-auto px-4'>
     <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog/:id' element={<BlogDetails />} />
      <Route path='/business' element={<Business />} />
      <Route path='/health' element={<Health />} />
      <Route path='/technology' element={<Technology />} />
      <Route path= '/science' element= {<Science />} />
      <Route path='/entertainment' element= {<Entertainment />} />
     </Routes>
    </section>
  )
}

export default App
