import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Pets from './pages/Pets'
import PetDetails from './pages/PetDetails'
import IsPrivate from './components/IsPrivate'
import IsAnon from './components/IsAnon'
import EditPet from './pages/EditPet'
import AddPet from './pages/AddPet'
import About from './pages/About'
import Advantages from './pages/Advantages'

function App() {
  return (
    <div className={`App`}>
      <Navbar />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/advantages' element={ <Advantages /> } />
        <Route path='/pets' element={ <IsPrivate> <Pets /> </IsPrivate> } />
        <Route path='/pets/:id' element={ <IsPrivate> <PetDetails /> </IsPrivate> } />
        <Route path='/pets/create' element={ <IsPrivate> <AddPet /> </IsPrivate> } />
        <Route path='/pets/edit/:id' element={ <IsPrivate> <EditPet /> </IsPrivate> } />
        <Route path='/signup' element={ <IsAnon> <Signup /> </IsAnon> } />
        <Route path='/login' element={ <IsAnon> <Login /> </IsAnon> } />
      </Routes>
    </div>
  )
}

export default App
