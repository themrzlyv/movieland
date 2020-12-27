import styles from './id.module.scss'

const TopRatedDetails = ({data}) => {
    const {production_companies} = data
    console.log(data)
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12">
                    <div className={styles.Card}>
                        <div className={styles.imgbox}>
                            <img  src={`${process.env.API_IMAGE_URL}${data.poster_path}`} alt=""/>
                        </div>
                        <div className={styles.cardtext}>
                            <div>
                                <button style={data.vote_average < 6 ? {backgroundColor: 'red'} : null}>
                                <i className="fas fa-crown"></i>
                                {data.vote_average}
                                </button>
                                <h2>{data.title}</h2>
                                <h4>Genres: {data.genres[0].name}</h4>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className={styles.productions}>
                        <table>
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
                        </table>
                    </div>
                    <div className={styles.Conclution}>
                        <div>
                            <a href={data.homepage}>Movie's Page</a>
                        </div>
                        <div>
                            <h6>{data.tagline}</h6>
                        </div>
                        <div>
                            <p>{data.release_date}</p>
                        </div>
                    </div>
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