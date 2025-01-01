import { redirect } from "react-router"

export async function addTaskHandler ({ request }) {
    try {
      const formData = await request.formData()
      const data = Object.fromEntries(formData)
  
      let userSession  = sessionStorage.getItem("User")
      let { token } = JSON.parse(userSession)
  
      const response = await fetch("http://localhost:8000/api/tasks/create", {
        method: "POST", 
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ task: data.newTask }),
      })
  
      if(!response.ok) {
        throw new Error("Couldn't create task.")
      }
  
      await response.json()
      redirect("/homepage")
    } catch (error) {
        console.log(error)
        throw new Error("Something went wrong")
    }
  }