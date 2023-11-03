import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Auth from './layouts/Auth.jsx'
import Sale from './pages/Sale.jsx'
import './index.scss'

const router = createBrowserRouter([
  {
    path: '/tables',
    element: (
      <Auth>
        <Sale />
      </Auth>
    )
  },
  {
    path: '/sale',
    element: (
      <Auth>
        <Sale />
      </Auth>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
