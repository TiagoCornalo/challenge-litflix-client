import './liteflixlogo.css'

/**

 Interface for the props of LiteFlixLogo component.
 @typedef {Object} LiteFlixLogoProps
 @property {string} [display] - CSS class for controlling the display of the component.
 @property {string} [animation] - CSS animation for the component.
 @property {string} [padding] - CSS class for controlling the padding of the component.
 */
interface LiteFlixLogoProps {
  display?: string
  animation?: string
  padding?: string

}

/**

 Component for rendering the LiteFlix logo.
 @function
 @param {LiteFlixLogoProps} props - Component props.
 @returns {JSX.Element} - Rendered component.
 */
const LiteFlixLogo = ({display, animation, padding}: LiteFlixLogoProps): JSX.Element => {
  return (
    <div
      className={`lite-flix-logo-container ${padding ? padding : ''} ${display ? display : ''}`}
      style={{
        animation: animation ? animation : ''
      }}
    >
      <span className={'lite-flix-title-bold'}>lite</span>
      <span className={'lite-flix-title-thin'}>Flix</span>
    </div>
  )
}

export default LiteFlixLogo;
