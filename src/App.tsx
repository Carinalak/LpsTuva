import { RouterProvider } from "react-router-dom"
import { router } from "./Router"
import VersionChecker from "./VersionChecker"

function App() {

  return (
    <>
    <VersionChecker />
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
