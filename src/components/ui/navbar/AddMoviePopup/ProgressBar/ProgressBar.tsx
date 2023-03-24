import { useRef, useEffect } from 'react';
import './progressbar.css';

/**
 * Progress bar component that displays the progress of an operation.
 * @param progress - The progress value to display.
 * @param errorAddMovie - The error message to display if there is an error.
 * @returns The progress bar component.
 */
const ProgressBar = ({
                       progress,
                       errorAddMovie,
                     }: {
  progress: number;
  errorAddMovie: string;
}): JSX.Element => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  return (
    <div className="progress-bar-container">
      <div
        ref={progressBarRef}
        className="progress-bar"
        style={{
          backgroundColor: !errorAddMovie ? '#64EEBC' : '#FF0000',
          animation: !errorAddMovie ? '' : 'none',
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
