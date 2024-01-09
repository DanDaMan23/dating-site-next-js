"use server"

export interface signupBody {
  email: string
  password: string
  name: string
  bio: string
  // image: File
}

export const signup = async (body: signupBody) => {
  try {
    const response = await fetch(
      "https://dating-rest-api.onrender.com/auth/signup",
      {
        method: "POST",
        headers: {
          Accept: "applicaiton/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    )

    if (!response.ok) {
      throw new Error("Network response was not ok.")
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching data", error)
  }
}
