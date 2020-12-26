import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={`${styles.container} container-fluid`}>
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                    <div className={`${styles.contentContainer} w-75`}>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-twitter-square"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                    <div className={`${styles.contentContainer} w-75`}>
                        <h4>MovieLand Media • All rights reserved</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;