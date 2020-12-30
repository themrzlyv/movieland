import styles from './TopRatedMovies.module.scss'
import Router from 'next/router'
import { useState ,useEffect } from 'react'
import Link from 'next/link'



const TopRatedMovies = ({topratedMovies, page}) => {

    const [prevdisable, setprevdisable] = useState(false)
    const [nextdisable, setnextdisable] = useState(false)
    const [showLoader, setshowLoader] = useState(null)

    const changePagePlus = () => {
        setshowLoader(true)
        Router.push(`/?page=${page + 1}`)
        setTimeout(() => {
            setshowLoader(false)
        }, 500);
        
    }

    const changePageMinus = () => {
        setshowLoader(true)
        Router.push(`/?page=${page - 1}`)
        setTimeout(() => {
            setshowLoader(false)
        }, 500);
    }

    useEffect(() => {
        page <= 1  ? setprevdisable(true) : setprevdisable(false) 
        page == 408 ? setnextdisable(true) : setnextdisable(false) 
        window.scrollTo(0,0)
    })

    

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className={`col-lg-12 ${styles.header}`}>
                    <h4>
                        <i className="fas fa-star-half-alt"></i>
                        Top Rated Movies
                    </h4>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    {
                        topratedMovies.map(movie => (
                            <div key={movie.id} className={`container ${styles.Card}`}>
                                <div className="row">
                                    <div className={`col-lg-4 ${styles.imgbox}`}>
                                        <img  src={`${process.env.API_IMAGE_URL}${movie.poster_path}`} alt=""/>
                                    </div>
                                    <div className={`col-lg-8 ${styles.cardtext}`}>
                                        <h2>{movie.title}</h2>
                                        <h4>
                                            <i className="fas fa-users"></i>
                                            {movie.popularity}
                                        </h4>
                                        <p>
                                            {movie.overview.length > 100 ? movie.overview.substring(0, 160) : movie.overview}
                                        </p>
                                        <Link href={`/TopRatedMovies/${movie.id}`}>
                                            <button>
                                                Read More
                                                <i className="far fa-hand-point-right"></i>
                                            </button>
                                        </Link>
                                        <h5>
                                            <i className="far fa-calendar-alt"></i>
                                            {movie.release_date}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
            <div className="row">
                <div className={`col-lg-12 ${styles.nav}`}>
                    <button disabled={prevdisable} onClick={changePageMinus}>
                        <i className="fas fa-arrow-alt-circle-left"></i>Prev
                    </button>
                    <h4>{page}</h4>
                    <button  disabled={nextdisable} onClick={changePagePlus}>
                        Next
                        <i className="fas fa-arrow-alt-circle-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}



export default TopRatedMovies;
