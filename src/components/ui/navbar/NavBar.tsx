/**
 * Component for rendering a navbar.
 * @component
 */
import { useState } from 'react';
import './navbar.css';
import { BsPlusLg, BsBell } from 'react-icons/bs';
import { HiOutlineMenuAlt3, HiOutlineMenuAlt2 } from 'react-icons/hi';
import NavbarDropdown from './dropdown/NavbarDropdown';
import AvatarPicture from '../../../assets/avatar/avatar.jpeg';
import AddMoviePopup from './AddMoviePopup/AddMoviePopup';
import LiteFlixLogo from "./logo/LiteFlixLogo";

/**
 * @typedef {Object} NavBarProps
 * @property {} - No props required.
 */

/**
 * Component for rendering a navbar.
 * @function
 * @returns {JSX.Element} - Rendered component.
 */
const NavBar = () => {
  /**
   * Controls whether the menu is open or closed.
   * @type {[boolean, function]}
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Controls whether the dropdown is closing or not.
   * @type {[boolean, function]}
   */
  const [isClosing, setIsClosing] = useState(false);

  /**
   * Controls whether the "Add Movie" popup is open or closed.
   * @type {[boolean, function]}
   */
  const [openAddMoviePopup, setOpenAddMoviePopup] = useState(false);

  /**
   * Toggles the menu and resets the dropdown closing state.
   * @function
   * @returns {void}
   */
  const handleMenuClick = () => {
    setIsMenuOpen((isOpen) => !isOpen);
    setIsClosing(false);
  };

  /**
   * Closes the menu and the "Add Movie" popup.
   * @function
   * @returns {void}
   */
  const closeMenuAndPopup = () => {
    setIsMenuOpen(false);
    setOpenAddMoviePopup(false);
  };

  /**
   * Opens the "Add Movie" popup and closes the menu.
   * @function
   * @returns {void}
   */
  const openAddMoviePopupAndCloseMenu = () => {
    setOpenAddMoviePopup(true);
    closeMenuAndPopup();
  };

  return (
        <div className='navbar-container'>
            <div className="navbar-menu-responsive">
                <HiOutlineMenuAlt2
                  className={'navbar-menu-icon-responsive'}
                  onClick={handleMenuClick}
                />
            </div>
            <div className='navbar-left-container'>
                <LiteFlixLogo
                  padding={'lite-flix-logo-container-padding'}
                  display={isMenuOpen ? 'display-none-responsive' : ''}
                />
                <div className='navbar-add-movie'>
                    <BsPlusLg className={'navbar-add-movie-plus'} />
                    <span className={'navbar-add-movie-title-bold'} onClick={()=>setOpenAddMoviePopup(true)}>
                    agregar película
                </span>
                </div>
            </div>
            <div className='navbar-right-container'>
                <HiOutlineMenuAlt3
                  className={'navbar-menu-icon'}
                  onClick={handleMenuClick}
                  style={{ display: isMenuOpen ? 'none' : '' }}
                />
                <BsBell
                  className={'navbar-bell-icon'}
                  style={{ display: isMenuOpen ? 'none' : '' }}
                />
                <div className={'navbar-avatar'} style={{ display: isMenuOpen ? 'none' : '' }}>
                    <img src={AvatarPicture} alt=""/>
                </div>
            </div>
            {isMenuOpen && (
                <NavbarDropdown
                    setIsMenuOpen={setIsMenuOpen}
                    isClosing={isClosing}
                    setIsClosing={setIsClosing}
                    setOpenAddMoviePopup={setOpenAddMoviePopup}
                />
            )}
          {
            openAddMoviePopup && (
              <AddMoviePopup setOpenAddMoviePopup={setOpenAddMoviePopup} setIsMenuOpen={setIsMenuOpen} />
            )
          }
        </div>
  )
}

export default NavBar
