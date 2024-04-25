const Button = ({ styles }) => {
  return (
    <button
      type='button'
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[16px] text-primary outline-none rounded-lg ${styles}`}
    >
      Get Started
    </button>
  )
}

export default Button
