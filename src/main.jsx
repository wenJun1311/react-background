import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router"
import "./index.css"
import router from "./router"
import "./theme.css"
import { Provider } from "react-redux"
import store from "./store"

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
)
