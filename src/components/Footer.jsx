import styles from '../styles/style.js'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants/'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    {/* links section */}
    <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
      {/* 1st column - logo */}
      <div className={`flex-1 flex flex-col justify-start m-10`}>
        <img
          src={logo}
          alt='logo'
          className='w-[266px] h-[72px] object-contain'
        />
        <p className={`mt-4 max-w-[310px] ${styles.paragraph}`}>
          A new way to make payments easy, reliable and secure.
        </p>
      </div>

      {/* 2nd column - links */}
      <div
        className={`flex-[1.5] w-full flex-row flex-wrap flex justify-between mt-10 md:mt-10`}
      >
        {footerLinks.map((footerLink, i) => (
          <div
            className={`flex flex-col my-4 min-w-[150px] ss:my-0`}
            key={footerLink.key}
          >
            {/* titles */}
            <h4
              className={`font-poppins font-medium text-[18px] leading-[28px] text-white`}
            >
              {footerLink.title}
            </h4>

            {/* individual footerLinks to respective titles */}
            <ul className={`list-none mt-4`}>
              {footerLink.links.map((link, i) => (
                <li
                  className={`font-poppins text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    i !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
                  }`}
                  key={i}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Footer
