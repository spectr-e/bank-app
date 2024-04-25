import { stats } from '../constants'
import styles from '../styles/style'

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, i) => (
      <div key={i}>
        <h4 className='font-poppins font-semibold xs:leading-[52px] xs:text-[40px] text-[32px] leading-[44px] text-white'>
          {stat.value}
        </h4>
      </div>
    ))}
  </section>
)
export default Stats
