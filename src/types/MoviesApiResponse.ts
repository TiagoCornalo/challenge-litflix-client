import  { Movie } from './movieInterface'

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

export interface UserUploadedMovie {
  _id: string;
  image_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  original_language: string;
  original_title: string;
  video: boolean;
  __v: number;
}

