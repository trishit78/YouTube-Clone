import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Watch from './Components/Watch'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Feed from './Components/Feed'


const appRouter  = createBrowserRouter([

  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<Feed/>
      },
      {
        path:"/watch",
        element:<Watch/>
      }
    ]
  }
])

function App() {
  
  return (
    <>
      <Navbar />
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
