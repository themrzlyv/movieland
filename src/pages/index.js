import Upcoming from '../components/Upcoming/Upcoming'
import PersonPopular from '../components/PersonPopular/PersonPopular'
import TopRatedMovies from '../components/TopRatedMovies/TopRatedMovies'
import Trending from '../components/Trending/Trending'
import TvPopular from '../components/TvPopular/TvPopular'
import GeneralConsumer from '../components/Contex/Contex'
import styles from '../styles/Home.module.scss'
import Router from 'next/router'

const Home = ({UpcomingMovie , topratedMovies, page}) => {
    return (
        <GeneralConsumer>
            {
                value => {
                    return (
                        <div className={`container`}>
                            <div className="row">
                                <div className="col-lg-8">
                                    <Upcoming UpcomingMovie={UpcomingMovie}/>
                                    <TopRatedMovies topratedMovies={topratedMovies} page={page} />
                                </div>
                                <div className="col-lg-4">
                                    <Trending/>
                                    <TvPopular/>
                                    <PersonPopular/>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </GeneralConsumer>
    ) 
}

export default Home;

export const getServerSideProps = async ( { query: { page = 1} } ) => {


    const toprated_res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=${page}`)

    const toprated = await toprated_res.json();
  
    const upcoming_res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const UpcomingMovie = await upcoming_res.json();

    return {
        props: {
            UpcomingMovie,
            topratedMovies: toprated.results,
            page: +page
        }
    }
}