import styles from './Upcoming.module.scss'
import React from 'react'
import Link from 'next/link'


const Upcoming = ({UpcomingMovie}) => {

  const myRef = React.createRef();

  const prevClick = () => {
    const slide = myRef.current;
    slide.scrollLeft -= slide.offsetWidth;
    if (slide.scrollLeft <= 0){
      slide.scrollLeft = slide.scrollWidth;
    }
  }
  const nextClick = () => {
    const slide = myRef.current;
    slide.scrollLeft += slide.offsetWidth;
    if (slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)){
      slide.scrollLeft = 0;
    }
  }

  const { results } = UpcomingMovie;
  
  return (
      <div className={`container mt-3`}>
          <div className="row">
              <div className="col-lg-12 align-items-center p-0 d-flex justify-content-center">
                  <div className={styles.contentContainer} ref={myRef}>
                          {
                              results.map(item => (
                                  <Link key={item.id} href={`/TopRatedMovies/${item.id}`}>
                                    <div  className={styles.Card}>
                                      <div className={styles.imgbox}>
                                        <img  src={`${process.env.API_IMAGE_URL}${item.poster_path}`} alt=""/>
                                      </div>
                                      <div className={styles.CardText}>
                                        <div>
                                          <button style={item.vote_average < 7 ? {backgroundColor:'red'} : null}> 
                                              <i className="far fa-star"></i> 
                                              {item.vote_average}
                                          </button>
                                          <h4>{item.title}</h4>
                                          <h6> <i className="fas fa-language"></i> {item.original_language}</h6>
                                          <p>Release Date: {item.release_date}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                              ))
                          }
                  </div>
              </div>
              
          </div>
          <div className="row">
            <div className="col-lg-12">
                <div className={styles.Nav}>
                    <div onClick={prevClick} className={styles.prev}>
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    <div onClick={nextClick} className={styles.next}>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>
          </div>
      </div>
  )
}

export default Upcoming;