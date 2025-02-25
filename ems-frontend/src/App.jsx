import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import AddEmployeeComponent from './components/AddEmployeeComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
     <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          {/* // http://localhost:3000 */}
          <Route path='/' element={<ListEmployeeComponent/>}></Route>
          {/* // http://localhost:3000/employees */}
          <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
          {/* // http://localhost:3000/add-employee */}
          <Route path='/add-employee' element={<AddEmployeeComponent/>}></Route>
          {/* // http://localhost:3000/edit-employee/1 */}
          <Route path='/edit-employee/:id' element={<AddEmployeeComponent/>}></Route>
        </Routes>
        <FooterComponent/>
     </BrowserRouter>

    </>
  )
}

export default App
