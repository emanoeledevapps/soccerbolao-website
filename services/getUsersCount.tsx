import axios from "axios"

export async function getUsersCount(): Promise<number> {
  try {
    const response = await axios.get(`${process.env.API_URL}/users/count`)
    return response.data.count
  } catch(e) {
    console.log(e)
    return 0
  }
}
