import styles from '../styles/style'
import { discount, robot } from '../assets'
const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* text column */}
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      {/* discount box */}
      <div className='flex flex-row items-center py-[8px] px-4 bg-discount-gradient rounded-[12px] mb-2'>
        <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20%</span> Discount For{' '}
          <span className='text-white'>1 Month</span> Account
        </p>
      </div>

      {/* hero text */}
      <div className='flex flex-row items-center justify-between w-full'>
        <h1 className='text-white flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[72px]'>
          The Next <br className='hidden sm:block' />{' '}
          <span className='text-gradient'>Generation</span> Payment Method.
        </h1>
      </div>
    </div>
  </section>
)

export default Hero
