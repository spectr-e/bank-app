import styles from './styles/style'

const App = () => {
  return (
    <div className='w-full overflow-hidden bg-primary'>
      {/* Navbar Structure*/}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>Navbar</div>
      </div>
    </div>
  )
}

export default App
