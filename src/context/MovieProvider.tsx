import React, { useState, useEffect } from 'react';
import { MovieContext } from './Context';
import { Movie } from '../types/movieInterface';
import { FeaturedMoviesApiResponse, PopularMoviesApiResponse} from "../types/MoviesApiResponse";
import { fetchDataFromTheMovieDBApi, fetchPopularMoviesFromTheMovieDBApi } from './utils/fetchData';

interface MovieProviderProps {
  children: React.ReactNode;
}

/**
 * @typedef {Object} MovieContextValue
 * @property {Movie[] | undefined} popularMovies - List of popular movies.
 * @property {Movie[]} userMovies - List of user movies.
 * @property {Movie | undefined} featuredMovie - Featured movie of the day.
 */

/**
 * @typedef {Object} MovieProviderProps
 * @property {React.ReactNode} children - The child elements.
 */

/**
 * A context provider for movies.
 *
 * @param {MovieProviderProps} props - The component props.
 * @returns {JSX.Element} The context provider component.
 */

const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState<Movie[] | undefined>([]);
  const [userMovies, setUserMovies] = useState<Movie[]>([]);
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
  });

  useEffect(() => {
    /**
     * Fetch the featured movies of the day and randomly select one.
     */
    const fetchFeaturedMovie = async (): Promise<void> => {
      try {
        const data: FeaturedMoviesApiResponse | undefined = await fetchDataFromTheMovieDBApi();
        const randomIndex = Math.floor(Math.random() * (data?.results?.length ?? 0));
        const randomMovie = data?.results?.[randomIndex];
        setFeaturedMovie(randomMovie);
      } catch (error) {
        console.error(error);
      }
    };
    void fetchFeaturedMovie();
  }, []);

  useEffect(() => {
    /**
     * Fetch the list of popular movies.
     */
    const fetchPopularMovies = async (): Promise<void> => {
      try {
        const data: PopularMoviesApiResponse | undefined = await fetchPopularMoviesFromTheMovieDBApi();
        const results = data?.results;
        const filterOnlyFourMovies = results?.slice(0, 4) || [];
        setPopularMovies(filterOnlyFourMovies);
      } catch (error) {
        console.error(error);
      }
    };
    void fetchPopularMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ popularMovies, userMovies, featuredMovie}}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
