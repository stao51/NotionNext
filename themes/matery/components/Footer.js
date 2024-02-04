import { siteConfig } from '@/lib/config'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function() {
    if (Number.isInteger(siteConfig('SINCE')) && siteConfig('SINCE') < currentYear) {
      return siteConfig('SINCE') + '-' + currentYear
    }
    return currentYear
  })()

  return (
    <footer
      className='relative z-10 dark:bg-black flex-shrink-0 bg-indigo-700 text-gray-300 justify-center text-center m-auto w-full leading-6  dark:text-gray-100 text-sm p-6'
    >
      {/* <DarkModeButton/> */}

      <i className='fas fa-copyright' /> {`${copyrightDate}`} <span><i className='mx-1 animate-pulse fas fa-heart'/> <a href={siteConfig('LINK')} className='underline font-bold  dark:text-gray-300 '>{siteConfig('AUTHOR')}</a>.<br/>
    </footer>
  )
}

export default Footer
