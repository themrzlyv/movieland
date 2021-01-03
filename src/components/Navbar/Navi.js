import styles from './Navi.module.scss'
import Link from 'next/link'
import {parseCookies} from 'nookies'
import cookie from 'js-cookie'




const Navi = () => {

  const cookieuser = parseCookies()
  const user = cookieuser.user ? JSON.parse(cookieuser.user) : ''

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
                        <Link href={`/Searchbox/`}>
                          <a className="nav-link">
                              <i className="fas fa-search"></i>
                          </a>
                        </Link>
                        {
                          user ? 
                            <>
                              <Link href={`/account/`}>
                                <a className="nav-link">
                                    <i className="fas fa-user-circle"></i>
                                </a>
                              </Link>
                              <Link href={`/`}>
                                <a className="nav-link" onClick={() => {
                                  cookie.remove('token')
                                  cookie.remove('user')
                                }}>
                                    <i className="fas fa-user-times"></i>
                                </a>
                              </Link>
                            </>
                          : 
                            <>
                              <Link href={`/register/`}>
                                <a className="nav-link">
                                    <i className="fas fa-users"></i>
                                </a>
                              </Link>
                              <Link href={`/login/`}>
                                <a className="nav-link">
                                    <i className="fas fa-sign-in-alt"></i>
                                </a>
                              </Link>
                            </>
                        }
                      </div>
                    </div>
                </div>
            </nav>
          </div>
        </div>
  )
}

export default Navi;