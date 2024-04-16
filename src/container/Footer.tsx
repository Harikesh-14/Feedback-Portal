import { BiCopyright } from 'react-icons/bi'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className='w-full mt-10 bg-gray-800 flex flex-col justify-center items-center text-white'>
      <div className='flex flex-col gap-10 py-10'>
        <div>
          <ul className='flex gap-7 text-3xl justify-center'>
            <li className='text-black bg-white p-2 rounded-full hover:scale-105 hover:-translate-y-1 transition-all'><Link to={""}><BsInstagram /></Link></li>
            <li className='text-black bg-white p-2 rounded-full hover:scale-105 hover:-translate-y-1 transition-all'><Link to={""}><BsTwitterX /></Link></li>
            <li className='text-black bg-white p-2 rounded-full hover:scale-105 hover:-translate-y-1 transition-all'><Link to={""}><BsLinkedin /></Link></li>
            <li className='text-black bg-white p-2 rounded-full hover:scale-105 hover:-translate-y-1 transition-all'><Link to={""}><BsGithub /></Link></li>
          </ul>
        </div>
        <div>
          <ul className='flex gap-5 text-xl justify-center'>
            <li className='hover:bg-gray-900 px-3 py-1 rounded-full border-transparent hover:border-gray-950 hover:bg-opacity-80 hover:scale-105 hover:-translate-y-1 transition-all'><Link to={""}>Home</Link></li>
            <li className='hover:bg-gray-900 px-3 py-1 rounded-full border-transparent hover:border-gray-950 hover:bg-opacity-80 hover:scale-105 hover:-translate-y-1 transition-all'><Link to={""}>About</Link></li>
            <li className='hover:bg-gray-900 px-3 py-1 rounded-full border-transparent hover:border-gray-950 hover:bg-opacity-80 hover:scale-105 hover:-translate-y-1 transition-all'><Link to={""}>Contact</Link></li>
            <li className='hover:bg-gray-900 px-3 py-1 rounded-full border-transparent hover:border-gray-950 hover:bg-opacity-80 hover:scale-105 hover:-translate-y-1 transition-all'><Link to={""}>Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <div className='w-full bg-gray-900'>
        <p className='flex justify-center py-4 text-gray-300'>Copyright <BiCopyright /> 2024; Designed and Developed by Harikesh Ranjan Sinha</p>
      </div>
    </section>
  )
}

export default Footer