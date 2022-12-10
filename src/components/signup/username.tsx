import styles from './username.module.css'
// To Do:
// 1.) check if username is already in use
//    --> make firebase db query to see if email is returned from db
//    --> 
// 2.) 
const UsernameForm = () => {
    return(
        <div className={styles.mainFormColWrapper}>
            <div className={styles.mainText}>Sign Up for an Account</div>
            <input type="text" placeholder="username"></input>
            <button>Next</button>
        </div>
    )
}
export {UsernameForm}