import React, {useState} from 'react'
import './addmoviepopup.css'
import {TfiClose} from 'react-icons/tfi'
import useHandlePostMovie from './utils/handlePostMovie'
import RenderHeader from "./partials/RenderHeader";
import RenderDropzone from "./partials/RenderDropzone";
import RenderInputAndAddMovieButton from "./partials/RenderInputAndAddMovieButton";

interface AddMoviePopupProps {
  setOpenAddMoviePopup: (isOpen: boolean) => void
}

/**

 Interface for props passed to AddMoviePopup component.
 @interface AddMoviePopupProps
 @property {(isOpen: boolean) => void} setOpenAddMoviePopup - A function to toggle the visibility of AddMoviePopup.
 */
/**

 AddMoviePopup component renders a popup for adding a movie with a file upload feature.
 @function
 @param {AddMoviePopupProps} props - Props object that contains setOpenAddMoviePopup function.
 @returns {JSX.Element} - Returns JSX markup for AddMoviePopup component.
 */
const AddMoviePopup = ({setOpenAddMoviePopup}: AddMoviePopupProps): JSX.Element => {

  /**

   React state hook to manage closing of the popup.
   @name isClosing
   @type {boolean}
   @function
   @default false
   */
  const [isClosing, setIsClosing] = useState(false)
  /**

   Custom hook to handle adding of a movie using file upload feature.
   @name useHandlePostMovie
   @function
   @param {Object} onSubmit - A function to handle submitting of a file for movie upload.
   @returns {Object} - Returns object with various functions and states related to movie upload.
   */
  const {
    fileData,
    handleDrop,
    handleSubmit,
    setMovieName,
    movieName,
    isLoading,
    uploadProgress,
    errorAddMovie,
    handleRetryUpload,
    successAddMovie
  } = useHandlePostMovie({
    onSubmit: (file) => {
      return new Promise<void>((resolve, reject) => {
        console.log('File loaded:', file)
        resolve()
      })
    },
  })
  /**

   Function to handle closing of the popup when user clicks on the close button.
   @name handleCloseButtonClick
   @function
   @returns {void}
   */
  const handleCloseButtonClick = (): void => {
    setIsClosing(true)
    setTimeout(() => {
      setOpenAddMoviePopup(false)
    }, 300)
  }
  /**

   Function to handle closing of the popup when user clicks outside the popup area.
   @name handleClickOutside
   @function
   @param {React.MouseEvent<HTMLDivElement, MouseEvent>} e - The click event that occurred.
   @returns {void}
   */
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setIsClosing(true)
      setTimeout(() => {
        setOpenAddMoviePopup(false)
      }, 300)
    }
  }



  return (
    <div className={`add-popup-container-main ${isClosing ? 'pop-up-background-fade' : 'pop-up-background-appear'}`}
         onClick={handleClickOutside}>
      <div className={`add-popup-subcontainer ${isClosing ? 'pop-up-fall-down' : 'pop-up-rise'}`}>
        <RenderHeader
          handleCloseButtonClick={handleCloseButtonClick}
        />
        <div className='add-popup-close-icon'>
          <TfiClose className='navbar-dropdown-close-icon' onClick={handleCloseButtonClick}/>
        </div>
        <div className='add-popup-title'>{
          successAddMovie ? <div className='show-logo-on-desktop-size'>
            <span className='navbar-logo-title-bold'>lite</span>
            <span className='navbar-logo-title-thin'>Flix</span>
          </div> : 'Agregar película'
        }</div>
        <RenderDropzone
          errorAddMovie={errorAddMovie}
          handleRetryUpload={handleRetryUpload}
          handleDrop={handleDrop}
          successAddMovie={successAddMovie}
          uploadProgress={uploadProgress}
          isLoading={isLoading}
          fileData={fileData}
          movieName={movieName}
        />
        <RenderInputAndAddMovieButton
          successAddMovie={successAddMovie}
          handleSubmit={handleSubmit}
          setMovieName={setMovieName}
          movieName={movieName}
          setOpenAddMoviePopup={setOpenAddMoviePopup}
          handleCloseButtonClick={handleCloseButtonClick}
          fileData={fileData}
        />
      </div>
    </div>
  )
}

export default AddMoviePopup
