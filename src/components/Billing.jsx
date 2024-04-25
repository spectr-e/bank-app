import { apple, bill, google } from '../assets'
import styles, { layout } from '../styles/style'

const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    {/* section image */}
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt='billing'
        className='w-[100%] h-[100%] relative z-[4]'
      />
    </div>
  </section>
)

export default Billing
