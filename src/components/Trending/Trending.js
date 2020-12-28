import styles from './Trending.module.scss'

const Trending = ({trendlist}) => {
    const {results} = trendlist
    results.length > 10 ? results.splice(10) : results
    return (
        <div className='container mt-3 p-0 '>
            <div className="row">
                <div className="col-lg-12  d-flex flex-column justify-content-center">
                    <div className={styles.header}>
                        <h4>
                            <p>
                                Trending
                            </p>
                        </h4>
                    </div>
                    <div className={styles.container}>
                        {
                            results.map(item => (
                                <div key={item.id} className={styles.card}>
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