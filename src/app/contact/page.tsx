import Link from "next/link"
import styles from './contact.module.css'
const ContactUs=()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.header}> <i>*****This is a Contact page*****</i></h1>
            <ul>
            <li><Link href={"/"}>go to home</Link></li>
            <br></br>
            <li><Link href={"/about"}>Go To About Page</Link></li>
            <br></br>
            <li><Link href={"/servcies"}>Go To Servcies Page</Link></li>
            <br></br>
            <li><Link href={"/skill"}>Go To Skill Page</Link></li>
            </ul>
        </div>
    )
}
export default ContactUs