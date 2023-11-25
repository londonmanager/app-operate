import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout.jsx'
import Sale from './pages/Sale.jsx'
import './index.scss'

const router = createBrowserRouter([
  {
    path: '/sale',
    element: (
      // <AuthLayout>
        <Sale />
      // </AuthLayout>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
