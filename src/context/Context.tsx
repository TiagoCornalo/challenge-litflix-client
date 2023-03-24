import { createContext } from 'react'
import { type MovieContextProps } from '../types/movieInterface'
export const MovieContext = createContext<MovieContextProps>({
  popularMovies: [],
  userMovies: [],
  featuredMovie: {
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
  },
  showUserMovies: false,
  setShowUserMovies: () => {},
  fetchUserMovies: () => {}
})
