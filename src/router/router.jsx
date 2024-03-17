import { createBrowserRouter } from 'react-router-dom'
// import { Auth } from '../layouts/Auth.jsx'
import Sale from '../pages/Sale.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      // <Auth>
        <Sale />
      // </Auth>
    )
  },
  {
    path: '/sale/:popID',
    element: (
      // <Auth>
        <Sale />
      // </Auth>
    )
  }
])

export default router
