import {useState} from 'react'
import {useRouter} from 'next/router'
import cookie from 'js-cookie'
import styles from '../styles/Login.module.scss'



const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const router = useRouter();

    const HandleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`${process.env.LOCAL_SERVER}/api/login` , {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const res_data = await res.json()
        cookie.set('token' , res_data)
        cookie.set('user' , res_data)
        router.push(`/`)
    }

    return (
        <div className='container'>
            <div className="row">
                <div className={`${styles.header} col-lg-5`}>
                    <h4>Login</h4>
                </div>
            </div>
            <div className="row">
                <div className={`${styles.form} col-lg-12`}>
                    <form onSubmit={HandleSubmit}>
                        <div className="form-group">
                            <input
                            onChange={(e) => setemail(e.target.value)}
                            type="email" 
                            className="form-control" 
                            placeholder="Enter Email"/>
                        </div>
                        <div className="form-group">
                            <input 
                            onChange={(e) => setpassword(e.target.value)}
                            type="password" 
                            className="form-control" 
                            placeholder="Password"/>
                        </div>
                        <button 
                        type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;