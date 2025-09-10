import { Routes, Route } from "react-router-dom"
import MainPage from "./pages/Main"
import HomePage from "./pages/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  )
}

export default App
