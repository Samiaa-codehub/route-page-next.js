import Link from 'next/link'
import styles from  './about.module.css'
const AboutPage=()=>{
    return(
        <div className={styles.container}>
            
            <h1 className={styles.header}><i>********This is a About Page******</i></h1>
            <ul>
               <li> <Link href={"/"}> Go To Home Page</Link></li>
               <br></br>
            <li><Link href={"./contact"}> Go To Contact Page</Link></li>
            <br></br>
        <li><Link href={"./services"}>Go To Services Page</Link></li>
          <br></br>
          <li><Link href={"/skill"}>Go To Skill Page</Link></li>
            </ul>
        </div>
    )
}
export default AboutPage

