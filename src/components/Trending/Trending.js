import styles from './Trending.module.scss'
import Link from 'next/link'



const Trending = ({trendlist}) => {
    const {results} = trendlist
    results.length > 10 ? results.splice(10) : results
    return (
        <div className='container mt-3 '>
            <div className="row">
                <div className={`col-lg-12 ${styles.header}`}>
                    <h4>
                        <p>
                            Trending
                        </p>
                    </h4>
                </div>
            </div>

            <div className="row">
                <div className={`col-lg-12 d-flex flex-column align-items-center ${styles.imgbox}`}>
                    {
                        results.map(item => (
                            <Link key={item.id} href={`/TopRatedMovies/${item.id}`}>
                                <img key={item.id}  src={`${process.env.API_IMAGE_URL}${item.poster_path}`} alt=""/>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Trending;