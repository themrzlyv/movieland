import React from 'react'
import {parseCookies} from 'nookies'

const Account = () => {
    const cookie = parseCookies()
    const user = cookie.user ? JSON.parse(cookie.user) : ''
    const profile = user.user
    return (
        <div>
            i am your account
            <h4>{profile.name}</h4>
            <h5>{profile.email}</h5>
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

    return{
        props: {}
    }
}


export default Account;

