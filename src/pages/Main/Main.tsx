import Hero from "../../components/layouts/Hero"
import Services from "../../components/layouts/Services"
import Header from "../../components/layouts/Header"

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
    </>
  )
}

export default MainPage
