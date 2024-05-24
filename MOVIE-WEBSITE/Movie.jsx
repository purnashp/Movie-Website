import React, { useEffect, useRef, useState } from 'react'
import './movie.css'
import img from '../images/logo.png'
import SearchIcon from '@mui/icons-material/Search';

const Movie = () => {
  let [movie, setmovie] = useState([])
  let movieval = useRef()
  let handlesubmit = (e) => {
    e.preventDefault()
    let val = movieval.current.value
    fetch(`https://www.omdbapi.com/?s=${val}&apikey=3e48ee3e`)
      .then(resp => resp.json())
      .then(data => { setmovie(data.Search) })
  }
  movie.map((elem) => console.log(elem))
  return (
    <div className="movicard">
      <div className="header">
        <div className="logo">
          <img src={img} alt="" />
          <h1>MovieRoom</h1>
        </div>
        <div className="inp">
          <form onSubmit={handlesubmit}>
            <input type="text" placeholder='enter movie name' ref={movieval} />
            <button><SearchIcon /></button>
          </form>
        </div>

      </div>
      <h1>where quality & clarity matters</h1>
        <h5>watch movies in HD,exclusively avaliable on MOVIEROOM <br /> devoloped by only PC and TV'S</h5>
      <div className="body">
       
        {
          movie.map((elem) => {
            let { Poster, Title, Type, Year } = elem;
            return(
              <div className="post">
                <div className="img">
                  <img src={Poster} alt="" />
                </div>
                <h3>{Title}</h3>
                <h5>{Year} <span><a href="">Download</a></span></h5>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Movie