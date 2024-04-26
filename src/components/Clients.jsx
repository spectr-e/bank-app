import styles from '../styles/style.js'
import { clients } from '../constants'

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} w-full flex-wrap`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[196px] min-w-[120px] `}
        >
          <img
            src={client.logo}
            alt='client'
            className='sm:w-[196px] w-[100px] '
          />
        </div>
      ))}
    </div>
  </section>
)

export default Clients
