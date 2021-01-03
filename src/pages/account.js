import React from 'react'
import {parseCookies} from 'nookies'
import styles from '../styles/Account.module.scss'


const Account = () => {
    const cookie = parseCookies()
    const user = cookie.user ? JSON.parse(cookie.user) : ''
    const profile = user.user
    return (
        <div className='container'>
            <div className="row">
                <div className={`${styles.header} col-lg-5`}>
                    <h4>
                        <i className="far fa-user-circle"></i>
                        {profile.name}
                    </h4>
                    <h5>
                        <i className="far fa-envelope"></i>
                        {profile.email}
                    </h5>
                </div>
            </div>
        </div>
    )
}


export const getServerSideProps = async (ctx) => {
    const {token} = parseCookies(ctx) 
    if(!token) {
        const {res} = ctx
        res.writeHead(302,{Location:'/login'})
        res.end()
    }

    const res = await fetch(`${process.env.LOCAL_SERVER}/api/bookmark` , {
        headers: {
            "Authorization":token
        }
    })

    const movielist = await res.json()

    return{
        props: {movielist}
    }
}


export default Account;

