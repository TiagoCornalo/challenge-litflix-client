import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import './addmoviepopup.css'
import { TfiClose } from 'react-icons/tfi'
import useHandlePostMovie from './utils/handlePostMovie'
import Clip from '../../../../assets/svg/clip.svg'
interface AddMoviePopupProps {
  setOpenAddMoviePopup: (isOpen: boolean) => void
}

const AddMoviePopup = ({ setOpenAddMoviePopup }: AddMoviePopupProps): JSX.Element => {
  const [isClosing, setIsClosing] = useState(false)
  const { fileData, handleDrop, handleSubmit, setMovieName, movieName } = useHandlePostMovie({
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

  return (
    <div className={`add-popup-container-main ${isClosing ? 'pop-up-background-fade' : 'pop-up-background-appear'}`} onClick={handleClickOutside}>
      <div className={`add-popup-subcontainer ${isClosing ? 'pop-up-fall-down' : 'pop-up-rise'}`}>
        <div className='add-popup-close-icon'>
          <TfiClose className='navbar-dropdown-close-icon' onClick={handleCloseButtonClick} />
        </div>
        <div className='add-popup-title'>agregar película</div>
        <div className='popup-file-dropzone-container'>
          <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className='popup-file-dropzone'>
                <input {...getInputProps()} />
                <img src={Clip} alt="clip icon file"/>
                {!fileData ?
                  <p className='drop-file-text'>Arrastra y suelta un archivo aquí o haz clic para seleccionarlo</p>
                  :
                  <p className='drop-file-text'>{fileData.name}</p>
                }
              </div>
            )}
          </Dropzone>
        </div>
        <div className='add-movie-input-container'>
          <input type="text" placeholder="título" className="add-movie-input" value={movieName} onChange={(e)=>setMovieName(e.target.value)} />
        </div>
        <div className='add-movie-button-container'>
          <button className='add-movie-button' onClick={handleSubmit}>agregar</button>
        </div>
      </div>
    </div>
  )
}

export default AddMoviePopup
