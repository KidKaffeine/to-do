import { redirect } from "react-router";

export async function addTaskHandler({ request }) {
  try {
    const data = await request.formData();
    const task = Object.fromEntries(data);
    const isFavorite = data.get("favorite");

    if (task.newTask.length < 10) {
      return { error: "Please add a task." };
    }
    let userSession = sessionStorage.getItem("User");

    let { token } = JSON.parse(userSession);

    const response = await fetch("http://localhost:8000/api/tasks/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: task.newTask, isFavorite: isFavorite }),
    });

    if (!response.ok) {
      throw new Error("Couldn't create task.");
    }

    await response.json();
    return redirect("/homepage");
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
}

export async function deleteTaskHandler({ params }) {
  try {
    let id = params.id;

    let userSession = sessionStorage.getItem("User");
    let { token } = JSON.parse(userSession);

    const response = await fetch(
      `http://localhost:8000/api/tasks/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Couldn't create task.");
    }

    await response.json();
    return redirect("/homepage");
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
}

export async function updateTaskHandler({ request, params }) {
  try {
    let formData = await request.formData();
    let data = Object.fromEntries(formData);
    let id = params.id;

    if (data.updateTask.length < 10) {
      return { error: "Please update task." };
    }

    let userSession = sessionStorage.getItem("User");
    let { token } = JSON.parse(userSession);

    const response = await fetch(
      `http://localhost:8000/api/tasks/update/${id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTask: data.updateTask }),
      }
    );

    if (!response.ok) {
      throw new Error("Couldn't update task.");
    }

    await response.json();
    return redirect("/homepage");
  } catch (error) {
    console.log(error);
  }
}
