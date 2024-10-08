import Link from "next/link"
import styles from './servcies.module.css'
const IntroPage =()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.header}>*******This is a  Servcies page******</h1>
            <ul>
                <li><Link href={"/"}>Go to Home Page</Link></li>
                <br></br>
                <li><Link href={"/about"}>Go To About Page</Link></li>
                <br></br>
                <li><Link href={"/contact"}>Go To Contact Page</Link></li>
                <br></br>
                <li><Link href={"/skill"}>Go To Skill Page</Link></li>
            </ul>
        </div>
    )
}
export default IntroPage