import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/index.jsx'
import Search from './pages/Search/index.jsx'
import Favorites from './pages/Favorites/index.jsx'
import Watch from './pages/Watch/index.jsx'
import BasePage from './pages/BasePage/index.jsx'
import Error404Page from './pages/Error404Page/index.jsx'
import FavoriteContext from './context/index.jsx'
import Posts from './pages/Posts/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasePage />,
    errorElement: <Error404Page />,
    children:
      [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "search",
          element: <Search />
        }, {
          path: "favorites",
          element: <Favorites />
        }, {
          path: "watch/:id",
          element: <Watch />
        },
        {
          path: "/posts",
          element: <Posts />,
        }
      ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoriteContext>
      <RouterProvider router={router} />
    </FavoriteContext>
  </StrictMode>,
)
