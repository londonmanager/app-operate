import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Auth from './layouts/Auth.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import './index.css'
import ResetPassword from './pages/ResetPassword.jsx'

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <Auth>
        <AuthLayout>
          <Login />
        </AuthLayout>
      </Auth>
    )
  },
  {
    path: '/signup',
    element: (
      <Auth>
        <AuthLayout>
          <SignUp />
        </AuthLayout>
      </Auth>
    )
  },
  {
    path: '/reset-password',
    element: (
      <Auth>
        <AuthLayout>
          <ResetPassword />
        </AuthLayout>
      </Auth>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
