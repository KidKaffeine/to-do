import { redirect } from "react-router";

export async function tasksLoader() {
  let userSession = JSON.parse(sessionStorage.getItem("User"));
  let token = userSession.token;

  if (!token) return;

  const response = await fetch("http://localhost:8000/api/tasks/getAll", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const tasks = await response.json();

  return tasks;
}
