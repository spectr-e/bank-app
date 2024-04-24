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
    ></div>
  </div>
)

export default GetStarted
