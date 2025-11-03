import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Category from './pages/Category'
import ErrorElement from './error/ErrorElement'
import Home from './pages/Home'
import PromptDetail from './pages/PromptDetail'


function App() {


  const router = createBrowserRouter([
    {
      path: '', element: <Layout />, errorElement: <ErrorElement />, children: [
        { path: 'category', element: <Category /> },
        { path: 'prompt/:id', element: <PromptDetail /> },
        { index: true, element: <Home /> },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
