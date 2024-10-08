import Link from "next/link"
import styles from './skilltype.module.css'
const SkillType=()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.header}>*****Skills Details******</h1>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Typescript</li>
                <li>Next.js</li>
            </ul>
        </div>
    )
}
export default SkillType;