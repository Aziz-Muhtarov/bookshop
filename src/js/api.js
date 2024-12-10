export const apiKey = "AIzaSyAkmf3qkRoL5lhVfITJvNlcENkhIVVC-74";
export const baseApiUrl = `https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`;

export async function fetchBooks(query, maxResults = 6, startIndex = 0) {
  const url = `${baseApiUrl}?q=subject:${query}&key=${apiKey}&printType=books&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=en`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}