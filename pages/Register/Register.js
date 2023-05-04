import React from 'react'
import styles from "/styles/Register.module.css"
import EmailIcon from '@mui/icons-material/Email';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import Navbar from '../Components/Navbar/Navbar';
import Person3Icon from '@mui/icons-material/Person3';
const Register = () => {
     
    const registerLink = ()=>{
        const login = document.getElementById('login')
        const register = document.getElementById('register')
        const wrapper = document.getElementById('wrapper')
        login.style.display="none"
        register.style.position="relative"
        register.style.left="-410px"
    }

    const loginLink = ()=>{
        const login = document.getElementById('login')
        const register = document.getElementById('register')
        const wrapper = document.getElementById('wrapper')
        login.style.display="block"
        register.style.position="absolute"
        register.style.left="0px"
    }

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.wrapper} id='wrapper'>
                    <div className={`${styles.formBox} ${styles.login}`} id='login'>
                        <h2>LOGIN</h2>
                        <form action='#'>
                            <div className={styles.inputBox}>
                                <span className={styles.icon}><EmailIcon /></span>
                                <input type="text" required />
                                <label>Email</label>
                            </div>
                            <div className={styles.inputBox}>
                                <span className={styles.icon}><LockPersonIcon /></span>
                                <input type="password" required />
                                <label>Password</label>
                            </div>
                            <div className={styles.forget}>
                                <a href='#'>Forget Password?</a>
                            </div>
                            <button type='button' className={styles.btn}>Login</button>
                            <div className={styles.loginRegister}>
                                <p>Don&apos;t hav an account? <a href="#" className={styles.registerLink} onClick={registerLink}> Register </a></p>
                            </div>
                        </form>
                    </div>

                    <div className={`${styles.formBox} ${styles.register}`} id='register'>
                        <h2>Registration</h2>
                        <form action='#'>
                            <div className={styles.inputBox}>
                                <span className={styles.icon}><Person3Icon /></span>
                                <input type="text" required />
                                <label>Username</label>
                            </div>
                            <div className={styles.inputBox}>
                                <span className={styles.icon}><EmailIcon /></span>
                                <input type="text" required />
                                <label>Email</label>
                            </div>
                            <div className={styles.inputBox}>
                                <span className={styles.icon}><LockPersonIcon /></span>
                                <input type="password" required />
                                <label>Password</label>
                            </div>
                            <button type='button' className={styles.btn}>Register</button>
                            <div className={styles.loginRegister}>
                                <p>Already have an account?<a href="#" className={styles.loginLink} onClick={loginLink}> Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register