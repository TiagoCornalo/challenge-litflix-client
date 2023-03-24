import axios, { AxiosResponse } from 'axios';

const postUrl = 'https://challenge-liteflix-api-production.up.railway.app/api/movies';

/**
 * Uploads a movie with a picture to the server.
 * @param name - The name of the movie.
 * @param file - The file to upload.
 * @param fetchUserMovies - updates the state of the user's movies when the upload is complete.
 * @returns Promise that resolves when the upload is complete.
 */
export const uploadMovieWithPicture = async (
  name: string,
  file: File,
  fetchUserMovies: (() => void) | undefined,
): Promise<void> => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('image', file);

  try {
    const response: AxiosResponse = await axios.post(postUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response) {
      fetchUserMovies?.();
    } else {
      console.error('Failed to upload photo');
    }
  } catch (error) {
    console.error('Failed to upload photo', error);
  }
};
