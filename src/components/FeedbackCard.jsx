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
    <p className='font-poppins font-normal text-white leading-[32px] text-[18px] my-10'>
      {content}
    </p>

    {/* clientInfo */}
    <div className={`flex flex-row`}>
      {/* avatar */}
      <img src={img} alt='avatar' className='w-[52px] h-[52px] rounded-full' />

      {/* name + creds */}
      <div className={`flex flex-col ml-4`}>
        <h4 className='text-white font-poppins font-semibold text-[20px] leading-[32px]'>
          {name}
        </h4>
        <p className='font-poppins text-dimWhite text-[16px] leading-[24px font-normal]'>
          {title}
        </p>
      </div>
    </div>
  </div>
)

export default FeedbackCard
