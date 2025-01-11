import "../styles/pages.css";
import Label from "../components/Label/Label";
import Input from "../components/Input/Input";
import { Form } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button/Button";

function AddTask() {
  return (
    <>
      <Form
        method="post"
        className={"formAddTask"}
        action="/homepage/add"
        autoComplete="off"
      >
      <FontAwesomeIcon icon={faPoo} size="2xl" className="formIcon"/>
        <Label
          htmlFor={"newTask"}
          ariaLabel={"newTask input"}
          className={"newTaskLabel"}
          title={"Shit do to:"}
        />
        <Input
          type={"text"}
          name={"newTask"}
          id={"newTask"}
          className={"newTaskInput"}
        />
        <Label
          htmlFor={"checkbox"}
          ariaLabel={"important task?"}
          className={"checkBoxLabel"}
          title={"Is this shit important?"}
        />
        <Input
          type={"checkbox"}
          name={"checkbox"}
          id={"checkbox"}
          className={"newTaskCheckbox"}
        />
        <Button type={"submit"} className={"formBtn"} title={"Submit"}/>
      </Form>
    </>
  );
}

export default AddTask;
