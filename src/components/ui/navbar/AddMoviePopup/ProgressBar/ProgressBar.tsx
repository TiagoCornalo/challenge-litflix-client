import {useRef, useEffect} from "react";
import './progressbar.css'

const ProgressBar = ({ progress, errorAddMovie }: { progress: number, errorAddMovie: string }): JSX.Element => {

  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (progressBarRef.current) {
      console.log('progress', progress)
      progressBarRef.current.style.width = `${progress}%`
    }
  }, [progress])

  return (
    <div className="progress-bar-container">
      <div
        ref={progressBarRef}
        className="progress-bar"
        style={{
          backgroundColor: !errorAddMovie ? "#64EEBC" : '#FF0000',
          animation: !errorAddMovie ? '' : 'none',
      }}
      ></div>
    </div>
  );
}

export default ProgressBar
