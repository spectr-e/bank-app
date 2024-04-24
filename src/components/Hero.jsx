import styles from '../styles/style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* text section */}
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
          <span className='text-gradient'>Generation</span>
        </h1>

        {/* get started button */}
        <div className='hidden mr-0 ss:flex md:mr-4'>
          <GetStarted />
        </div>
      </div>

      {/* hero paragraph box */}
      <h1 className='text-white  font-poppins font-semibold ss:text-[68px] text-[56px] ss:leading-[100px] leading-[72px] w-full'>
        Payment Method.
      </h1>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        Out team of experts use a unique methodology to identify the credit
        cards most likely to fit your needs. We examine annual percentage rates,
        annual fees.
      </p>
    </div>

    {/* robotic section */}
    <div className=''>
      {/* robotic arm */}
      <img
        src={robot}
        alt='billing'
        className='w-[100%] h-[100%] relative z-[5]'
      />

      {/* gradients */}
      <div className='absolute z-0 w-[40%] h-[36%] top-0 pink__gradient' />
      <div className='absolute z-1 w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
      <div className='absolute z-0 w-[p50%] h-[50%] right-20 bottom-20 blue__gradient' />
    </div>

    {/* Get Started CTA on mobile */}
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
)

export default Hero
