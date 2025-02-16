//importamos dependencias
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//importamos el css
import './App.css'
//importamos vistas
import VHome from './views/home/v-home'
import VForm from './views/form/v-form'



const App  = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<VHome/>} />
          <Route path='/form' element={<VForm/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
