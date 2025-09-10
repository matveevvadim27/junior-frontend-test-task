import styles from "./Services.module.scss"
import classNames from "classnames"
import ServiceCard from "../../shared/ServiceCard"

const Services = () => {
  const cardContent = [
    {
      image: "/heart.svg",
      title: "Онлайн-прием",
      text: "Рыба текст"
    },
    {
      image: "/stethoscope.svg",
      title: "Экстренный Случай",
      text: "Рыба текст"
    },
    {
      image: "/raport.svg",
      title: "Лечение рака",
      text: "Рыба текст"
    }
  ]

  return (
    <section className={classNames(styles.services, "container")}>
      <ul className={styles.services__list}>
        {cardContent.map((card, index) => (
          <ServiceCard key={index} title={card.title} image={card.image} text={card.text} />
        ))}
      </ul>
    </section>
  )
}

export default Services
