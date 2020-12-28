import styles from './Navi.module.scss'


const Navi = () => {
  return (
        <div className={`${styles.container} container-fluid`}>
          <div className='container'>
            <nav className={`navbar navbar-expand-lg navbar-dark`}>
                <div className="container-fluid">
                    <a className="navbar-brand">MovieLand</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="fas fa-align-right"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                      <div className="navbar-nav w-25 justify-content-evenly">
                        <a className="nav-link">Home</a>
                        <a className="nav-link">Features</a>
                      </div>
                    </div>
                </div>
            </nav>
          </div>
        </div>
  )
}

export default Navi;