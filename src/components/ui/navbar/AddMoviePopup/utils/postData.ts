import axios from 'axios'
const postUrl = 'https://jsonplaceholder.typicode.com/posts'

export const uploadMovieWithPicture = async (name: string, file: File): Promise<void> => {
  const formData = new FormData()
  formData.append('name', name)
  formData.append('file', file)

  try {
    const response = await axios.post(postUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (response) {
      console.log('Photo uploaded successfully')
    } else {
      console.error('Failed to upload photo')
    }
  } catch (error) {
    console.error('Failed to upload photo', error)
  }
}

