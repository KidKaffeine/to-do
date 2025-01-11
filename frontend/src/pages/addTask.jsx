import "../styles/pages.css";
import Label from "../components/Label/Label";
import Input from "../components/Input/Input";
import { Form } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button/Button";
import { useState } from "react";

;

function AddTask() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <>
      <Form
        method="post"
        className={"formAddTask"}
        action="/homepage/add"
        autoComplete="off"
      >
        <FontAwesomeIcon icon={faPoo} size="2xl" className="formIcon" />
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
        <span>
          <small>Is this important?</small>
          <FontAwesomeIcon
            icon={faCircleExclamation}
            onClick={() => setIsFavorite(!isFavorite)}
            className={isFavorite ? "important" : "notImportant"}
          />
        </span>
        <Button
          type={"submit"}
          className={"formBtn"}
          title={"Submit"}
          name={"favorite"}
          value={isFavorite}
        />
      </Form>
    </>
  );
}

export default AddTask;
