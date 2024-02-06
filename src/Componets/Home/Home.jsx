import React, { useEffect  , useState} from 'react'
import "./Home.scss"
import {Link} from "react-router-dom";
import axios from "axios";
import {BiPlay } from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"

const apikey = "9857d141b12c5713d27822cbb8917952"
const url = "https://api.themoviedb.org/3"
const upcoming = "upcoming";
const nowplaying = "now_playing";
const popular = "popular"
const Toprated = "top_rated";
const List = "list"
const imgUrl="https://image.tmdb.org/t/p/original";

const Card=({img})=>(
  <img className='Card' src={img} alt='cover'  />
)
const Row =({title , arr=[{
 
}] })=>(
  <div className='Row'> 

    <h2>{title}</h2>
    <div>
         {
          arr.map((item , index)=>(
            <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>
          ))
         }
    </div>
  </div>
)

function Home() {
  const[upcomingmovie , setupcomingmovie] = useState([])
  const[nowmovie , setnowmovie] = useState([])
  const[popularmovie , setpopularmovie] = useState([])
  const[Topratedmovie , setTopratedmovie] = useState([])
  const[genremovies , setgenremovies] = useState([])

  
  useEffect(() => {
    const fetchUpcoming = async()=>{
      const {data: { results }} = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}&page=3`);
      setupcomingmovie(results)
    };
    fetchUpcoming()
    const fetchnowplaying = async()=>{
      const {data: { results }} = await axios.get(`${url}/movie/${nowplaying}?api_key=${apikey}&page=5`);
      setnowmovie(results)
    };
    fetchnowplaying()
    const fetchpopular = async()=>{
      const {data: { results }} = await axios.get(`${url}/movie/${popular}?api_key=${apikey}&page=6`);
      setpopularmovie(results)
    };
    fetchpopular()
    const fetchToprated = async()=>{
      const {data: { results }} = await axios.get(`${url}/movie/${Toprated}?api_key=${apikey}&page=2`);
      setTopratedmovie(results)
    };
    fetchToprated()
    const getAllGenre  = async()=>{
      
      const {data: { genres }} = await axios.get(`${url}/genre/movie/${List}?api_key=${apikey}&page=2`);
      setgenremovies(genres)
      //console.log(genres);      
    };
    getAllGenre()
    
    
  }, [])
  
  
  return (
    <section className='home'>
      <div className="banner" style={{
        backgroundImage: popularmovie[12]?`url(${`${imgUrl}/${popularmovie[12].poster_path}`})`:"rgb(16,16,16)"

      }}>
        {
          popularmovie[12] &&(
            <h1>{popularmovie[12].original_title}</h1>
          )
        }
        {
          popularmovie[12] && (
            <p>{popularmovie[12].overview}</p>
          )
        }
        <div>
        <button> <BiPlay/> Play  </button>
        <button>My List <AiOutlinePlus/></button>
        </div>
         
      </div>
      <Row title={"Now Playing"} arr={nowmovie}/>
      <Row title={"Upcoming Movies"} arr={upcomingmovie}/>
      <Row title={"Popular Movies"} arr={popularmovie}/>
      <Row title={"Top Rated"} arr={Topratedmovie}/>
      <div className="genreBox">
        {genremovies.map((item)=>(
          <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
        ))}
      </div>
    </section>
  )
}

export default Home