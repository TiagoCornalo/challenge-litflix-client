import {useState} from "react";
import './addmoviepopup.css'
import { TfiClose } from 'react-icons/tfi'
interface AddMoviePopupProps {
  setOpenAddMoviePopup: (isOpen: boolean) => void
}

const AddMoviePopup = ({setOpenAddMoviePopup}:AddMoviePopupProps): JSX.Element => {
  const [isClosing, setIsClosing] = useState(false)


  const handleCloseButtonClick = (): void => {
    setIsClosing(true)
    setTimeout(() => {
      setOpenAddMoviePopup(false)
    }, 300)
  }

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(e.target === e.currentTarget) {
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
          <TfiClose className='navbar-dropdown-close-icon' onClick={handleCloseButtonClick}/>
        </div>
        <div className='add-popup-title'>agregar película</div>
      </div>
    </div>
  )
}

export default AddMoviePopup
