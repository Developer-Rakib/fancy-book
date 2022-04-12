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
import Reviews from './components/Reviews/Reviews'
import SignUp from './components/SignUp/SignUp';


export const UserName = createContext('User Name')

function App() {

  const [uName, setUName] = useState()
  // console.log(uName);
  return (
    <UserName.Provider value={[uName, setUName]}>
      <div className="App">
        <Header></Header>
        <Toaster></Toaster>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>

      </div>
    </UserName.Provider>
  )
}

export default App
