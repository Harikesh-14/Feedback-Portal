import { BiCopyright } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { links1, links2 } from '../DataList/footerLinks'

function Footer() {
  return (
    <section className='w-full mt-[11.15rem] md:mt-10 bg-gray-800 flex flex-col justify-center items-center text-white'>
      <div className='flex flex-col gap-10 py-10'>
        <div>
          <ul className='flex gap-7 text-3xl justify-center'>
            {links2.map((link) => (
              <li key={link.id} className='text-black bg-white p-2 rounded-full hover:scale-105 hover:-translate-y-1 transition-all'>
                <Link to={link.path} target='_blank' >
                  {link.icons}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className='flex gap-5 text-xl justify-center'>
            {links1.map(link => (
              <li key={link.id} className='hover:bg-gray-900 px-3 py-1 rounded-full border-transparent hover:border-gray-950 hover:bg-opacity-80 hover:scale-105 hover:-translate-y-1 transition-all'>
                <a href={link.path} target='_blank'>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='w-full bg-gray-900 text-xs md:text-base'>
        <p className='flex justify-center py-4 text-gray-300'>Copyright <BiCopyright /> 2024; Designed and Developed by Harikesh Ranjan Sinha</p>
      </div>
    </section>
  )
}

export default Footer