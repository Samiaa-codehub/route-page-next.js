import style from './home.module.css'
import Link from 'next/link'
function Navbar() {
  return(
        <div className= {style.containers}>
          <h1 className={style.header}>Next.js Assignment</h1>
          <ul>
            <li><Link href={"./about"}>About</Link></li>
            <li><Link href={"./contact"}>Contact</Link></li>
            <li><Link href={"./services"}>services</Link></li>
          <li><Link href={"./skill"}>Skill</Link></li>
            </ul>
            </div>
    
        
  )
} export default Navbar