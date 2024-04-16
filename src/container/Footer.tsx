import { BiCopyright } from 'react-icons/bi'
import { BsGithub, BsInstagram, BsLinkedin, BsX } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className='w-full mt-10 bg-gray-800 p-5'>
      <div>
        <div>
          <ul>
            <li><Link to={""}><BsInstagram /></Link></li>
            <li><Link to={""}><BsX /></Link></li>
            <li><Link to={""}><BsLinkedin /></Link></li>
            <li><Link to={""}><BsGithub /></Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><Link to={""}>Home</Link></li>
            <li><Link to={""}>About</Link></li>
            <li><Link to={""}>Contact</Link></li>
            <li><Link to={""}>Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <p>Copyright <BiCopyright /> 2024; Designed and Developed by Harikesh Ranjan Sinha</p>
      </div>
    </section>
  )
}

export default Footer