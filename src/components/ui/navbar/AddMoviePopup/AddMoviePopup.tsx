import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import './addmoviepopup.css'
import { TfiClose } from 'react-icons/tfi'
import useHandlePostMovie from './utils/handlePostMovie'
import Clip from '../../../../assets/svg/clip.svg'
import ProgressBar from "./ProgressBar/ProgressBar";
interface AddMoviePopupProps {
  setOpenAddMoviePopup: (isOpen: boolean) => void
}

const AddMoviePopup = ({ setOpenAddMoviePopup }: AddMoviePopupProps): JSX.Element => {
  const [isClosing, setIsClosing] = useState(false)

  const {
    fileData,
    handleDrop,
    handleSubmit,
    setMovieName,
    movieName,
    isLoading,
    uploadProgress,
    errorAddMovie,
    handleRetryUpload ,
    successAddMovie
  } = useHandlePostMovie({
    onSubmit: (file) => {
      return new Promise<void>((resolve, reject) => {
        console.log('File loaded:', file)
        resolve()
      })
    },
  })

  const handleCloseButtonClick = (): void => {
    setIsClosing(true)
    setTimeout(() => {
      setOpenAddMoviePopup(false)
    }, 300)
  }

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setIsClosing(true)
      setTimeout(() => {
        setOpenAddMoviePopup(false)
      }, 300)
    }
  }

  const renderProgressIndicator = () => {
    if (errorAddMovie || successAddMovie) {
      return <span className='progress-loading-text'>{errorAddMovie}</span>;
    } else {
      return (
        <>
          <span className='progress-loading-text'>Cargando</span>
          <span className='progress-percentage-text'>{uploadProgress}%</span>
        </>
      );
    }
  };

  const renderProgressBar = () => {
    if (!successAddMovie) {
      return <ProgressBar progress={uploadProgress} errorAddMovie={errorAddMovie} />;
    } else {
      return (
        <div className='finished-upload-movie-container'>
          <span className='upload-congrats-text'>¡Felicitaciones!</span>
          <span className='upload-description'>{movieName} fue correctamente subida.</span>
        </div>
      );
    }
  };

  const renderDropzone = () => {
    if(!isLoading && !fileData) {
      return (
        <div className='popup-file-dropzone-container'>
          <Dropzone onDrop={handleDrop}>
            {({getRootProps, getInputProps}) => (
              <div {...getRootProps()} className='popup-file-dropzone'>
                <input {...getInputProps()} />
                <img src={Clip} alt="clip icon file"/>
                <p className='drop-file-text'>Agregá un archivo o arrastralo y soltalo aquí</p>
              </div>
            )}
          </Dropzone>
        </div>
      )
    } else {
      return (
        <div className='popup-file-progress-container'>
          <div className='progress-indicator-container'>
            {renderProgressIndicator()}
          </div>
          {renderProgressBar()}
          {errorAddMovie ?
            <div className="retry-button-container">
              <span className='retry-loading-text' onClick={handleRetryUpload}>
                Reintentar
              </span>
            </div> :
            null
          }
        </div>
      )
    }
  }


  return (
    <div className={`add-popup-container-main ${isClosing ? 'pop-up-background-fade' : 'pop-up-background-appear'}`} onClick={handleClickOutside}>
      <div className={`add-popup-subcontainer ${isClosing ? 'pop-up-fall-down' : 'pop-up-rise'}`}>
        <div className='add-popup-close-icon'>
          <TfiClose className='navbar-dropdown-close-icon' onClick={handleCloseButtonClick} />
        </div>
        <div className='add-popup-title'>{
          successAddMovie ? <>
            <span className='navbar-logo-title-bold'>lite</span>
            <span className='navbar-logo-title-thin'>Flix</span>
          </>: 'Agregar película'
        }</div>
        {renderDropzone()}
        {!successAddMovie ?
          <>
          <div className='add-movie-input-container'>
          <input type="text" placeholder="título" className="add-movie-input" value={movieName}
                 onChange={(e) => setMovieName(e.target.value)}/>
        </div>
          <div className='add-movie-button-container'>
          <button className='add-movie-button' onClick={handleSubmit} style={{
          background: movieName !== '' && fileData ? '#fff' : 'rgba(255, 255, 255, 0.5)',
        }}>agregar</button>
          </div>
          </>
          :
          <div className='go-to-home-button-container'>
          <button className='add-movie-button' onClick={()=>setOpenAddMoviePopup(false)} style={{background: '#fff'}}>ir al home</button>
          </div>
        }
      </div>
    </div>
  )
}

export default AddMoviePopup
