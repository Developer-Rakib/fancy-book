import { createContext, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import RequireAuth from './components/RequireAuth/RequireAuth'
import Reviews from './components/Reviews/Reviews'
import SignUp from './components/SignUp/SignUp';

export const DisplyNameContext = createContext("")

function App() {
  const [displyName, setDisplyName] = useState("")

  return (
    <DisplyNameContext.Provider value={[displyName, setDisplyName]}>
      <div className="App">
        <Header></Header>
        <Toaster></Toaster>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/reviews' element={
            <RequireAuth>
              <Reviews></Reviews>
            </RequireAuth>
          }></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>

      </div>
    </DisplyNameContext.Provider>
  )
}

export default App
