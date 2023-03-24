import { useState } from 'react';
import { FileRejection, DropEvent } from 'react-dropzone';
import { uploadMovieWithPicture } from './postData';

/**
 * Props object for the `useHandlePostMovie` hook.
 */
export interface HandleFileSubmitProps {
  /**
   * Function to handle the submit event when a file is dropped.
   * @param file - The dropped file.
   */
  onSubmit: (file: File) => void;
}

/**
 * Hook for handling file upload and movie data submission.
 * @param props - Props object containing the onSubmit function.
 * @returns Object containing state values and functions for handling file upload and movie data submission.
 */
const useHandlePostMovie = ({ onSubmit }: HandleFileSubmitProps) => {
  const [fileData, setFileData] = useState<File | null>(null);
  const [movieName, setMovieName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [successAddMovie, setSuccessAddMovie] = useState<boolean>(false);
  const [errorAddMovie, setErrorAddMovie] = useState<string>('');
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  /**
   * Function to handle the drop event when a file is dropped onto the dropzone.
   * @param acceptedFiles - Array of accepted File objects.
   * @param fileRejections - Array of rejected File objects.
   * @param event - Drop event object.
   */
  const handleDrop = (
    acceptedFiles: File[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) => {
    if (acceptedFiles.length > 0) {
      setIsLoading(true);
      const imageReader = new FileReader();
      imageReader.onprogress = (e) => {
        if (e.lengthComputable) {
          const progress = (e.loaded / e.total) * 100;
          setUploadProgress(progress);
        }
      };
      imageReader.readAsDataURL(acceptedFiles[0]);
      imageReader.onload = () => {
        const file = acceptedFiles[0];
        setFileData(file);
        onSubmit(file);
        setIsLoading(false);
      };
    } else if (fileRejections.length > 0) {
      setErrorAddMovie('¡ERROR! NO SE PUDO CARGAR LA PELÍCULA');
    }
  };

  /**
   * Function to handle retrying the upload process when it fails.
   */
  const handleRetryUpload = () => {
    setSuccessAddMovie(false);
    setErrorAddMovie('');
    setUploadProgress(0);
    setFileData(null);
  };

  /**
   * Function to handle submitting the movie data and uploaded file to the server.
   */
  const handleSubmit = async () => {
    if (!fileData) return;
    try {
      const response = await uploadMovieWithPicture(movieName, fileData);
      console.log('response', response);
      setSuccessAddMovie(true);
    } catch (error) {
      console.error('Failed to upload movie', error);
    }
  };

  return {
    fileData,
    handleDrop,
    movieName,
    setMovieName,
    isLoading,
    successAddMovie,
    errorAddMovie,
    handleSubmit,
    uploadProgress,
    handleRetryUpload,
  };
};

export default useHandlePostMovie;
