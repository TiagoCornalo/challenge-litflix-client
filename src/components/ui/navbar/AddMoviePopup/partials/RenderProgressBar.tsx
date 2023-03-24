import ProgressBar from "../ProgressBar/ProgressBar";
import '../addmoviepopup.css'

interface RenderProgressBarProps {
  successAddMovie: boolean
  uploadProgress: number
  errorAddMovie: string
  movieName: string
}

/**

 Renders a progress bar component based on the success status of adding a movie.
 @function
 @returns {JSX.Element} A ProgressBar component or a finished-upload-movie-container component
 */
const RenderProgressBar = ({successAddMovie, uploadProgress, errorAddMovie, movieName}:RenderProgressBarProps) => {
  if (!successAddMovie) {
    return <ProgressBar progress={uploadProgress} errorAddMovie={errorAddMovie}/>;
  } else {
    return (
      <div className='finished-upload-movie-container'>
        <span className='upload-congrats-text'>¡Felicitaciones!</span>
        <span className='upload-description'>{movieName} fue correctamente subida.</span>
      </div>
    );
  }
};

export default RenderProgressBar;
