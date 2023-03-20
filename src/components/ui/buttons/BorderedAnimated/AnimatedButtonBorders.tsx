import './animatedborder.css'
import { BsPlusLg } from 'react-icons/bs'

const ButtonBorderAnimated = (): JSX.Element => {
  return (
        <button className="draw-button">
            <span className="draw-button__title"><BsPlusLg style={{ color: 'white', marginRight: '14px' }}/>MI LISTA</span>
            <span className="draw-button__icon draw-button__icon-top"></span>
            <span className="draw-button__icon draw-button__icon-right"></span>
            <span className="draw-button__icon draw-button__icon-bottom"></span>
            <span className="draw-button__icon draw-button__icon-left"></span>
        </button>
  )
}

export default ButtonBorderAnimated
