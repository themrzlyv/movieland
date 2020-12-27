import styles from './id.module.scss'

const TopRatedDetails = ({data}) => {
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