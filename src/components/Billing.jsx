import { apple, bill, google } from '../assets'
import styles, { layout } from '../styles/style'

const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    {/* section image */}
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt='billing'
        className='w-[100%] h-[100%] relative z-[5]'
      />
      {/* gradients */}
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
    </div>

    {/* section text */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className='hidden sm:block' />
        billing & invoicing.
      </h2>
      <p className={`mt-5 max-w-[480px] ${styles.paragraph}`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
        molestias ab magnam consectetur facilis dignissimos ea accusamus
        praesentium, cupiditate quam.
      </p>
    </div>
  </section>
)

export default Billing
