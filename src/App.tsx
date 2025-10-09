import { RouterProvider } from "react-router-dom"
import { router } from "./Router"
import VersionChecker from "./VersionChecker"

function App() {

  return (
    <>
    <VersionChecker interval={43_200_000} /> {/* två gånger per dag kollas det efter ny version och uppdateras*/}
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
