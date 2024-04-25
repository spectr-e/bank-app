import { features } from '../constants'
import styles, { layout } from '../styles/style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  // card design
  <div
    className={`${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card flex flex-row p-6 rounded-[20px]`}
  >
    {/* icon design */}
    <div
      className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
    >
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
    </div>
  </div>
)
const Business = () => {
  return (
    // entire section
    <section id='features' className={layout.section}>
      {/* first column - textInfo */}
      <div className={layout.sectionInfo}>
        {/* textInfo title */}
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className='hidden sm:block' />
          we'll handle the money.
        </h2>
        {/* textInfo paragraph */}
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        {/* get started button */}
        <Button styles={'mt-10'} />
      </div>

      {/* second column - cards */}
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, i) => (
          <FeatureCard key={feature.id} {...feature} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Business
