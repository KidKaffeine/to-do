import { Form } from "react-router";

function UpdateTaskForm({ id, setIsEditing }) {
  return (
    <>
      <Form method="post" action={`homepage/update/${id}`}>
        <label htmlFor="newTask">New Task</label>
        <input type="text" name="updateTask" id="newTask" />
        <button type="submit" onClick={() => setIsEditing(false)}>
          Submit
        </button>
      </Form>
    </>
  );
}

export default UpdateTaskForm;
