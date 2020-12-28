import styles from './id.module.scss'

const Famouses = ({data}) => {
    console.log(data)
    return (
        <div className='container'>
            <div className="row">
                <div className={`col-lg-4 ${styles.imgbox}`}>
                    <img  src={`${process.env.API_IMAGE_URL}${data.profile_path}`} alt=""/>
                    <h2>{data.name}</h2>
                    <h4>{data.known_for_department}</h4>
                    <h4>{data.birthday}</h4>
                    <h5>{data.place_of_birth}</h5>
                </div>
                <div className={`col-lg-8 ${styles.cardtext}`}>
                    
                    
                    <p>{data.biography}</p>
                    <p>{data.also_known_as}</p>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5">
                    <a href={data.homepage}>Official Website</a>
                </div>
                <div className="col-lg-7">
                    
                </div>
            </div>
        </div>
    )
}

export default Famouses;

export const getServerSideProps = async ({ query: { id } }) => {
    const res = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.API_KEY}&language=en-US`);
    const  data  = await res.json();
    return {
        props: {data}
    }
}