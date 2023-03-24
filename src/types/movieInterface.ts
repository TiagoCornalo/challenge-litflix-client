export interface MovieContextProps {
  popularMovies?: Movie[] | undefined
  userMovies?: UserMovie[] | undefined
  featuredMovie?: Movie | undefined
  setUserMovies?: (movies: UserMovie[]) => void
  showUserMovies?: boolean
  setShowUserMovies?: (show: boolean) => void
  fetchUserMovies?: () => void
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

export interface UserMovie {
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

