import styles from './Trending.module.scss'

const Trending = ({trendlist}) => {
    const {results} = trendlist
    console.log(results)
    return (
        <div className='container mt-3 p-0 '>
            <div className="row">
                <div className="col-lg-12  d-flex justify-content-center">
                    <div className={styles.container}>
                        {
                            results.map(item => (
                                <div className={styles.card}>
                                    <div className={styles.imgbox}>
                                        <img  src={`${process.env.API_IMAGE_URL}${item.poster_path}`} alt=""/>
                                    </div>
                                    <div className={styles.cardtext}>
                                        <h4>{item.title}</h4>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending;