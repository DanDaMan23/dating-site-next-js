"use server"

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(
      "https://dating-rest-api.onrender.com/auth/login",
      {
        method: "POST",
        headers: {
          Accept: "applicaiton/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      }
    )

    if (!response.ok) {
      throw new Error("Network response was not ok.")
    }

    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error("Error fetching data", error)
  }
}
