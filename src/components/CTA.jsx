import styles from '../styles/style.js'
import Button from './Button'

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col sm:flex-row rounded-[20px] box-shadow bg-black-gradient-2`}
  >
    {/* title + content */}
    <div className={`flex-1 flex flex-col`}>
      <h2 className={styles.heading2}>Try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
  </section>
)

export default CTA
