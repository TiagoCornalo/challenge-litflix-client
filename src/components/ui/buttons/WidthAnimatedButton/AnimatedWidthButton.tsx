import './animatedwidth.css'
import { FiPlay } from 'react-icons/fi'
const AnimatedWidthButton = (): JSX.Element => {
  return (
        <button className="expand-button">
            <span className="expand-button-title"><FiPlay style={{ color: 'white', marginRight: '14px' }}/> REPRODUCIR</span>
        </button>
  )
}

export default AnimatedWidthButton
