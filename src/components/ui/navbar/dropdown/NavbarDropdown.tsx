import './navbardropdown.css'
import { TfiClose } from 'react-icons/tfi'
import { BsPlusLg, BsBell } from 'react-icons/bs'
import AvatarPicture from '../../../../assets/avatar/avatar.jpeg'

interface NavbarDropdownProps {
  setIsMenuOpen: (isOpen: boolean) => void
  isClosing: boolean
  setIsClosing: (isClosing: boolean) => void
  setOpenAddMoviePopup: (isOpen: boolean) => void
}

const NavbarDropdown = ({
  setIsMenuOpen,
  isClosing,
  setIsClosing,
  setOpenAddMoviePopup
}: NavbarDropdownProps): JSX.Element => {
  const handleMenuClose = (): void => {
    setIsClosing(true)
    setTimeout(() => {
      setIsMenuOpen(false)
    }, 400) // la animación dura 0.4 segundos, espera a que termine para cerrar el menú, esto para no generar un bug visual
  }

  return (
        <div
            className={`navbar-dropdown ${
                isClosing ? 'to-left-opacity-animation' : 'from-left-animation'
            }`}>
            <div className="navbar-dropdown-top-container">
                <button className='navbar-dropdown-close-button' onClick={handleMenuClose}>
                    <TfiClose className='navbar-dropdown-close-icon' />
                </button>
                <div className="navbar-dropdown-avatar-bell-container">
                    <BsBell className={'navbar-dropdown-bell-icon'} />
                    <div className={'navbar-avatar'}>
                        <img src={AvatarPicture} alt=""/>
                    </div>
                </div>
            </div>
            <div className="nav-dropdown-options-container">
            <span>INICIO</span>
            <span>SERIES</span>
            <span>PELÍCULAS</span>
            <span>AGREGADAS RECIENTEMENTE</span>
            <span>POPULARES</span>
            <span>MIS PELÍCULAS</span>
            <span>MI LISTA</span>
            <span className="navbar-dropdown-add-movie" onClick={()=>setOpenAddMoviePopup(true)}>
                <BsPlusLg/>
                <span>
                    AGREGAR PELÍCULA
                </span>
            </span>
                <span>
                    CERRAR SESIÓN
                </span>
            </div>
        </div>
  )
}

export default NavbarDropdown
