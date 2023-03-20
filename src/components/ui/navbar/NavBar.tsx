import { useState } from 'react'
import './navbar.css'
import { BsPlusLg, BsBell } from 'react-icons/bs'
import { HiOutlineMenuAlt3, HiOutlineMenuAlt2 } from 'react-icons/hi'
import NavbarDropdown from './dropdown/NavbarDropdown'
import AvatarPicture from '../../../assets/avatar/avatar.jpeg'
import AddMoviePopup from './AddMoviePopup/AddMoviePopup'
const NavBar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [openAddMoviePopup, setOpenAddMoviePopup] = useState(false)
  const handleMenuClick = () => {
    setIsMenuOpen((isOpen) => !isOpen)
    setIsClosing(false)
  }

  return (
        <div className='navbar-container'>
            <div className="navbar-menu-responsive">
                <HiOutlineMenuAlt2 className={'navbar-menu-icon-responsive'} onClick={handleMenuClick} style={{ display: isMenuOpen ? 'none' : '' }}/>
            </div>
            <div className='navbar-left-container'>
            <div className="navbar-logo">
                <span className={`navbar-logo-title-bold ${isMenuOpen ? 'padding-left-logo' : ''}`}>Lite</span><span className={'navbar-logo-title-thin'}>Flix</span>
            </div>
                <div className='navbar-add-movie'>
                    <BsPlusLg className={'navbar-add-movie-plus'} />
                    <span className={'navbar-add-movie-title-bold'} onClick={()=>setOpenAddMoviePopup(true)}>
                    AGREGAR PELÍCULA
                </span>
                </div>
            </div>
            <div className='navbar-right-container'>
                <HiOutlineMenuAlt3 className={'navbar-menu-icon'} onClick={handleMenuClick} style={{ display: isMenuOpen ? 'none' : '' }}/>
                <BsBell className={'navbar-bell-icon'} style={{ display: isMenuOpen ? 'none' : '' }}/>
                <div className={'navbar-avatar'} style={{ display: isMenuOpen ? 'none' : '' }}>
                    <img src={AvatarPicture} alt=""/>
                </div>
            </div>
            {isMenuOpen && (
                <NavbarDropdown
                    setIsMenuOpen={setIsMenuOpen}
                    isClosing={isClosing}
                    setIsClosing={setIsClosing}
                />
            )}
          {
            openAddMoviePopup && (
              <AddMoviePopup setOpenAddMoviePopup={setOpenAddMoviePopup} />
            )
          }
        </div>
  )
}

export default NavBar
