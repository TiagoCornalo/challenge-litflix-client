import {HiOutlineMenuAlt2} from "react-icons/hi";
import AvatarPicture from "../../../../../assets/avatar/avatar.jpeg";
import '../addmoviepopup.css'


interface RenderHeaderProps {
  handleCloseButtonClick: () => void;
}
/**

 Renders the popup header but when its in responsive mode.
 @function
 @returns {JSX.Element} A div with the header elements
 */
const RenderHeader = ({handleCloseButtonClick}:RenderHeaderProps) => {
  return(
    <div className="add-popup-header">
      <div className="add-popup-header-menu-icon">
        <HiOutlineMenuAlt2 className={'navbar-menu-icon-responsive'} onClick={handleCloseButtonClick} style={{animation:'none'}}/>
      </div>
      <div className="navbar-logo" style={{animation:'none'}}>
        <span className='navbar-logo-title-bold'>lite</span>
        <span className='navbar-logo-title-thin'>Flix</span>
      </div>
      <div className='navbar-avatar' style={{animation:'none'}}>
        <img src={AvatarPicture} alt=""/>
      </div>
    </div>
  )
}

export default RenderHeader;
