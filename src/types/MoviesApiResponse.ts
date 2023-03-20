import { type Movie } from './movieInterface'

export interface FeaturedMoviesApiResponse {
  dates: {
    maximum: string
    minimum: string
  }
  page: number
  results: Movie[]
}

export interface PopularMoviesApiResponse {
  page: number
  results: Movie[]
}
