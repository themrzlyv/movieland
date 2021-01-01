import styles from './Navi.module.scss'
import Link from 'next/link'

const Navi = () => {
  return (
        <div className={`${styles.container} fixed-top container-fluid`}>
          <div className='container'>
            <nav className={`navbar navbar-expand-lg navbar-dark`}>
                <div className="container-fluid">
                    <Link href={`/`}>
                      <a className="navbar-brand">MovieLand</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="fas fa-align-right"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                      <div className="navbar-nav w-25 justify-content-evenly">
                        <a className="nav-link">
                            <i className="far fa-bookmark"></i>
                        </a>
                        <Link href={`/Searchbox/`}>
                          <a className="nav-link">
                              <i className="fas fa-search"></i>
                          </a>
                        </Link>
                        <a className="nav-link">
                            <i className="fas fa-headset"></i>
                        </a>
                      </div>
                    </div>
                </div>
            </nav>
          </div>
        </div>
  )
}

export default Navi;