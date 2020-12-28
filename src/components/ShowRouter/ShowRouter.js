import React from 'react'
import { useRouter } from 'next/router'



const ShowRouter = () => {
    const router = useRouter();
    console.log(router)
    return (
        <div className='container mt-5'>
            <div className="row">
                <div
                style={{boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' , borderRadius:'6px'}}
                className="col-lg-12 w-25 m-3 p-2">
                    <h4>
                        {router.asPath == '/'  || router.asPath == `/?page=${router.query.page}` ? `Home` : router.asPath.substr(0,15)}
                    </h4>
                </div>
            </div>
        </div>
    )
}


export default ShowRouter;