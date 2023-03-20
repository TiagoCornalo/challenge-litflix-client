import React, { useState, useEffect } from 'react'
import { MovieContext } from './Context'
import { type Movie } from '../types/movieInterface'
import { fetchDataFromTheMovieDBApi, fetchPopularMoviesFromTheMovieDBApi } from './utils/fetchData'

interface MovieProviderProps {
  children: React.ReactNode
}

const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState<Movie[] | undefined>([])
  const [userMovies, setUserMovies] = useState<Movie[]>([])
  const [featuredMovie, setFeaturedMovie] = useState<Movie | undefined>({
    id: '',
    title: '',
    backdrop_path: '',
    release_date: '',
    overview: '',
    vote_average: 0,
    vote_count: 0,
    popularity: 0,
    original_language: '',
    original_title: '',
    video: false
  })

  const addMovie = (movie: Movie): void => {
    setUserMovies([...userMovies, movie])
  }

  useEffect(() => {
    const getFeaturedMovie = async (): Promise<void> => {
      fetchDataFromTheMovieDBApi()
        .then((data) => {
          const randomIndex = Math.floor(Math.random() * (data?.results?.length ?? 0))
          const randomMovie = data?.results?.[randomIndex]
          setFeaturedMovie(randomMovie)
        }).catch((error) => {
          console.log(error)
        })
    }
    void getFeaturedMovie()
  }, [])

  /* useEffect(() => {
    fetchDataFromApi().then((data) => {
      setUserMovies(data)
    }).catch((error) => {
      console.log(error)
    })
  }, []) */

  useEffect(() => {
    fetchPopularMoviesFromTheMovieDBApi().then((data) => {
      const results = data?.results
      const filterOnlyFourMovies = results?.slice(0, 4)
      setPopularMovies(filterOnlyFourMovies)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
        <MovieContext.Provider value={{ popularMovies, userMovies, featuredMovie, addMovie }}>
            {children}
        </MovieContext.Provider>
  )
}

export default MovieProvider
