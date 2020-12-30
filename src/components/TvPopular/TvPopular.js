import styles from './TvPopular.module.scss'

const TvPopular = ({tvpopular}) => {
    tvpopular.length > 10 ? tvpopular.splice(10) : tvpopular
    return (
        <div className='container'>
            <div className="row">
                <div className={`col-lg-12 ${styles.header}`}>
                    <h4>
                        <p>
                            TvSeries
                        </p>
                    </h4>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 ">
                    {
                        tvpopular.map(item => (
                            <div key={item.id} className={` container`}>
                                <div className="row">
                                    <div className={`col-lg-12 ${styles.card}`}>
                                        <div className={`${styles.imgbox}`}>
                                            <img  src={`${process.env.API_IMAGE_URL}${item.poster_path}`} alt=""/>
                                        </div>
                                        <div className={styles.cardtext}>
                                            <h4>{item.name}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TvPopular;
