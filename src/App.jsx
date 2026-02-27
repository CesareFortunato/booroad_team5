import { BrowserRouter, Routes, Route } from "react-router-dom"

import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import TravelDetailPage from "./pages/TravelDetailPage"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>

          <Route path="/" element={<HomePage />} />
          <Route path="/travels/:id" element={<TravelDetailPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
