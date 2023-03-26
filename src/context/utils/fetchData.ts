import axios from 'axios'
import type { FeaturedMoviesApiResponse, PopularMoviesApiResponse, UserUploadedMovie } from '../../types/MoviesApiResponse'
const fetchUrlApi = 'https://challenge-liteflix-api-production.up.railway.app/api/movies'
const fetchUrlTheMovieDbApi = 'https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20'
const fetchUrlPopularMoviesTheMovieDbApi = 'https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20'
export const fetchDataFromApi = async (): Promise<UserUploadedMovie[] | undefined> => {
  try {
    const response = await axios.get(fetchUrlApi)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const fetchDataFromTheMovieDBApi = async (): Promise<FeaturedMoviesApiResponse | undefined> => {
  try {
    const response = await axios.get(fetchUrlTheMovieDbApi)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const fetchPopularMoviesFromTheMovieDBApi = async (): Promise<PopularMoviesApiResponse | undefined> => {
  try {
    const response = await axios.get(fetchUrlPopularMoviesTheMovieDbApi)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
