import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUSer()
      .then( (userData) => {
        if (userData) {
          dispatch(login({ userData }))
    
        } else {
          dispatch(logout())
        }
      } )
      .finally( () => setLoading(false) )
  }, [])

  return loading ? null : (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />

        <main>
        Todo:  {/* <Outlet /> */}
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
