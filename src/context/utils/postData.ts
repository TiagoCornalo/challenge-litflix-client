import axios from 'axios'
import { type Movie } from '../../types/movieInterface'
const postUrl = 'https://jsonplaceholder.typicode.com/posts'

export const postData = async (data: Movie): Promise<Movie> => {
  const response = await axios.post(postUrl, data)
  return response.data
}
