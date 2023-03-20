import './addmoviepopup.css'

interface AddMoviePopupProps {
  setOpenAddMoviePopup: (isOpen: boolean) => void
}

const AddMoviePopup = ({setOpenAddMoviePopup}:AddMoviePopupProps): JSX.Element => {

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(e.target === e.currentTarget) {
      setOpenAddMoviePopup(false)
    }
  }

  return (
    <div className='add-popup-container-main' onClick={handleClickOutside}>
      <div className='add-popup-subcontainer'>
        <div className='add-popup-title'></div>
      </div>
    </div>
  )
}

export default AddMoviePopup
