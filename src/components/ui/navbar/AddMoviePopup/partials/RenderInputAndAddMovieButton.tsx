import '../addmoviepopup.css'

interface InputAndMovieButtonProps {
  successAddMovie: boolean
  setMovieName: (movieName: string) => void
  movieName: string
  handleCloseButtonClick: () => void
  handleSubmit: () => void
  setOpenAddMoviePopup: (isOpen: boolean) => void
  fileData: File | null

}

/**

 Renders an input and a button for adding a movie, or a button for going back to the home page.
 @function
 @returns {JSX.Element} An input and button components or a go-to-home-button-container component
 */
const RenderInputAndAddMovieButton = ({
                                        successAddMovie,
                                        setMovieName,
                                        movieName,
                                        handleCloseButtonClick,
                                        handleSubmit,
                                        setOpenAddMoviePopup,
                                        fileData }: InputAndMovieButtonProps) => {
  if (!successAddMovie) {
    return (
      <>
        <div className='add-movie-input-container'>
          <input type="text" placeholder="título" className="add-movie-input" value={movieName}
                 onChange={(e) => setMovieName(e.target.value)}/>
        </div>
        <div className='add-movie-button-container'>
          {movieName && fileData ?
            <button className='add-movie-button' onClick={handleSubmit} style={{
              background: movieName !== '' && fileData ? '#fff' : 'rgba(255, 255, 255, 0.5)',
            }}>agregar
            </button> :
            //disabled button if the user didn't upload a file, and a movie name
            <button className='add-movie-button'  style={{
              background: 'rgba(255, 255, 255, 0.5)',
            }}>agregar
            </button>
          }
        </div>
        <div className='return-home-button-container'>
          <button className='return-home-button' onClick={handleCloseButtonClick}>
            salir
          </button>
        </div>
      </>
    )
  } else {
    return (
      <div className='go-to-home-button-container'>
        <button className='add-movie-button' onClick={() => setOpenAddMoviePopup(false)}
                style={{background: '#fff'}}>ir al home
        </button>
      </div>
    )
  }
}

export default RenderInputAndAddMovieButton
