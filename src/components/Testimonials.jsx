import { feedback } from '../constants'
import styles from '../styles/style.js'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
  <section
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    id='clients'
  >
    {/* TODO: Gradient */}
    <div />

    {/* title + content container */}
    <div className='items-center flex-col justify-between flex md:flex-row sm:mb-16 relative mb-4 z-[1] w-full'>
      {/* title */}
      <h1 className={styles.heading2}>
        What people are
        <br className='hidden sm:block' /> saying about us
      </h1>
      {/* content */}
      <div className='w-full mt-4 md:mt-0'>
        <p className={`${styles.paragraph} text-left max-w-[480px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    {/* cards area */}
    <div
      className={`flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]`}
    >
      {feedback.map((card, index) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
)

export default Testimonials
