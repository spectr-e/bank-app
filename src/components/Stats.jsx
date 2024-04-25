import { stats } from '../constants'
import styles from '../styles/style'

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, i) => (
      <div
        key={i}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        {/* numbers */}
        <h4 className='font-poppins font-semibold xs:leading-[52px] xs:text-[40px] text-[32px] leading-[44px] text-white'>
          {stat.value}
        </h4>
        {/* labels */}
        <p className='font-poppins font-semibold xs:leading-[24px] xs:text-[20px] leading-[20px] text-white text-[16px] text-gradient ml-3'>
          {stat.title}
        </p>
      </div>
    ))}
  </section>
)
export default Stats
