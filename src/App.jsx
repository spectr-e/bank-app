// components
import {
  Hero,
  Footer,
  CTA,
  Stats,
  Testimonials,
  CardDeal,
  Clients,
  Billing,
  Business,
  NavBar,
} from './components'

// styles
import styles from './styles/style'

const App = () => {
  return (
    <div className='w-full overflow-hidden bg-primary'>
      {/* navbar section*/}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      {/* hero section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* other sections */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />
          <Clients /> <CTA /> <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
