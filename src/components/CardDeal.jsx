import { card } from '../assets'
import styles, { layout } from '../styles/style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section id='card' className={layout.section}>
      {/* textInfo section */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='hidden sm:block' />
          in a few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
          mollitia voluptatem recusandae? Cum, itaque blanditiis?
        </p>
        {/* getStarted Button */}
        <Button styles={'mt-10'} />
      </div>

      {/* sectionImage */}
      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal
