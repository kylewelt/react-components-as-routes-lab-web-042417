import React from 'react'
import { movies } from '../data'

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={'movie_' + index} className='movie'><strong>{movie.title}</strong>
          <span> {movie.time} minutes</span>
          <span> {movie.metascore} metascore</span>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={'genre_' + index}>
                {genre}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Movies
