import {useState} from 'react'
import {useRouter} from 'next/router'


const Register = () => {
    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')

    const router = useRouter();

    const HandleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`${process.env.LOCAL_SERVER}/api/register` , {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                name,
                password
            })
        })
        router.push(`/`)
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12">
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
                            onChange={(e) => setname(e.target.value)}
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Name"/>
                        </div>
                        <div className="form-group">
                            <input 
                            onChange={(e) => setpassword(e.target.value)}
                            type="password" 
                            className="form-control" 
                            placeholder="Password"/>
                        </div>
                        <button 
                        type="submit" 
                        className="btn btn-outline-info">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;