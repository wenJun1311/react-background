import { createBrowserRouter } from "react-router-dom"
import Article from "../pages/Article/Article"
import Login from "../pages/Login/Login"
import App from "../App"
import Layout from "../pages/layout/Layout"
import Main from "../pages/Main/Main"
import Footer from "../pages/Footer/Footer"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "main",
        element: <Main />,
      },
      {
        path: "footer",
        element: <Footer />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/article",
    element: <Article />,
  },
])

export default router
