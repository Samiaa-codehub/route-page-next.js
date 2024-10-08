import Link from "next/link";
import styles from './skill.module.css'
const MyPage=()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.header}> *****This is a Skill page********</h1>
               <ul>
                <li><Link href={"/"}>Go To Home Page</Link></li>
                <br></br>
                <li><Link href={"/about"}>Go To About Page</Link></li>
                <br></br>
                <li><Link href={"/contact"}>Go To Contact Page</Link></li>
                <br></br>
                <li><Link href={"/servcies"}>Go To Servcies Page</Link></li>
               </ul>
               </div>
            
    )
}
export default MyPage;