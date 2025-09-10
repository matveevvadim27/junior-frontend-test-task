import { Routes, Route } from "react-router-dom"
import MainPage from "./pages/Main"
import HomePage from "./pages/Home"
import ContactsPage from "./pages/Contacts"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  )
}

export default App
