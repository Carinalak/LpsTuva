import { RouterProvider } from "react-router-dom"
import { router } from "./Router"
import VersionChecker from "./VersionChecker"

function App() {

  return (
    <>
    <VersionChecker /> {/* Kollar uppdatering direkt vid sidstart och vid fasta tider varje dag*/}
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
