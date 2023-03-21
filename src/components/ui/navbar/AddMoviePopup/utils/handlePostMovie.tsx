import { useState } from 'react'
import { FileRejection, DropEvent } from 'react-dropzone'
import { uploadMovieWithPicture } from "./postData";

export interface HandleFileSubmitProps {
  onSubmit: (file: File) => void
}

const useHandlePostMovie = ({ onSubmit }: HandleFileSubmitProps) => {
  const [fileData, setFileData] = useState<File | null>(null)
  const [movieName, setMovieName] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [successAddMovie, setSuccessAddMovie] = useState<boolean>(false)
  const [errorAddMovie, setErrorAddMovie] = useState<string>('')
  const [uploadProgress, setUploadProgress] = useState<number>(0)

  const handleDrop = (acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      setFileData(file)
      onSubmit(file)
    }
  }

  const handleSubmit = async () => {
    if (!fileData) return
    setIsLoading(true)
    setErrorAddMovie('')
    try {
      const response = await uploadMovieWithPicture(movieName, fileData)
      console.log('response', response)
      setSuccessAddMovie(true)
    } catch (error) {
      console.error('Failed to upload photo', error)
      setErrorAddMovie('¡ERROR! NO SE PUDO CARGAR LA PELÍCULA')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    fileData,
    handleDrop,
    movieName,
    setMovieName,
    isLoading,
    successAddMovie,
    errorAddMovie,
    handleSubmit,
    uploadProgress
  }
}

export default useHandlePostMovie
