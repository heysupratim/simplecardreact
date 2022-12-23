import { ButtonInterface } from "../types"
import styles from './Button.module.css'

const Button = ({text,href,type,filled,icon}: ButtonInterface) => {
    const filledClass = filled ? styles.filled : "";
    return ( 
        <a href={href} className={`${styles.btn} ${styles[type]} ${filled}`}>
            <span>{text}</span>
            {icon}
        </a>
     )
}
 
export default Button