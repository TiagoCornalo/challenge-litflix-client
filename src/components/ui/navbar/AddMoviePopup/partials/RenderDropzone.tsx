import Dropzone from "react-dropzone";
import Clip from "../../../../../assets/svg/clip.svg";
import RenderProgressIndicator from "./RenderProgressIndicator";
import RenderProgressBar from "./RenderProgressBar";
import { FileRejection, DropEvent } from 'react-dropzone';
import '../addmoviepopup.css';
interface RenderDropzoneProps {
  isLoading: boolean
  fileData: File | null
  errorAddMovie: string
  successAddMovie: boolean
  uploadProgress: number
  handleDrop: (acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) => void
  handleRetryUpload: () => void
  movieName: string
}

/**

 Renders a dropzone component based on the isLoading and fileData state.
 @function
 @returns {JSX.Element} A Dropzone component or a popup-file-progress-container component
 */
const renderDropzone = ({
                          isLoading,
                          fileData,
                          handleDrop,
                          errorAddMovie,
                          successAddMovie,
                          uploadProgress,
                          handleRetryUpload,
                          movieName,
                        }: RenderDropzoneProps) => {
  if (!isLoading && !fileData) {
    return (
      <div className='popup-file-dropzone-container'>
        <Dropzone onDrop={handleDrop}>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()} className='popup-file-dropzone'>
              <input {...getInputProps()} />
              <img src={Clip} alt="clip icon file"/>
              <p className='drop-file-text'>Agregá un archivo o arrastralo y soltalo aquí</p>
              <p className='drop-file-text-responsive'>agrega un archivo</p>
            </div>
          )}
        </Dropzone>
      </div>
    )
  } else {
    return (
      <div className='popup-file-progress-container'>
        <div className='progress-indicator-container'>
          <RenderProgressIndicator errorAddMovie={errorAddMovie} successAddMovie={successAddMovie} uploadProgress={uploadProgress}/>
        </div>
        <RenderProgressBar
          successAddMovie={successAddMovie}
          uploadProgress={uploadProgress}
          errorAddMovie={errorAddMovie}
          movieName={movieName}
        />
        {errorAddMovie ?
          <div className="retry-button-container">
              <span className='retry-loading-text' onClick={handleRetryUpload}>
                Reintentar
                </span>
          </div> :
          null
        }
      </div>
    )
  }
}

export default renderDropzone
