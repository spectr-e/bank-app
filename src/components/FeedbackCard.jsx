import { quotes } from '../assets'

const FeedbackCard = ({ content, title, name, img }) => (
  <div
    className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] mr-0 my-5 feedback-card md:mr-10 sm:mr-5`}
  >
    <img
      src={quotes}
      alt='double_quotes'
      className='w-[40px] h-[28px] object-contain'
    />
  </div>
)

export default FeedbackCard
