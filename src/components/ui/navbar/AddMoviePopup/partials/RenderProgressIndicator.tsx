import '../addmoviepopup.css'

interface RenderProgressIndicatorProps {
  errorAddMovie: string
  successAddMovie: boolean
  uploadProgress: number
}

/**

 Function to render the progress indicator.
 @name renderProgressIndicator
 @function
 @returns {JSX.Element} - Returns JSX markup for progress indicator.
 */
const renderProgressIndicator = ({errorAddMovie, successAddMovie, uploadProgress}:RenderProgressIndicatorProps) => {
  if (errorAddMovie || successAddMovie) {
    return <span className='progress-loading-text'>{errorAddMovie}</span>;
  } else {
    return (
      <>
        <span className='progress-loading-text'>Cargando</span>
        <span className='progress-percentage-text'>{uploadProgress}%</span>
      </>
    );
  }
};

export default renderProgressIndicator
