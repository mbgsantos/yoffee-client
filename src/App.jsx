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
import Activities from './pages/Activities'
import AddActivity from './pages/AddActivity'
import ActivityDetails from './pages/ActivityDetails'
import EditActivity from './pages/EditActivity'
import Services from './pages/Services'
import AddService from './pages/AddService'
import ServiceDetails from './pages/ServiceDetails'
import EditService from './pages/EditService'

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
        <Route path='/activities' element={ <IsPrivate> <Activities /> </IsPrivate> } />
        <Route path='/activities/create' element={ <IsPrivate> <AddActivity /> </IsPrivate> } />
        <Route path='/activities/:id' element={ <IsPrivate> <ActivityDetails /> </IsPrivate> } />
        <Route path='/activities/edit/:id' element={ <IsPrivate> <EditActivity /> </IsPrivate> } />
        <Route path='/services' element={ <IsPrivate> <Services /> </IsPrivate> } />
        <Route path='/services/create' element={ <IsPrivate> <AddService /> </IsPrivate> } />
        <Route path='/services/:id' element={ <IsPrivate> <ServiceDetails /> </IsPrivate> } />
        <Route path='/services/edit/:id' element={ <IsPrivate> <EditService /> </IsPrivate> } />
        <Route path='/signup' element={ <IsAnon> <Signup /> </IsAnon> } />
        <Route path='/login' element={ <IsAnon> <Login /> </IsAnon> } />
      </Routes>
    </div>
  )
}

export default App
