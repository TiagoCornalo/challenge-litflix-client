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
      setIsLoading(true)
      const imageReader = new FileReader()
      imageReader.onprogress = (e) => {
        if (e.lengthComputable) {
          const progress = (e.loaded / e.total) * 100
          setUploadProgress(progress)
        }
      }
      imageReader.readAsDataURL(acceptedFiles[0])
      imageReader.onload = () => {
        const file = acceptedFiles[0]
        setFileData(file)
        onSubmit(file)
        setIsLoading(false)
      }
    } else if(fileRejections.length > 0) {
      setErrorAddMovie('¡ERROR! NO SE PUDO CARGAR LA PELÍCULA')
    }
  }

  const handleRetryUpload = () => {
    setSuccessAddMovie(false)
    setErrorAddMovie('')
    setUploadProgress(0)
    setFileData(null)
  }

  const handleSubmit = async () => {
    if (!fileData) return
    try {
      const response = await uploadMovieWithPicture(movieName, fileData)
      console.log('response', response)
      setSuccessAddMovie(true)
    } catch (error) {
      console.error('Failed to upload movie', error)
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
    uploadProgress,
    handleRetryUpload
  }
}

export default useHandlePostMovie
