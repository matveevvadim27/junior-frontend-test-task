import { Routes, Route } from "react-router-dom"
import MainPage from "./pages/Main"
import HomePage from "./pages/Home"
import ContactsPage from "./pages/Contacts"
import Header from "./components/layouts/Header"
import { useState } from "react"
import ModalWindow from "./components/shared/ModalWindow"
import AuthForm from "./components/shared/AuthForm"

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <ModalWindow isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AuthForm />
      </ModalWindow>
      <Header onOpen={() => setIsOpen(true)} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  )
}

export default App
