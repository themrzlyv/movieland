import {useEffect, useState} from 'react'
import styles from './Searchbox.module.scss'
import Link from 'next/link'

const Searchbox = () => {
    const [Data, setData] = useState()
    const [Query, setQuery] = useState('')
    const [search, setsearch] = useState('')
    const [page, setpage] = useState(1)
    const [disabled, setdisabled] = useState(false)


    useEffect(() => {
        const searchinput = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&page=${page}&query=${search}`)
            const resData = await res.json()
            setData(resData)
        }
        searchinput();
        page <= 1 ? setdisabled(true) : setdisabled(false);
    }, [search , page])

    

    return (
        <div className='container'>
            <div className={`${styles.header} row`}>
                <div className={`${styles.input} col-lg-10`}>
                    <input type="text" value={Query} onChange={(e) => setQuery(e.target.value)}/>
                </div>
                <div className={`${styles.button} col-lg-2`}>
                    <button onClick={() => setsearch(Query)}>Search me</button>
                </div>
            </div>
            
            <div className="row">
                <div className={`${styles.section} col-lg-12`}>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Movie Poster
                                </th>
                                <th>
                                    Movie Title
                                </th>
                                <th>
                                    Movie Score
                                </th>
                                <th>
                                    Release Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Data === undefined  || Data.hasOwnProperty('errors') ? '' : Data.results.map(item => (
                                    <Link key={item.id} href={`/TopRatedMovies/${item.id}`}>
                                        <tr>
                                            <td>
                                                <img  src={`${process.env.API_IMAGE_URL}${item.poster_path}`} alt=""/>
                                            </td>
                                            <td>
                                                {item.title}
                                            </td>
                                            <td>
                                                {item.vote_average}
                                            </td>
                                            <td>
                                                {item.release_date}
                                            </td>
                                        </tr>
                                    </Link>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div  className="row mt-2 mb-2">
                <div className={`${styles.footer} col-lg-12`}>
                    <button disabled={disabled} onClick={() => setpage(page-1)}>Prev</button>
                    <button onClick={() => setpage(page+1)}>Next</button>
                </div>
            </div>
            
            
        </div>
    )
}


export default Searchbox;