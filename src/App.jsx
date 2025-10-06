import Header from './components/header'
import Home from './pages/Home'
import BlogDetails from './pages/BlogDetails'
import { Route, Routes } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <>
     <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog/:id' element={<BlogDetails />} />
     </Routes>
    </>
  )
}

export default App
