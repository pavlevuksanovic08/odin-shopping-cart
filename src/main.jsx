import App from "./App"
import Home, {loader as homeLoader} from "./components/Home/Home"
import ErrorPage from "./components/ErrorPage/ErrorPage"
import Loading from "./components/Loading/Loading"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    hydrationFallbackElement: <Loading />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        HydrateFallback: Loading,
        loader: homeLoader
      },
      {
        path: "shop",
        lazy: async () => {
          const module = await import("./components/Shop/Shop");
          return {
            Component: module.default,
            loader: module.loader
          }
        }
      },
      {
        path: "cart",
        lazy: async () => {
          const module = await import("./components/Cart/Cart");
          return {
            Component: module.default
          }
        }
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
