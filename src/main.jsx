import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/index.jsx'
import Search from './pages/Search/index.jsx'
import Favorites from './pages/Favorites/index.jsx'
import Watch from './pages/Watch/index.jsx'
import BasePage from './pages/BasePage/index.jsx'
import ErrorPage from './pages/ErrorPage/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasePage />,
    errorElement: <ErrorPage />,
    children:
      [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/search",
          element: <Search />
        }, {
          path: "/favorites",
          element: <Favorites />
        }, {
          path: "/watch",
          element: <Watch />
        }
      ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
