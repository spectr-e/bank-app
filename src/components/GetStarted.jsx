import { arrowUp } from '../assets'
import styles from '../styles/style'

const GetStarted = () => (
  // outer circle
  <div
    className={`${styles.flexCenter} w-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer h-[140px]`}
  >
    {/* inner circle */}
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      {/* text + icon */}
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[24px] mr-2'>
          <span className='text-gradient'>Get</span>
        </p>
        <img
          src={arrowUp}
          alt='arrowup'
          className='w-[24px] h-[24px] object-contain'
        />
      </div>
    </div>
  </div>
)

export default GetStarted
