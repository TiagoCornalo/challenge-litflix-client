export interface MovieContextProps {
  popularMovies: Movie[] | undefined
  userMovies: Movie[] | undefined
  featuredMovie: Movie | undefined

}

export interface Movie {
  id?: string
  title: string
  backdrop_path: string
  release_date?: string
  overview?: string
  vote_average?: number
  vote_count?: number
  popularity?: number
  original_language?: string
  original_title: string
  video?: boolean
}
