import App from "./App"
import Home, {loader as productLoader} from "./components/Home/Home"
import Shop, {loader as shopLoader} from "./components/Shop/Shop"
import Cart from "./components/Cart/Cart.jsx"
import ErrorPage from "./components/ErrorPage/ErrorPage"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: productLoader
      },
      {
        path: "shop",
        element: <Shop />,
        loader: shopLoader
      },
      {
        path: "cart",
        element: <Cart />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
