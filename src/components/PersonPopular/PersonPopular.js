import styles from './PersonPopular.module.scss'
import Link from 'next/link'





const PersonPopular = ({personpopular}) => {
    personpopular.length > 5 ? personpopular.splice(5) : personpopular
    return (
        <div className='container mt-5 sticky-lg-top'>
            <div className="row">
                <div className={`${styles.header} col-lg-12`}>
                    <h4>
                        <p>
                            famouses
                        </p>
                    </h4>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    {
                        personpopular.map(item => (
                            <Link key={item.id} href={`/Famouses/${item.id}`}>
                                <div  className={`container ${styles.card}`}>
                                    <div className="row">
                                        <div className={`col-lg-12 ${styles.imgbox}`}>
                                            <img  src={`${process.env.API_IMAGE_URL}${item.profile_path}`} alt=""/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className={`col-lg-12 ${styles.cardtext}`}>
                                            <button>
                                                <i className="fas fa-fire-alt"></i>
                                                {item.popularity}
                                            </button>
                                            <h4>{item.name}</h4>
                                            {item.gender == 1 ? (<i className="fas fa-venus"></i>) : (<i className="fas fa-mars"></i>)}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PersonPopular;