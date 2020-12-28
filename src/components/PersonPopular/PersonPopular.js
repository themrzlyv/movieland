import styles from './PersonPopular.module.scss'

const PersonPopular = ({personpopular}) => {
    personpopular.length > 5 ? personpopular.splice(5) : personpopular
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-lg-12">
                    <div className={styles.header}>
                        <h4>
                            <p>
                                famouses
                            </p>
                        </h4>
                    </div>
                    <div className={styles.container}>
                        {
                            personpopular.map(item => (
                                <div key={item.id} className={styles.card}>
                                    <div className={styles.imgbox}>
                                        <img  src={`${process.env.API_IMAGE_URL}${item.profile_path}`} alt=""/>
                                    </div>
                                    <div className={styles.cardtext}>
                                        <button>
                                        <i className="fas fa-fire-alt"></i>
                                        {item.popularity}
                                        </button>
                                        <h4>{item.name}</h4>
                                        {item.gender == 1 ? (<h5> <i className="fas fa-venus"></i> Woman</h5>) : (<h5> <i className="fas fa-mars"></i> Man</h5>)}
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

export default PersonPopular;