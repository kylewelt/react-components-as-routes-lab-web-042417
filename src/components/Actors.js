import React from 'react'
import { actors } from '../data'

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={'actor_' + index} className='actor'>{actor.name}
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={'movie_' + index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Actors
