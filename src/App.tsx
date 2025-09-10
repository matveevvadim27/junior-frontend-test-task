import Button from "./components/ui/Button"

function App() {
  return (
    <section className="container">
      <Button variant={"primary"}>Войти</Button>
      <Button variant={"secondary"}>Контакты</Button>
      <Button variant={"auth"}>Войти</Button>
      <Button variant={"link"}>Контакты</Button>
    </section>
  )
}

export default App
