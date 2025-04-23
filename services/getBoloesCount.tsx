import axios from "axios"

export async function getBoloesCount(): Promise<number> {
  try {
    const response = await axios.get(`${process.env.API_URL}/pools/count`)
    return response.data.count
  } catch(e) {
    console.log(e)
    return 0
  }
}
