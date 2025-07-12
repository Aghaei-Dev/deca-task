import axios from 'axios'
const URL = 'https://randomuser.me/api/?results=1&nat=us'
export const fetchRandomUser = async () => {
  try {
    const response = await axios.get(URL, {
      timeout: 5000,
    })
    return response.data.results[0]
  } catch (error) {
    console.error('Error fetching random user:', error)
    throw new Error('Failed to fetch user')
  }
}
