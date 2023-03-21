import { useContext } from 'react'
import NavBar from '../ui/navbar/NavBar'
import './home-liteflix.css'
import { MovieContext } from '../../context/Context'
import ButtonBorderAnimated from '../ui/buttons/BorderedAnimated/AnimatedButtonBorders'
import AnimatedWidthButton from '../ui/buttons/WidthAnimatedButton/AnimatedWidthButton'
import MovieCard from '../ui/cards/MovieCard/MovieCard'

// This component renders the home page of Liteflix
const HomeLiteFlix = (): JSX.Element => {
  const { featuredMovie, popularMovies } = useContext(MovieContext)

  return (
    <div>
      {/* Renders home page only when there is a featured movie */}
      {((featuredMovie?.id) != null) &&
        <div className="home-liteflix-main-container">
          <NavBar/> {/* Renders navigation bar component */}
          <div className="home-background-container">
            <div className="home-liteflix-background" style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path})`
            }}/>
          </div>
          <div className="home-liteflix-content">
            <div className="home-content-left">
              <div className="home-subtitle-title-container">
                <div className="subtitle-container-animated">
                  <span className="subtitle-thin">ORIGINAL DE</span>
                  <span className="subtitle-bold"> LITEFLIX</span>
                </div>
                <div className="title-container-w-padding">
                        <span className="movie-title-animated">
                          {featuredMovie.original_title}
                        </span>
                </div>
              </div>
              <div className="home-buttons-container">
                <AnimatedWidthButton/> {/* Renders an animated button */}
                <ButtonBorderAnimated/> {/* Renders an animated button */}
              </div>
            </div>
            <div className="home-content-right">
              <div className="home-dropdown-movies-select">
                <div className="home-movie-select-text"></div>
                <div className="home-movie-select-dropdown"></div>
              </div>
              {/* Renders a list of popular movies as cards */}
              {popularMovies?.map((movie) => {
                return (
                  <MovieCard
                    image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    title={movie.original_title}
                    stars={movie.vote_average}
                    year={movie.release_date}
                    key={movie.backdrop_path}
                  />
                )
              })}
            </div>
          </div>
        </div>}
    </div>
  )
}

export default HomeLiteFlix
