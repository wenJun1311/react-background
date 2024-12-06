import { createBrowserRouter } from "react-router-dom"
import New from "@/pages/New/New"
import Month from "@/pages/Month/Month"
import Year from "@/pages/Year/Year"
import Layout from "@/pages/Layout/Layout"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/month",
        element: <Month />,
      },
      {
        path: "/year",
        element: <Year />,
      },
    ],
  },
  {
    path: "/new",
    element: <New />,
  },
])

export default router
