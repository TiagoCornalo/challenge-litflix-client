import "./movieselector.css";
import { useContext, useState } from "react";
import { MovieContext } from "../../../context/Context";
import { HiOutlineChevronDown } from "react-icons/hi";
import { BsCheck2 } from "react-icons/bs";

/**

 Component that renders a dropdown menu for selecting between popular movies or user's movies
 @returns JSX.Element
 */
const MovieSelector = (): JSX.Element => {
  const { showUserMovies, setShowUserMovies } = useContext(MovieContext);
  const [selectedMovieType, setSelectedMovieType] = useState<string>(
    showUserMovies ? "MIS PELÍCULAS" : "POPULARES"
  );
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  /**

   Function that handles the closing of the dropdown menu
   */
  const handleMenuClose = (): void => {
    setIsClosing(true);
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 400);
  };
  /**

   Function that handles the opening of the dropdown menu
   */
  const handleMenuOpen = (): void => {
    setIsDropdownOpen(true);
    setIsClosing(false);
  };
  /**

   Function that handles the selection of the movie type
   @param movieType - the type of movie to select
   */
  const handleMovieTypeSelection = (movieType: string): void => {
    setSelectedMovieType(movieType);
    setShowUserMovies?.(movieType === "MIS PELÍCULAS");
    setIsDropdownOpen(false);
  };
  /**

   Function that renders a movie type with a checkmark icon if it is selected
   @param movieType - the type of movie to render
   @returns JSX.Element
   */
  const renderMovieType = (movieType: string): JSX.Element => {
    const isSelected = selectedMovieType === movieType;
    const movieTypeClass = isSelected
      ? "active-select-movie-item"
      : "unselected-select-movie-item";
    return (
      <div
        className="dropdown-menu-item"
        onClick={() => handleMovieTypeSelection(movieType)}
      >
        <span className={movieTypeClass}>{movieType}</span>
        {isSelected && <BsCheck2 className="check-icon" />}
      </div>
  );
  };

  return (
    <div className="movie-selector">
      <div
        className="selected-movie-type"
        onClick={!isDropdownOpen ? handleMenuOpen : handleMenuClose}
      >
        <span className="movie-selector-ver-text">VER:</span>
        <span className="selected-movie-type-text">{selectedMovieType}</span>
        <HiOutlineChevronDown className="dropdown-icon" />
        {isDropdownOpen && (
          <div
            className={`${selectedMovieType === "POPULARES" ? "dropdown-menu" : "dropdown-menu-my-movies" } ${ isClosing ? "rise-opacity-animation" : "fall-down-opacity-animation"}`}
            aria-expanded={isDropdownOpen}
          >
            {renderMovieType("POPULARES")}
            {renderMovieType("MIS PELÍCULAS")}
            <div className="dropdown-triangle" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieSelector;
