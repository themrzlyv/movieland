import styles from './id.module.scss'
import {parseCookies} from 'nookies'


const TopRatedDetails = ({data}) => {
    const {production_companies} = data
    const cookie = parseCookies()
    const user = cookie.user ? JSON.parse(cookie.user) : ''


    const addtoMovielist = async () => {
        const res = await fetch(`${process.env.LOCAL_SERVER}/api/bookmark` , {
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                "Authorization":cookie.token
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className={`${styles.imgbox} col-lg-5`}>
                    <img  src={`${process.env.API_IMAGE_URL}${data.poster_path}`} alt=""/>
                </div>
                <div className={`col-lg-7 ${styles.cardtext}`}>
                    <button style={data.vote_average < 6 ? {backgroundColor: 'red'} : null}>
                        <i className="fas fa-crown"></i>
                        {data.vote_average}
                    </button>
                    <h2>{data.title}</h2>
                    {
                        data.genres.length > 0 ? (<h4>Genre: {data.genres[0].name}</h4>) : null
                    }
                    <h5>
                        <i className="fas fa-language"></i>
                        {data.original_language}
                    </h5>
                    {data.budget == 0 ? null : (<h5>Movie Budget: {data.budget} <i className="fas fa-dollar-sign"></i></h5>)}
                    <h6>
                        <i className="fas fa-info"></i>
                        {data.status}
                    </h6>
                    <p>{data.overview}</p>
                    {
                        user ? 
                            <button onClick={() => addtoMovielist()}>Add to List</button>
                        :
                            null
                    }
                </div>
            </div>

            <div className="row mt-3">
                <div className={`col-lg-12 ${styles.productions}`}>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Company Logo
                                </th>
                                <th>
                                    Company Name
                                </th>
                                <th>
                                    Country Name
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                production_companies.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            <img  src={`${process.env.API_IMAGE_URL}${item.logo_path}`} alt=""/>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.origin_country}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={`row ${styles.Conclution}`}>
                <div className="col-lg-4 p-0 text-center">
                    <a href={data.homepage}>Movie's Page</a>
                </div>
                <div className="col-lg-4 p-0 text-center">
                    <h6>{data.tagline}</h6>
                </div>
                <div className="col-lg-4 p-0 text-center">
                    <p>{data.release_date}</p>
                </div>
            </div>
        </div>
    )
}

export default TopRatedDetails;

export const getServerSideProps = async ({ query: { id } }) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`);
    const  data  = await res.json();
    return {
        props: {data}
    }
}